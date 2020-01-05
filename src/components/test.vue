<script>
export default {
    name:'testComponent',
    data(){
        return {
            test: 'Hello',
            value: null,
            list: []
        }
    },
    methods: {
        testClick(e) {
            this.list.push(this.value);
            setTimeout(() => this.value = null, 0)
        },
        delEvent(item, index, $event) {
            // console.log('delEvent:', item, index, $event)
            this.list.splice(index, 1);
        }
    },
    render(createElement) {
        const {test, value, list} = this;
        /**
         * <div class="render-test active">
         *      <h1>Hello</h1>
         *      <button>按钮事件</button>
         * </div>
         */
        return createElement(
            'div', {
                class: [
                    'render-test',
                    {
                        'active': test ? true : false
                    }
                ],

            },
            [
                createElement('p', {
                    // DOM属性
                    domProps: {
                        innerHTML: 'domProps'
                    },
                    class: 'dom-class',
                    attrs: {
                        id: 'dom-id'
                    }
                }),
                createElement('h1', {
                    style: {
                        color: 'red'
                    },
                    // attrs ~ id、title、align ..., 不支持class
                    attrs: {
                        dataTest: test,
                        title: test,
                        id: 'title'
                    },
                    // slot: slot的name
                    slot: '',
                    // props 
                    props: {},
                    // ref
                    ref: 'titleRef',
                    // key
                    key: 'titleKey'
                }, test),
                this.$slots.default,
                this.$scopedSlots.slotEle1({
                    item: value,
                    text: 'slotEle1'
                }),
                createElement('p', {
                    class: 'model'
                }, `值：${value ? value : ''}`),
                createElement('label', {
                    class: 'label'
                }, [
                    // 实现双向绑定
                    createElement('input', {
                        domProps: {
                            value: value
                        },
                        on: {
                            input: event => {
                                this.value = event.target.value;
                            }
                        }
                    })
                ]),
                createElement('button', {
                    on: {
                        click: this.testClick
                    }
                }, '按钮事件'),
                createElement('ul', list.map((item, index) => (
                    createElement('li', {
                        attrs: {
                            key: index
                        },
                        class: 'item_li',
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            lineHeight: '24px'
                        }
                    }, [
                        createElement('span', {
                            class: ['item', `item_${index}`],
                            style: {
                                color: '#333'
                            }
                        }, `${index+1}、 ${item}`),
                        createElement('em', {
                            class: 'del',
                            style: {
                                fontSize: '18px',
                                cursor: 'pointer',
                                paddingLeft: '10px'
                            },
                            on: {
                                click: (event) => this.delEvent(item, index, event)
                            }
                        }, 'x')
                    ])
                )))
            ]
        )
    }
}
</script>