<template>
    <div class="demo-item">
        <h3 class="title">
            <slot name="demo-title"></slot>
        </h3>
        <!-- 组件展示 -->
        <div class="demo-block" :class="[blockClass, {'demo-block_hover': hovering}]">
            <!-- 组件模块预览 -->
            <div class="demo-component_view">
                <slot name="component-body"></slot>
            </div>
            <!-- 组件代码展示 -->
            <div class="demo-component_code" ref="codeRefs">
                <!-- 组件描述 -->
                <slot name="component-remark"></slot>
                <!-- 组件示例 -->
                <div class="highlight">
                    <slot name="component-code"></slot>
                </div>
            </div>
            <!-- 组件代码控制（显示/隐藏） -->
            <div class="demo-component_footer" ref="footer"  @click="isExpanded = !isExpanded">
                <span class="text">{{controlText}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'demoBlock',
    data() {
        return {
            hovering: false,
            blockClass: null,
            fixedControl: false,    // 默认不固定
            isExpanded: false,      // 默认隐藏
            scrollParent: null
        }
    },
    computed: {
        controlText() {
            return this.isExpanded ? '隐藏代码' : '显示代码'
        },
        // 组件代码展示元素
        codeViewEle() {
            return this.$el.getElementsByClassName('demo-component_code')[0];
        },
        codeViewHeight() {
            if (this.$el.getElementsByClassName('description').length > 0) {
                return this.$el.getElementsByClassName('description')[0].clientHeight + this.$el.getElementsByClassName('highlight')[0].clientHeight + 0;
            }
            return this.$el.getElementsByClassName('highlight')[0].clientHeight;
        }
    },
    watch:{
        isExpanded(val) {
            this.codeViewEle.style.height = val ? `${this.codeViewHeight + 1}px` : '0';

            if (!val) {
                this.fixedControl = false;
                this.$refs.footer.style.left = '0';
                this.removeScrollHandler();
                return;
            }

            setTimeout(() => {
                this.scrollParent = document.querySelector('.theme-container > .page');
                this.scrollParent && this.scrollParent.addEventListener('scroll', this.scrollHandler);
                this.scrollHandler();
            }, 200);
        }
    },
    mounted() {
        this.$nextTick(() => {
            let highlight = this.$el.getElementsByClassName('highlight')[0];
            if (this.$el.getElementsByClassName('description').length === 0) {
                highlight.style.width = '100%';
                highlight.borderRight = 'none';
            }
        });
    },
    methods:{
        scrollHandler() {
            const { top, bottom, left } = this.$refs.codeRefs.getBoundingClientRect();
            console.log(this.$refs.codeRefs.getBoundingClientRect(), document.documentElement.clientHeight, document.documentElement.clientHeight && top + 100 <= document.documentElement.clientHeight);
            
            this.fixedControl = bottom > document.documentElement.clientHeight && top + 100 <= document.documentElement.clientHeight;
            // this.$refs.footer.style.left = this.fixedControl ? `${ left }px` : '0';
        },
        removeScrollHandler() {
            this.scrollParent && this.scrollParent.removeEventListener('scroll', this.scrollHandler);
        }
    },
    beforeDestroy() {
      this.removeScrollHandler();
    }
}
</script>
<style>
    .theme-default-content pre, .theme-default-content pre[class*="language-"]{
        margin: 0;
    }
</style>
<style lang="scss" scoped>
.demo-item {
    margin-bottom: 30px;
    .title {
        font-size: 22px;
        font-weight: 400;
        color: #1f2f3d;
        margin: 55px 0 20px;
        &::before {
            content: "&";
            color: #409eff;
            margin: 0 5px;
            font-weight: bold;
        }
    }
}
.demo-block {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    
    &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    }
    .demo-component_view {
        padding: 24px;
    }
    .demo-component_code {
        background-color: #fafafa;
        border-top: 1px solid #eaeefb;
        overflow: hidden;
        height: 0;
        transition: height 0.2s;
        .description {
            display: flex;
            box-sizing: border-box;
            font-size: 14px;
            padding: 0 20px;
            line-height: 22px;
            color: #666666;
            word-break: break-word;
            background-color: #ffffff;
            border-bottom: 1px solid #eaeefb;
        }
        div[class*="language-"] {
            border-radius: 0;
            background-color: #fafafa;
            .token.tag, .token.attr-name, .token.namespace, .token.deleted {
                color: #3182bd;
            }
            .token.string, .token.char, .token.attr-value, .token.regex, .token.variable {
                color: #756bb1;
            }
            code {
                color: #000000;
            }
        }
        
       
    }

    .demo-component_footer {
        border-top: 1px solid #eaeefb;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;
        margin-top: -1px;
        color: #d3dce6;
        cursor: pointer;
        position: relative;
        z-index: 10;
    }
    .is-fixed{
        position: fixed;
        bottom: 0;
        width: 740px;
    }
}  
</style>