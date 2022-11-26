<template>
  <div id="home">
    <el-container>
      <el-header>
        <el-menu
          :default-active="active"
          class="el-menu-demo"
          mode="horizontal"
          router
        >
          <el-menu-item
            v-for="(item, i) in navList"
            :index="item.path"
            :key="item.path"
          >
            {{ item.title }}
          </el-menu-item>
          <el-submenu index="5" class="userCenter">
            <template slot="title">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
            </template>
            <el-menu-item @click="$router.push('/home/user/orderDetails')"
              >个人中心</el-menu-item
            >
            <el-menu-item @click="exit">退出</el-menu-item>
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
  name: "home",
  data() {
    return {
      navList: [
        { title: "首页", path: "/home/index" },
        { title: "分类", path: "/home/classification" },
      ],
      active: "",
    };
  },
  watch: {
    $route: {
      handler(newName, oldName) {
        this.active = newName.fullPath;
      },
      immediate: true,
      // deep: true
    },
  },
  methods: {
    exit() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
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
