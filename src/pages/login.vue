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
            <!-- <el-link :underline="false" @click="sendEmail" ref="eleCode">111</el-link> -->
            <input type="button" :value="codeText" @click="codeTimer" ref="elecode" ></input>
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
      <form ref="form" v-show="false">
        <label>from_name</label>
        <input type="text" name="from_name" value="LingYi" />
        <label>to_name</label>
        <input type="text" name="to_name" value="390017890@qq.com" />
        <label>Message</label>
        <input type="text" name="message" :value="code" />
      </form>
    </div>
  </div>
</template>

<script>
import { getLogin, postReg } from '../api';
import emailjs from '@emailjs/browser';

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
      }else{
        if (value == this.code) {
          callback();
        }else{
          callback(new Error('验证码有误'));
        } 
      }
      
    };

    return {
      show: true,
      loginList: {
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
      codeText: '发送验证码',
      code: ''
    };
  },
  created() {},
  mounted() {
  
  },
  methods: {
    async log() {
      const res = await getLogin({
        username: this.loginList.username,
        password: this.loginList.password,
      });
      if(res.data.code === 200){
        this.$router.push('/home/index')
      }
    },
     reg(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const res = await postReg({
            username: this.ruleForm.email,
            password: this.ruleForm.pass,
          });
          console.log('reg',res);
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
    sendEmail() {
      this.codeTimer();
      // emailjs
      //   .sendForm('service_pkon8ni', 'template_6fs6slm', this.$refs.form, 'WEXETXzwjHGVTHR3U')
      //   .then(
      //     result => {
      //       console.log('SUCCESS!', result.text);
      //     },
      //     error => {
      //       console.log('FAILED...', error.text);
      //     }
      //   );

      
    },
    codeTimer() {
      let time = 10;
      this.$refs.elecode.setAttribute('disabled','true')
      this.code = parseInt(Math.random()*10000);
      console.log(this.code);
      const timer =  setInterval(() => {
        this.codeText = `重新发送时间${time}s`;
        time--;
        if(time < 0){
          clearInterval(timer)
          time = 60;
          this.codeText = '发送验证码'
          this.$refs.elecode.removeAttribute('disabled')
        }
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
.left {
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.right {
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
}


.el-input /deep/ .el-input__inner {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0%;
}
.el-form-item /deep/ .el-form-item__label {
  color: #d1d2d4;
}
</style>
