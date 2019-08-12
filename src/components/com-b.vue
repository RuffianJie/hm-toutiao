<template>
  <div class='app'>com-b <button @click="fn">给a组件传值</button></div>
</template>

<script>
import eventBus from '@/components/eventBus'
export default {
  name: 'com-b',
  data () {
    return {
      msg: 'b组件的数据'
    }
  },
  methods: {
    fn () {
      eventBus.$emit('b2a', this.msg)
    }
  }
}
</script>

<style scoped lang='less'></style>
