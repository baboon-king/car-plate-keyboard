<template>
  <div>
    <div @click="closeByClickOverlay()" v-if="_overlay" class="back-bord" />
    <div @click="open()" ref="inputBlock">
      <!--支持插槽-->
      <slot :value="inputValue">
        <!--默认输入框-->
        <div class="data-show">
          <template v-for="n in 8">
            <div :class="['data-show-block', { active: isActive(n) }, { 'new-energy': isLastBlock(n) }]" :key="n">
              {{ inputValue[n - 1] }}
            </div>
          </template>
        </div>
      </slot>
    </div>

    <!--键盘-->
    <transition name="keybordSlide">
      <div v-if="visible" class="keybord-wrap">
        <header class="keybord-header">
          <span @click.stop="cancel()">取消</span>
          <span v-if="previewOnKeyboard" :class="['preview', { 'new-energy': newEnergy }]">{{ inputValue.join('') }}</span>
          <span :class="[{ gray: inputValue.length < 7 }]" @click.stop="submit()">完成</span>
        </header>

        <div class="keybord-keys">
          <ul class="keybord-keys-word-wrap" v-if="keybordType === '字'">
            <li @click.stop="inputWord(item)" class="button" v-for="item in wordList.slice(0, 30)" :key="item">
              {{ item }}
            </li>
          </ul>
          <div v-else>
            <ul class="keybord-keys-abc-wrap">
              <li @click.stop="inputWord(item)" class="button" v-for="item in abcList.slice(0, 10)" :key="item">
                {{ item }}
              </li>
            </ul>
            <ul class="keybord-keys-abc-wrap">
              <li @click.stop="inputWord(item)" class="button" v-for="item in abcList.slice(10, 20)" :key="item">
                {{ item }}
              </li>
            </ul>
            <ul class="keybord-keys-abc-wrap-short">
              <li @click.stop="inputWord(item)" class="button" v-for="item in abcList.slice(20, 29)" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="keybord-keys-bottom">
            <div @click.stop="toggle()" class="big-button">
              {{ keybordType }}
            </div>
            <ul class="keybord-keys-bottom-line">
              <li @click.stop="inputWord(item)" class="button" v-for="item in judgeList" :key="item">
                {{ item }}
              </li>
            </ul>
            <div @click.stop="deleteOne()" class="big-button">
              <slot name="backspace">
                <span class="icon-delete">⇦</span>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'car-plate-keyboard',
  props: {
    value: {
      type: String,
      default: ''
    },
    openKeyboardOnInit: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    previewOnKeyboard: {
      type: Boolean,
      default: true
    },
    checkInputBlocked: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      placeholderDom: null,
      keybordType: '字',
      inputValue: [],
      visible: false,
      wordList: [
        '京',
        '津',
        '渝',
        '沪',
        '冀',
        '晋',
        '辽',
        '吉',
        '黑',
        '苏',
        '浙',
        '皖',
        '闽',
        '赣',
        '鲁',
        '豫',
        '鄂',
        '湘',
        '粤',
        '琼',
        '川',
        '贵',
        '云',
        '陕',
        '甘',
        '青',
        '蒙',
        '桂',
        '宁',
        '新',
        '藏',
        '使',
        '领',
        '警',
        '学',
        '港',
        '澳'
      ],
      abcList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
    }
  },
  computed: {
    _overlay() {
      return this.visible && this.overlay
    },
    judgeList() {
      if (this.keybordType === 'ABC') {
        return this.abcList.slice(29, 36)
      } else {
        return this.wordList.slice(30, 37)
      }
    },
    newEnergy() {
      return this.inputValue.length === 8
    }
  },
  methods: {
    init() {
      this.visible = this.openKeyboardOnInit
      this.inputValue = this.value.split('')
    },
    isActive(index) {
      return this.inputValue.length === index - 1
    },
    isLastBlock(index) {
      return index === 8 && this.isActive(index)
    },
    // 键盘类型切换
    toggle() {
      if (this.inputValue.length === 0 || (this.inputValue.length > 0 && this.inputValue.length <= 8)) return
      this.keybordType = this.keybordType === 'ABC' ? '字' : 'ABC'
    },
    // 文字输入
    inputWord(word) {
      if (this.inputValue.length === 8) return
      this.inputValue.push(word)
    },
    // 删除一个字符
    deleteOne() {
      this.inputValue.pop()
    },
    closeByClickOverlay() {
      if (!this.closeOnClickOverlay) return
      this.cancel()
    },
    // 取消
    cancel() {
      this.visible = false
      // this.inputValue = []
      this.$emit('cancel', this.inputValue.join(''))
    },
    // 完成
    submit() {
      if (this.inputValue.length < 7) return
      this.visible = false
      this.$emit('submit', this.inputValue.join(''))
    },
    // 打开键盘
    open() {
      if (this.readonly) return
      this.visible = true
    },
    // 判断展示框是否被键盘挡住
    checkInputLocation(visible) {
      if (!this.checkInputBlocked) return
      if (visible) {
        const clientHeight = document.documentElement.clientHeight
        const scrollHeight = document.documentElement.scrollHeight
        const inputTopHeight = this.$refs.inputBlock.getBoundingClientRect().top
        const inputHeight = this.$refs.inputBlock.scrollHeight
        //如果键盘被挡住，并且页面没有滚动条
        if (inputHeight + 250 + inputTopHeight >= clientHeight && scrollHeight === clientHeight) {
          this.placeholderDom.style.display = 'block'
        }
        //键盘唤醒并且键盘挡住输入框,同时页面无滚动条时，占位块展示出来从而使页面可以通过scrllTo()来滚动
        window.scrollTo(0, 250)
      } else {
        document.body.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
        this.placeholderDom.style.display = 'none'
      }
    },
    createPlaceholderDom() {
      if (!this.checkInputBlocked) return
      this.placeholderDom = document.createElement('div')
      this.placeholderDom.className = 'placeholder'
      this.placeholderDom.style.cssText = 'height: 260px;width: 100%;background: red;opacity:0'
      this.placeholderDom.style.display = 'none'
      document.body.appendChild(this.placeholderDom)
    }
  },
  created() {
    this.init()
    this.createPlaceholderDom()
  },
  watch: {
    value(value = '') {
      this.inputValue = value.split('')
    },
    inputValue(key) {
      if (this.inputValue.length === 0) this.keybordType = '字'
      if (this.inputValue.length > 0 && this.inputValue.length <= 7) this.keybordType = 'ABC'
    },
    visible(bool) {
      this.checkInputLocation(bool)
    }
  }
}
</script>

<style scoped lang="less">
@backBordZIndex: 980511;

.back-bord {
  width: 100vw;
  overflow-y: scroll;
  height: calc(100vh + 250px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: @backBordZIndex;
  background-color: rgba(0, 0, 0, 0.1);
}

.gray {
  color: rgb(173, 171, 171);
}

.data-show {
  position: relative;
  width: 100%;
  column-count: 8;
  column-gap: 2px;
  min-width: 190px;
  max-width: 450px;
  .data-show-block {
    display: flex;
    height: 0;
    align-items: center;
    justify-content: center;
    border: 1px solid #dcdfe6;
    padding: 50% 0;
    color: #323233;
    font-size: 18px;
    border-radius: 4px;
  }
  .active {
    outline: none;
    border: 1px solid #409eff;
  }
  .new-energy {
    border-color: #67c23a;
  }
}

.keybord-wrap {
  position: fixed;
  z-index: @backBordZIndex + 1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background: #e7e8eb;
  .keybord-header {
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    background: #f0f0f0;
    .preview {
      color: #409eff;
    }
    .new-energy {
      color: #67c23a;
    }
  }

  .keybord-keys {
    padding: 5px 5px 15px 5px;
    box-sizing: border-box;
    .keybord-keys-word-wrap {
      list-style: none;
      padding: 0;
      margin: 0;
      column-count: 10;
      column-gap: 5px;
    }
    .keybord-keys-abc-wrap {
      list-style: none;
      padding: 0;
      margin: 0;
      column-count: 10;
      column-gap: 5px;
    }
    .keybord-keys-abc-wrap-short {
      list-style: none;
      padding: 0;
      margin: 0;
      column-count: 9;
      column-gap: 5px;
      padding: 0 13px;
    }
    .keybord-keys-bottom {
      display: flex;
      justify-content: space-between;
      .keybord-keys-bottom-line {
        width: 100%;
        margin: 0;
        padding: 0 5px;
        list-style: none;
        column-count: 7;
        column-gap: 5px;
      }
    }
  }
}

.button {
  &:active {
    background: #bbbbbb;
  }
  text-align: center;
  line-height: 40px;
  height: 40px;
  border-radius: 5px;
  background: #fff;
  color: black;
  margin-bottom: 7px;
}

.big-button {
  &:active {
    background: #177ce2;
  }
  width: 15vw;
  height: 40px;
  background: #1989fa;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  .icon-delete {
    font-size: 20px;
  }
}

.keybordSlide-enter-active,
.keybordSlide-leave-active {
  transition: all 0.2s linear;
  transform: translateY(0px);
}
.keybordSlide-enter, .keybordSlide-leave-to /* .keybordSlide-leave-active below version 2.1.8 */ {
  transform: translateY(250px);
}
</style>
