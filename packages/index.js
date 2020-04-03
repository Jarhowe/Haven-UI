// 1.导入组件
import Button from './button'
import Upload from './upload'


// 2.定义组件列表
const components = [
    Button, Upload
]

const install = function(vm) {
    // 判断是否安装过
    if(install.installer) return;

    // 注册所有组件
    components.forEach(component => {
        vm.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    Button,
    Upload
};

/**
 * 使用：
 *  1. 引入所有组件
 *  import HavenUI from '../packages/index';
 *  Vue.use(HavenUI)
 * 
 *  2. 按需要引入
 *  import {Button} from '../packages/index';
 *  Vue.use(Button);
 */