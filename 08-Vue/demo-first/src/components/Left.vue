<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr />
    <p>{{ msg }}</p>
    <p>{{ user }}</p>

    <MyCount :init="9"></MyCount>
    <hr>
    <button @click="send">点击发送</button>


  </div>
</template>

<script>
import bus from './eventBus.js'

export default {
  props: ['msg', 'user'],
  // 兄弟组件的数据共享，步骤一
  data() {
    return {
      str: '白云'
    }
  },
  methods: {
    // 兄弟组件的数据共享，步骤四
    send() {
      bus.$emit('search', this.str)
    }
  }
}
</script>

<style lang="less" scoped>
// 加上 scoped 实现样式独立
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}

// h3[data-v-3c83f0b7] 格式
h3 {
  color: red;
}

// h5[data-v-3c83f0b7]
// [data-v-3c83f0b7] h5

// 当使用第三方组件库的时候，如果有修改第三方组件默认样式的需求，需要用到 /deep/
// 相当于 [data-v-3c83f0b7] h5 这种格式
/deep/ h5 {
  color: pink;
}
</style>
