<template>
  <div class="hello">
    <test>
      <h1>Abcdefg</h1>
      <el-button type="primary">主要按钮</el-button>
      <ha-button type="primary">按钮1</ha-button>
      <h1>dd1</h1>
      <template slot="slotEle1" slot-scope="props">
        <div class="item1">{{props.item}}</div>
        <div class="item2">{{props.text}}</div>
      </template>
    </test>
  </div>
</template>

<script>
import test from './test'
export default {
  name: 'HelloWorld',
  components: {
    test
  },
  props: {
    msg: String
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
