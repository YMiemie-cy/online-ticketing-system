<template>
  <div id="user">
    用户中心
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="active" class="el-menu-vertical-demo" router>
          <el-menu-item v-for="(item, i) in list" :index="item.path" :key="i">
            <i class="el-icon-setting"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      active: "",
      list: [
        { title: "订单详情", path: "/home/user/orderDetails" },
        { title: "收藏", path: "/home/user/collection" },
      ],
    };
  },
  created() {},
  watch: {
    $route: {
      handler(newName, oldName) {
        this.active = newName.fullPath;
      },
      immediate: true,
    },
  },
};
</script>

<style scoped lang="scss">
.el-main {
  width: 100vw;
  height: 83vh;
}
</style>
