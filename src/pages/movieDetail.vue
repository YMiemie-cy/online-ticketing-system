<template>
  <div id="movieDetail">
    <div class="top">
      <BigPicture />
    </div>
    <div class="main">
      <el-menu
        :default-active="active"
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

      <el-main class="bot-main">
        <div v-show="active === '1'">
          <div>
            <div>
              <h2>剧情介绍</h2>
            </div>
            <p>
              商周之战一千五百年后，天界衰落，蒙冤落魄的杨戬以赏银捕手为业谋生。一日，杨戬接受了一位神秘访客的赏银去追捕一位少年，意外发现少年竟是自己的亲外甥沉香。沉香立志要寻回宝莲灯，劈山救母，却将酿成大祸。杨戬踏上追寻沉香并揭开尘封往事的旅程……
            </p>
          </div>
          <div>
            <div>
              <h2>演职人员</h2>
              <div><el-link type="info" @click="active = '2'">更多></el-link></div>
            </div>
            <div>xxxxxxxxxxxxxxxxxxxxx</div>
          </div>
          <div>
            <div>
              <h2>图集</h2>
              <div><el-link type="info" @click="active = '3'">更多></el-link></div>
            </div>
            <div>xxxxxxxxxxxxxxxxxxxxx</div>
          </div>
        </div>
        <div v-show="active === '2'">2222222222</div>
        <div v-show="active === '3'">3333333333</div>
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
      active: '1',
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

<style scoped lang="scss">
.bot-main {
  > div > div > div {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
