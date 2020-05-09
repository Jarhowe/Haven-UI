import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import HaElement from '../packages/index'
import '../packages/theme-chalk/index.scss'
// 完整引入
Vue.use(HaElement);

// 按需引入
// const {Button} = HaElement;
// Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
