### `Layout` 布局
通过基础的 24 分栏，迅速简便地创建布局。


<ClientOnly>
<template>
<demo-block>
<template #demo-title>基础布局</template>
<template #component-body>
    <ha-row>
        <ha-col :span="24">
            <div class="col-content bg-col-dark">Col</div>
        </ha-col>
    </ha-row>
</ha-row>
</template>
<template #component-remark>
    <div class="description">
        <p>通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。</p>
    </div>
</template>
<template #component-code>

```javascript
<ha-row>
    <ha-col :span="24">
        <div class="content"></div>
    </ha-col>
</ha-row>
```
</template>
</demo-block>
</template>

</ClientOnly>


<style>
.ha-row {
    margin-bottom: 20px;
}
.ha-col {
    border-radius: 5px;
}
.col-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 36px;
    border-radius: 4px;
    color: #ffffff;
}
.bg-col-dark {
    background: #55aee4;
}
</style>