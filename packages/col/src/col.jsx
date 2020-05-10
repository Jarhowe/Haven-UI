export default {
    name: 'haCol',

    props: {
        // 渲染成html的标签, 默认div
        tag: {
            type: String,
            default: 'div'
        },
        // 组件占父容器的列数，总列数为24。如果设置为0，渲染出来为display: none;
        span: {
            type: Number,
            default: 24
        }
    },
    computed: {
        // 获取el-row的getter值
        parentGutter() {
            const parent = this.$parent;
            // 循环查找HaRow组件名
            while(parent && parent.$options.componentName !== 'HaRow') {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        }
    },
    render(h) {
        let classList = [];
        let style = {};
        // 通过gutter计算左右padding， 达到分隔col的目的
        if(this.parentGutter) {
            style.paddingLeft = this.parentGutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
        }
        // 处理布局相关
        ['span'].forEach(prop => {
            if(this[prop] || this[prop] === 0) {
                const propItem = prop !== 'span' ? `ha-col-${prop}_${this[prop]}` : `ha-col-${this[prop]}`;
                classList.push(propItem)
            }
        })

        return h(this.tag, {
            class: ['ha-col', ...classList],
            style
        }, this.$slots.default);
    }
}