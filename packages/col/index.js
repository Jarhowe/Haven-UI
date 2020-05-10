import HaCol from './src/col'

HaCol.install = function(Vue) {
    Vue.component(HaCol.name, HaCol);
}

export default HaCol;