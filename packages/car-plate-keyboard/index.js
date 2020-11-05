import carPlateKeyboard from './car-plate-keyboard.vue'

carPlateKeyboard.install = function (Vue) {
  Vue.component(carPlateKeyboard.name, carPlateKeyboard)
}

export default carPlateKeyboard;  