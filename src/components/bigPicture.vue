<template>
  <div id="bigPicture">
    <div class="left">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="right">
      <div class="top">
        <p>{{ name }}</p>
        <p>{{ Classification }}</p>
        <p>{{ time }}</p>
        <p>{{ date }}</p>
      </div>
      <div class="bottom">
        <div class="btn">
          <el-button>特惠购票</el-button>
        </div>
        <div class="score">口碑、票房</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bigPicture',
  data() {
    return {
      name: '新神榜：杨戬',
      Classification: '动画 冒险 动作',
      time: '中国大陆/127分钟',
      date: '2022-08-19 09:00中国大陆上映',
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
#bigPicture {
  width: 100%;
  height: 300px;
  color: white;
  background-image: url(../assets/banner_bg.png);
  .left {
    float: left;
  }
  .right {
    float: left;
    .bottom {
      width: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
