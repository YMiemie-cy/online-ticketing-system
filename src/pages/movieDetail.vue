<template>
  <div id="movieDetail">
    <div class="top">
      <BigPicture />
    </div>
    <div class="main">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        mode="horizontal"
      >
        <el-menu-item index="1">
          <span slot="title">介绍</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title">演职人员</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title">图集</span>
        </el-menu-item>
      </el-menu>

      <el-main>
        <div v-show="active === '1'">111</div>
        <div v-show="active === '2'">222</div>
        <div v-show="active === '3'">333</div>
      </el-main>
    </div>
  </div>
</template>

<script>
import BigPicture from '../components/bigPicture.vue';
export default {
  name: 'movieDetail',
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.active = key;
    },
  },
  components: { BigPicture },
};
</script>

<style scoped></style>
