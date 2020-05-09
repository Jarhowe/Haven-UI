import HaButton from './src/button'

HaButton.install = function(Vue) {
    Vue.component(HaButton.name, HaButton);
}

export default HaButton;