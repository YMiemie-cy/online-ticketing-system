<template>
  <div id="login">
    <div class="left">111</div>
    <div class="right">
      <el-form label-position="right" label-width="80px" :model="formLabelAlign">
        <el-form-item label="名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
      },
    };
  },
  methods: {},
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
  width: 50%;
  height: 100%;
}
#login .right {
  width: 50%;
  height: 100%;
}
</style>
