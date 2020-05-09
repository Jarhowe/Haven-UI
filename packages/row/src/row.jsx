// row
export default {
    name: 'haRow',
    props: {
        // 渲染成html的标签, 默认div
        tag: {
            type: String,
            default: 'div'
        },
        type: String, // flex
        // flex布局中align属性
        align: {
            type: String,
            default: 'top' // top, middle, bottom
        },
        // flex布局中justify属性
        justify: {
            type: String,
            default: 'start' // center, end, space-between, space-around
        },
        // 间隔
        gutter: Number
    },
    computed: {
        // 控制左右margin，用于抵消col的padding，使用gutter自动计算实际左右margin
        gutterStyle() {
            let styleObj = {};
            if(this.gutter) {
                styleObj.marginLeft = `-${this.gutter / 2}px`;
                styleObj.marginRight = styleObj.marginLeft 
            }
            return styleObj;
        }
    },
    render(h) {
        const {type, align, justify, gutterStyle} = this;
        return h(this.tag, {
            class: [
                'ha-row',
                {'ha-row_flex': type === 'flex'},
                justify !== 'start' ? `is_justify_${justify}` : null,
                align !== 'top' ? `is_align_${align}` : null
            ],
            style: gutterStyle
        }, this.$slots.default)
    }
}