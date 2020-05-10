### `Grid` 棚格
通过基础的 24 分栏，迅速简便地创建棚格。


<ClientOnly>
<template>
<demo-block>
<template #demo-title>基础棚格</template>
<template #component-body>
    <ha-row>
        <ha-col :span="24">
            <div class="col-content bg-col-color1">Col</div>
        </ha-col>
    </ha-row>
    <ha-row>
        <ha-col :span="12">
            <div class="col-content bg-col-color1">Col</div>
        </ha-col>
        <ha-col :span="12">
            <div class="col-content bg-col-color2">Col</div>
        </ha-col>
    </ha-row>
    <ha-row>
        <ha-col :span="8">
            <div class="col-content bg-col-color1">Col</div>
        </ha-col>
        <ha-col :span="8">
            <div class="col-content bg-col-color2">Col</div>
        </ha-col>
        <ha-col :span="8">
            <div class="col-content bg-col-color3">Col</div>
        </ha-col>
    </ha-row>
    <ha-row>
        <ha-col :span="6">
            <div class="col-content bg-col-color1">Col</div>
        </ha-col>
        <ha-col :span="6">
            <div class="col-content bg-col-color2">Col</div>
        </ha-col>
        <ha-col :span="6">
            <div class="col-content bg-col-color3">Col</div>
        </ha-col>
        <ha-col :span="6">
            <div class="col-content bg-col-color4">Col</div>
        </ha-col>
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
        <div class="col-content bg-col-color1">Col</div>
    </ha-col>
</ha-row>
<ha-row>
    <ha-col :span="12">
        <div class="col-content bg-col-color1">Col</div>
    </ha-col>
    <ha-col :span="12">
        <div class="col-content bg-col-color2">Col</div>
    </ha-col>
</ha-row>
<ha-row>
    <ha-col :span="8">
        <div class="col-content bg-col-color1">Col</div>
    </ha-col>
    <ha-col :span="8">
        <div class="col-content bg-col-color2">Col</div>
    </ha-col>
    <ha-col :span="8">
        <div class="col-content bg-col-color3">Col</div>
    </ha-col>
</ha-row>
<ha-row>
    <ha-col :span="6">
        <div class="col-content bg-col-color1">Col</div>
    </ha-col>
    <ha-col :span="6">
        <div class="col-content bg-col-color2">Col</div>
    </ha-col>
    <ha-col :span="6">
        <div class="col-content bg-col-color3">Col</div>
    </ha-col>
    <ha-col :span="6">
        <div class="col-content bg-col-color4">Col</div>
    </ha-col>
</ha-row>

<style>
.ha-row {
    margin-bottom: 20px;
}
.ha-row:last-child {
    margin-bottom: 0px;
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
.bg-col-color1 {
    background: #55aee4;
}
.bg-col-color2 {
    background: #2b709a;
}
.bg-col-color3 {
    background: #1f4e6b;
}
.bg-col-color4 {
    background: #042b44;
}
<style>
```
</template>
</demo-block>
</template>



<template>
<demo-block>
<template #demo-title>分栏间隔</template>
<template #component-body>
    <ha-row :gutter="20">
        <ha-col :span="6">
            <div class="col-content bg-col-color1">Col</div>
        </ha-col>
        <ha-col :span="6">
            <div class="col-content bg-col-color2">Col</div>
        </ha-col>
        <ha-col :span="6">
            <div class="col-content bg-col-color3">Col</div>
        </ha-col>
        <ha-col :span="6">
            <div class="col-content bg-col-color4">Col</div>
        </ha-col>
    </ha-row>
</template>
<template #component-remark>
    <div class="description">
        <p>Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。</p>
    </div>
</template>
<template #component-code>

```javascript
<ha-row :gutter="20">
    <ha-col :span="6">
        <div class="col-content bg-col-color1">Col</div>
    </ha-col>
    <ha-col :span="6">
        <div class="col-content bg-col-color2">Col</div>
    </ha-col>
    <ha-col :span="6">
        <div class="col-content bg-col-color3">Col</div>
    </ha-col>
    <ha-col :span="6">
        <div class="col-content bg-col-color4">Col</div>
    </ha-col>
</ha-row>

<style>
.ha-row {
    margin-bottom: 20px;
}
.ha-row:last-child {
    margin-bottom: 0px;
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
.bg-col-color1 {
    background: #55aee4;
}
.bg-col-color2 {
    background: #2b709a;
}
.bg-col-color3 {
    background: #1f4e6b;
}
.bg-col-color4 {
    background: #042b44;
}
<style>
```
</template>
</demo-block>
</template>




<template>
<demo-block>
<template #demo-title>混合棚格</template>
<template #component-body>
    <ha-row :gutter="20">
        <ha-col :span="16">
            <div class="col-content bg-col-color1">Col</div>
        </ha-col>
        <ha-col :span="8">
            <div class="col-content bg-col-color2">Col</div>
        </ha-col>
    </ha-row>
    <ha-row :gutter="20">
        <ha-col :span="4">
            <div class="col-content bg-col-color1">Col</div>
        </ha-col>
        <ha-col :span="16">
            <div class="col-content bg-col-color2">Col</div>
        </ha-col>
        <ha-col :span="4">
            <div class="col-content bg-col-color3">Col</div>
        </ha-col>
    </ha-row>
    <ha-row :gutter="20">
        <ha-col :span="4">
            <div class="col-content bg-col-color1">Col</div>
        </ha-col>
        <ha-col :span="4">
            <div class="col-content bg-col-color2">Col</div>
        </ha-col>
        <ha-col :span="4">
            <div class="col-content bg-col-color3">Col</div>
        </ha-col>
        <ha-col :span="12">
            <div class="col-content bg-col-color4">Col</div>
        </ha-col>
    </ha-row>
</template>
<template #component-remark>
    <div class="description">
        <p>Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。</p>
    </div>
</template>
<template #component-code>

```javascript
<ha-row :gutter="20">
    <ha-col :span="16">
        <div class="col-content bg-col-color1">Col</div>
    </ha-col>
    <ha-col :span="8">
        <div class="col-content bg-col-color2">Col</div>
    </ha-col>
</ha-row>
<ha-row :gutter="20">
    <ha-col :span="4">
        <div class="col-content bg-col-color1">Col</div>
    </ha-col>
    <ha-col :span="16">
        <div class="col-content bg-col-color2">Col</div>
    </ha-col>
    <ha-col :span="4">
        <div class="col-content bg-col-color3">Col</div>
    </ha-col>
</ha-row>
<ha-row :gutter="20">
    <ha-col :span="4">
        <div class="col-content bg-col-color1">Col</div>
    </ha-col>
    <ha-col :span="4">
        <div class="col-content bg-col-color2">Col</div>
    </ha-col>
    <ha-col :span="4">
        <div class="col-content bg-col-color3">Col</div>
    </ha-col>
    <ha-col :span="12">
        <div class="col-content bg-col-color4">Col</div>
    </ha-col>
</ha-row>

<style>
.ha-row {
    margin-bottom: 20px;
}
.ha-row:last-child {
    margin-bottom: 0px;
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
.bg-col-color1 {
    background: #55aee4;
}
.bg-col-color2 {
    background: #2b709a;
}
.bg-col-color3 {
    background: #1f4e6b;
}
.bg-col-color4 {
    background: #042b44;
}
<style>
```
</template>
</demo-block>
</template>
</ClientOnly>

### ha-row属性
|  参数  | 类型  |  说明  | 可选值 | 默认值 |
| :-----| :---- | :---- | :---- | :---- |
| type | String | 棚格类型 | flex | -
| tag | String | 自定义元素标签 | * | div
| gutter | Number | 棚格间隔 | - | 0
| justify | String | flex 布局下的水平排列方式 | start、end、center、space-around、space-between | start
| align | String | flex 布局下的垂直排列方式 | top、middle、bottom |  top


### ha-col属性
|  参数  | 类型  |  说明  | 可选值 | 默认值 |
| :-----| :---- | :---- | :---- | :---- |
| span | Number | 栅格占据的列数 | - | 24
| tag | String | 自定义元素标签 | * | div

<style>
.ha-row {
    margin-bottom: 20px;
}
.ha-row:last-child {
    margin-bottom: 0px;
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
.bg-col-color1 {
    background: #55aee4;
}
.bg-col-color2 {
    background: #2b709a;
}
.bg-col-color3 {
    background: #1f4e6b;
}
.bg-col-color4 {
    background: #042b44;
}
</style>