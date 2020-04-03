import HaUpload from './src/index.vue';

HaUpload.install = function(Vue) {
    Vue.component(HaUpload.name, HaUpload);
}

export default HaUpload;