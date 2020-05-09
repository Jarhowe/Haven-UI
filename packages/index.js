const components = []
const componentsContext = require.context('../packages', true, /\index.js/)
for (const componentPath of componentsContext.keys()) {
    if(componentPath === './index.js') continue;
    const componentConfig = componentsContext(componentPath);
    const componentItem = componentConfig.default || componentConfig;
    components.push(componentItem);
}

const install = function(vm) {
    if(install.installer) return;
    // 注册所有组件
    components.forEach(component => {
        vm.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const packagesObj = {};
for (const componentItem of components) {
    let itemName = componentItem.name;
    itemName = itemName.replace(/^ha/, '');
    packagesObj[itemName] = componentItem;
}
console.log({install, ...packagesObj});

export default {install, ...packagesObj}