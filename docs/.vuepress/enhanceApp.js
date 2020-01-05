// 扩展 VuePress 应用  第三方应用级别配置

//vue代码高亮显示库 VueHighlightJS
import VueHighlightJS from 'vue-highlightjs';

// 引入组件库
import HaUI from '../../packages/index';
import "../../packages/theme-chalk/index.scss";

export default ({Vue, options, router, siteData}) => {
    Vue.use(VueHighlightJS)
    Vue.use(HaUI)
}