<template>
  <div class='app'>
      <div class="header"></div>
      <div class="content">
          <!-- 给插槽传值 -->
          <slot name="content" :msg="msg"></slot>
      </div>
      <div class="footer">
          <slot name="footer"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'my-text',
  data () {
    return {
      msg: '组件内部数据'
    }
  }
}
</script>

<style scoped lang='less'></style>
