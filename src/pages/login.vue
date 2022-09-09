<template>
  <div id="login">
    <div class="left">logo</div>
    <div class="right">
      <div class="logIndex" v-show="show">
        <h2>登录</h2>
        <el-form label-position="top" label-width="80px">
          <el-form-item>
            <el-input v-model="loginList.username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginList.password" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="log" round>登录</el-button>
        <el-link :underline="false" @click="show = false">注册</el-link>
      </div>

      <div class="regIndex" v-show="!show">
        <el-link :underline="false" @click="show = true"><</el-link>
        <h2>注册</h2>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="email">
            <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
            <el-link :underline="false" @click="">发送验证码</el-link>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="ruleForm.code" placeholder="请输入验证码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="reg('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getLogin, postReg } from '../api';
export default {
  name: 'login',
  data() {
    var validateEmail = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入邮箱'));
      } else {
        var email = value;
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (reg.test(email)) {
          // alert('邮箱格式正确');
          callback();
        } else {
          callback(new Error('邮箱格式不正确'));
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    var checkCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error('验证码不能为空'));
      }
      if (value == 123456) {
        callback();
      }
    };

    return {
      show: true,
      loginList: {
        username: '',
        password: '',
      },
      regList: {
        username: '',
        password: '',
      },
      ruleForm: {
        pass: '',
        code: '',
        email: '',
      },
      rules: {
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        code: [{ required: true, validator: checkCode, trigger: 'blur' }],
        email: [{ required: true, validator: validateEmail, trigger: 'blur' }],
      },
    };
  },
  created() {},
  methods: {
    async log() {
      const res = await getLogin({
        username: this.loginList.username,
        password: this.loginList.password,
      });
      console.log(res);
    },
    async reg(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const res = await postReg({
            username: this.regList.username,
            password: this.regList.password,
          });
          console.log(res);
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
#login .left {
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#login .right {
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.el-input >>> .el-input__inner {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0%;
}
.el-form-item >>> .el-form-item__label {
  color: #d1d2d4;
}
</style>
