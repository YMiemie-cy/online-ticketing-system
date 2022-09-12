<template>
  <div id="home">
    <el-container>
      <el-header>
        <el-menu :default-active="'/home/index'" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item v-for="(item, i) in navList" :index="item.path" :key="i">
            {{ item.title }}
          </el-menu-item>
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
    return {
      navList: [
        { title: '首页', path: '/home/index' },
        { title: '分类', path: '/home/classification' },
      ],
    };
  },
};
</script>

<style scoped>
.el-container {
  margin-left: 10%;
  margin-right: 10%;
}
.el-footer {
  color: #fff;
  background-color: #262426;
}
.userCenter {
  float: right !important;
}
</style>
