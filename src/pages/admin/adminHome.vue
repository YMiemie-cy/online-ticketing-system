<template>
  <div id="adminHome">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-active="active" active-text-color="#027aff">
          <el-menu-item index="/adminHome/index">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu v-for="(item, i) in navList" :key="i" :index="`${i}`">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
              v-if="item.children"
              v-for="(item2, index2) in item.children"
              :index="item2.path"
              :key="item2.path"
            >
              <span>{{ item2.title }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'adminHome',
  data() {
    return {
      active: '/adminHome/index',
      navList: [
        {
          title: '用户中心',
          children: [{ path: '/adminHome/userInfo', title: '用户信息' }],
        },
        { title: '电影中心', children: [{ path: '/adminHome/filmCenter', title: '电影信息' }] },
      ],
    };
  },
  watch: {
    $route: {
      handler(newName, oldName) {
        this.active = newName.fullPath;
      },
      immediate: true,
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
#adminHome {
  width: 100%;
  height: 100%;
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .el-container {
    height: 100% !important;
  }
}
</style>
