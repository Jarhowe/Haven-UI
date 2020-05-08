import HaButton from './src/index'

HaButton.install = function(Vue) {
    Vue.component(HaButton.name, HaButton);
}

export default HaButton;