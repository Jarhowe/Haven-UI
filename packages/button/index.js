import HaButton from './src/index.vue'

HaButton.install = function(Vue) {
    Vue.component(HaButton.name, HaButton);
}

export default HaButton;