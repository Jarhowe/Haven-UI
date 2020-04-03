<script type="text/jsx">
export default {
    name: 'haUpload',
    props: {
        value: {
            type: Array,
            default: () => [],
            required: true
        },
        fileName: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            fileList: this.value
        }
    },
    watch: {
        value: {
            handler(list) {
                this.fileList = list;
            },
            immediate: true,
            deep: true
        },
        fileList(list) {
            this.$emit('input', list);
        }
    },
    render(h) {
        const {fileList, fileName} = this;

        // 文件操作
        const operateList = (list = []) => {
            return list.map((item, index) => {
                
            })
        }

        // 图片回显
        const fileItemList = (list = []) => {
            return list.map((item, index) => (
                h('div', {
                    class: 'ha-upload-item'
                }, [
                    h('div', [
                        /* 图片 */
                        h('img', {
                            class: 'ha-upload-item_image',
                            attrs: {
                                src: item.url
                            }
                        }),
                        /* 遮层罩 */
                        h('div', {
                            class: 'ha-upload-item_actions',
                        }, [
                            // 文件名
                            fileName && typeof fileName === 'boolean' && h('em', {
                                class: 'ha-upload-item_fileName',
                                attrs: {
                                    title: item.fileName
                                }
                            }),
                            // 操作按钮
                            h('div', {
                                class: 'ha-upload-item_operate'
                            }, {
                                operateList 
                            })
                        ])
                    ])
                ])
            ))
        }

        return h('div', {
            class: 'ha-upload-list'
        }, [
            fileItemList(fileList)
        ])
    }
}
</script>