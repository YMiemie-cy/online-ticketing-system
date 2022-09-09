<template>
  <div id="home">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">电影</el-menu-item>
          <el-menu-item index="3">处理中心</el-menu-item>
          <el-menu-item index="4">处理中心</el-menu-item>
          <el-submenu index="5" class="userCenter">
            <template slot="title">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
            </template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-container {
  margin-left: 15%;
  margin-right: 15%;
}
.el-footer {
  color: #fff;
  background-color: #262426;
}
.userCenter {
  float: right !important;
}
</style>
