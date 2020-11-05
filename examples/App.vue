<template>
  <div id="app">
    <div class="wrap">
      <h3>基本使用</h3>
      <car-plate-keyboard @submit="submit"> </car-plate-keyboard>

      <h3>自定义输入框</h3>
      <car-plate-keyboard @submit="submit">
        <template #default="slotProps">
          <input type="text" :value="slotProps.value.join('')" />
          <div>{{ slotProps.value.join('') }}</div>
        </template>
      </car-plate-keyboard>

      <h3>自定义删除按钮内容</h3>
      <car-plate-keyboard @submit="submit">
        <template #backspace> 删除 </template>
      </car-plate-keyboard>

      <h3>传入默认值</h3>
      <car-plate-keyboard :value="defaultPlate" @submit="submit"> </car-plate-keyboard>

      <h3>父容器有宽度</h3>
      <div style="width: 250px">
        <car-plate-keyboard @submit="submit"> </car-plate-keyboard>
      </div>

      <h3>新能源多一位</h3>
      <car-plate-keyboard :value="defaultPlate2" @submit="submit"> </car-plate-keyboard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      defaultPlate: '沪A555',
      defaultPlate2: '沪A88888'
    }
  },
  methods: {
    submit(value) {
      console.log(value)
    }
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
.wrap {
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
  max-width: 600px;
  background: #f7f8fa;
}
</style>
