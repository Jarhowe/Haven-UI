### `Button` 按钮
常用的操作按钮。

<ClientOnly>
<template>
<demo-block>
<template #demo-title>基础按钮</template>
<template #component-body>
    <ha-button>默认按钮</ha-button>
    <ha-button type="primary">主要按钮</ha-button>
    <ha-button type="success">成功按钮</ha-button>
    <ha-button type="warning">警告按钮</ha-button>
    <ha-button type="danger">取消按钮</ha-button>
</template>
<template #component-remark>
    <div class="description">
        <p>使用type、plain、round和circle属性来定义 Button 的样式。</p>
    </div>
</template>
<template #component-code>

```vue
<ha-button>默认按钮</ha-button>
<ha-button type="primary">主要按钮</ha-button>
<ha-button type="success">成功按钮</ha-button>
<ha-button type="warning">警告按钮</ha-button>
<ha-button type="danger">取消按钮</ha-button>
```
</template>
</demo-block>
</template>

<template>
<demo-block>
<template #demo-title>禁用状态</template>
<template #component-body>
    <ha-button disabled>默认按钮</ha-button>
    <ha-button type="primary" disabled>主要按钮</ha-button>
    <ha-button type="success" disabled>成功按钮</ha-button>
    <ha-button type="warning" disabled>警告按钮</ha-button>
    <ha-button type="danger" disabled>取消按钮</ha-button>
</template>
<template #component-remark>
    <div class="description">
        <p>你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。</p>
    </div>
</template>
<template #component-code>

```vue
<ha-button disabled>默认按钮</ha-button>
<ha-button type="primary" disabled>主要按钮</ha-button>
<ha-button type="success" disabled>成功按钮</ha-button>
<ha-button type="warning" disabled>警告按钮</ha-button>
<ha-button type="danger" disabled>取消按钮</ha-button>
```
</template>
</demo-block>
</template>
</ClientOnly>