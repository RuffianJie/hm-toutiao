<template>
  <el-select :value="value" placeholder="请选择" clearable @change="fn">
    <el-option v-for="item in channelOptions" :key="item.id"
    :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
export default {
  name: 'my-channel',
  props: ['value'],
  data () {
    return {
      // 频道下拉选项数据
      channelOptions: []
    }
  },
  created () {
    // 获取频道下拉选项数据
    this.getChannelOptions()
  },
  // 怎么监听数据
  watch: {
    'myVal': function (newval, oldval) {
      // axios不会将参数传递给后台
      if (newval === '') {
        this.myVal = null
      }
    }
  },
  methods: {
    async getChannelOptions () {
      const {
        data: { data }
      } = await this.$http.get('channels')
      this.channelOptions = data.channels
    },
    fn (val) {
      // 后端不支持空字符问题处理
      if (val === '') val = null
      // 提交给父组件
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped lang='less'></style>
