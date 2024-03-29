# car-plate-keyboard

## 介绍

- car-plate-keyboard 是基于 Vue 的一款虚拟键盘，用于车牌号输入。

## 示例

- [GitHub](https://baboon-king.github.io/car-plate-keyboard)
- [GitEE](https://baboonking.gitee.io/car-plate-keyboard/)

## 如何使用

- 安装

```
npm install car-plate-keyboard --save
```

- vue 中注册插件

```
import carPlateKeyboard from 'car-plate-keyboard'
import 'car-plate-keyboard/lib/carPlateKeyboard.css'

Vue.use(carPlateKeyboard)
```

- 页面使用

```
<car-plate-keyboard @submit="submit"></car-plate-keyboard>
```

## API

### Props

| 参数                   | 说明                                 | 类型    | 默认值 |
| ---------------------- | ------------------------------------ | ------- | ------ |
| value                  | 默认值                               | String  | ""     |
| open-keyboard-on-init  | 初始化时就弹出键盘（在弹窗中使用时） | Boolean | false  |
| close-on-click-overlay | 点击遮罩关闭键盘                     | Boolean | true   |
| overlay                | 是否使用遮罩                         | Boolean | true   |
| preview-on-keyboard    | 是否在键盘上预览输入的值             | Boolean | true   |
| check-input-blocked    | 检查键盘是否挡住输入框               | Boolean | false  |
| readonly (1.0.2)       | 是否只读                             | Boolean | false  |

### Events

| 参数   | 说明 | 参数                         |
| ------ | ---- | ---------------------------- |
| cancel | 取消 | value: string (当前输入的值) |
| submit | 确定 | value: string (当前输入的值) |

### Slots

| 参数      | 说明                     | slotProps   |
| --------- | ------------------------ | ----------- |
| default   | 自定义输入框             | value:Array |
| backspace | 自定义退格(删除)按钮内容 | -           |

## 声明

- 本项目基于此项目上 [input-number-plate](https://github.com/woke-T/input-number-plate) 进行二次开发

- 在此感谢 [原作者](https://github.com/woke-T) 对开源做出的贡献

## Change Log

### 1.0.5

- 修复 小屏设备 (iPhone 5) 超出问题

### 1.0.4

- 修复 遮罩覆盖键盘问题

### 1.0.3

- 修复 ios 上打开键盘时，定位错误问题

### 1.0.2

- 增加 只读 `readonly` api

### 1.0.1

- none

### 1.0.0

- 首个版本
