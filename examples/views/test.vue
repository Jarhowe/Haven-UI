<template>
    <div class="render-test">
        <ha-button type="primary">按钮1</ha-button>
    </div>
</template>

<script>
export default {
    name:'testComponent',
    data(){
        return {
            test: 'Hello',
            value: null,
            list: [],
            fileList: [
                {url: require('../assets/images/logo.png')}
            ]
        }
    },
    methods: {
        testClick(e) {
            this.list.push(this.value);
            setTimeout(() => this.value = null, 0)
        },
        delEvent(item, index, $event) {
            this.list.splice(index, 1);
        }
    },
    // render(h) {
    //     const {test, value, list} = this;
    //     return h(
    //         'div', {
    //             class: [
    //                 'render-test',
    //                 {
    //                     'active': test ? true : false
    //                 }
    //             ],

    //         },
    //         [
    //             h('ha-button', {
    //                 attrs: {
    //                     type: 'primary'
    //                 },
    //             }, '默认点击'),
    //             h('p', {
    //                 // DOM属性
    //                 domProps: {
    //                     innerHTML: 'domProps'
    //                 },
    //                 class: 'dom-class',
    //                 attrs: {
    //                     id: 'dom-id'
    //                 }
    //             }),
    //             h('h1', {
    //                 style: {
    //                     color: 'red'
    //                 },
    //                 // attrs ~ id、title、align ..., 不支持class
    //                 attrs: {
    //                     dataTest: test,
    //                     title: test,
    //                     id: 'title'
    //                 },
    //                 // slot: slot的name
    //                 slot: '',
    //                 // props 
    //                 props: {},
    //                 // ref
    //                 ref: 'titleRef',
    //                 // key
    //                 key: 'titleKey'
    //             }, test),
    //             h('p', {
    //                 class: 'model'
    //             }, `值：${value ? value : ''}`),
    //             h('label', {
    //                 class: 'label'
    //             }, [
    //                 // 实现双向绑定
    //                 h('input', {
    //                     domProps: {
    //                         value: value
    //                     },
    //                     on: {
    //                         input: event => {
    //                             this.value = event.target.value;
    //                         }
    //                     }
    //                 })
    //             ]),
    //             h('button', {
    //                 on: {
    //                     click: this.testClick
    //                 }
    //             }, '按钮事件'),
    //             h('ul', list.map((item, index) => (
    //                 h('li', {
    //                     attrs: {
    //                         key: index
    //                     },
    //                     class: 'item_li',
    //                     style: {
    //                         display: 'flex',
    //                         justifyContent: 'center',
    //                         lineHeight: '24px'
    //                     }
    //                 }, [
    //                     h('span', {
    //                         class: ['item', `item_${index}`],
    //                         style: {
    //                             color: '#333'
    //                         }
    //                     }, `${index+1}、 ${item}`),
    //                     h('em', {
    //                         class: 'del',
    //                         style: {
    //                             fontSize: '18px',
    //                             cursor: 'pointer',
    //                             paddingLeft: '10px'
    //                         },
    //                         on: {
    //                             click: (event) => this.delEvent(item, index, event)
    //                         }
    //                     }, 'x')
    //                 ])
    //             )))
    //         ]
    //     )
    // }
}
</script>