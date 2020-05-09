// button
export default {
    name: 'haButton',
    props: {
        // 类型
        type: {
            type: String,
            default: 'default' // default [默认]、primary [主要]、success [成功]、warning [警告]、danger [取消]、text [文本]
        },
        // 大小
        size: String, // medium、small、mini
        // 按钮原生type属性
        nativeType: {
            type: String,
            default: 'button' // button / submit / reset
        },
        // disabled
        disabled: Boolean,
        // loading
        loading: Boolean,
        // 页面加载时给按钮自动获取焦点
        autofocus: Boolean
    },
    computed: {
        buttonDisabled() {
            return this.disabled;
        },
        buttonSize() {
            return this.size;
        }
    },
    render(h) {
        const {type, nativeType, loading, autofocus, buttonDisabled, buttonSize} = this;
        return h('button', {
            domProps: {
                type: nativeType,
                autofocus: autofocus,
                disabled: buttonDisabled || loading
            },
            class: [
                'ha-button', 
                type ? 'ha-button_' + type : '',
                buttonSize  ? 'ha-button_' + buttonSize : '',
                { 
                    'is_disabled': buttonDisabled, 
                    'is_loading': loading 
                }
            ],
            on: {
                click: event => this.$emit('click', event)
            }
        }, [
            h('span', this.$slots.default)
        ])
    }
}