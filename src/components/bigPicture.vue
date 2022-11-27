<template>
  <div id="bigPicture">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bigPicture",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
#bigPicture {
  width: 100vw;
  height: 300px;
  color: white;
  background-image: url(../assets/banner_bg.png);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .left {
    margin-left: 20px;
    margin-right: 100px;
  }
  .right {
    .bottom {
      width: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
