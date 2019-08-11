<template>
  <div class="container">
    <el-card class="my-card">
      <!-- logo -->
      <img style="margin-bottom:20px" src="../../assets/images/logo_index.png" />
      <!-- 表单  绑定表单数据对象-:model="loginForm" -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- ------------------------------ -->
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            style="width:230px; margin-right:17px"
            placeholder="请输入验证码"
          ></el-input>
          <el-button type="primary">发送验证码</el-button>
        </el-form-item>
        <!-- ------------------------------- -->
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <!-- ------------------------------- -->
        <el-form-item>
          <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
        </el-form-item>
        <!-- ------------------------------ -->
      </el-form>
      <!-- ------------------------------ -->
    </el-card>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    // 自定义校验函数
    const checkMobile = (rule, value, callback) => {
      // 按照自己的校验逻辑去校验值即可
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号格式不对'))
      }
      callback()
    }
    return {
      // 表单数据对象
      loginForm: {
        // v-model字段依赖接口文档
        mobile: '19831532157',
        code: '246810'
      },
      // 校验规则对象
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validate: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位验证码', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    login () {
      // 1.对整个表单进行校验
      this.$refs.loginForm.validate(async valid => {
        try {
          // 2.校验成功 发起登录请求
          const { data: { data } } = await this.$http.post('authorizations', this.loginForm)
          // 存贮用户信息
          store.setUser(data)
          this.$router.push('/')
        } catch (error) {
          // 请求失败
          this.$message.error('手机号码或验证码错误')
        }
      })
    }
  }
}
</script>

<style lang="less">
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../../assets/images/login_bg.jpg") no-repeat center / cover;
  .my-card {
    width: 400px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
