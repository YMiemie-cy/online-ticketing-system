<template>
  <div id="bigPicture">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bigPicture',
  data() {
    return {};
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
    // .top {
    //   height: 300px;
    // }
  }
}
</style>
