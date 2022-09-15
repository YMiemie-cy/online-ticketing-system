<template>
  <div id="classificationBar">
    <el-radio-group v-for="(item, i) in list" v-model="item.default" class="group">
      <div class="title">{{ item.title }}:</div>
      <div class="right">
        <div v-for="(item2, j) in item.children">
          <el-radio-button :label="item2" class="button"></el-radio-button>
        </div>
      </div>
    </el-radio-group>
  </div>
</template>

<script>
console.log(undefined);
export default {
  name: 'classificationBar',

  data() {
    return {};
  },
  props: ['list'],
};
</script>

<style scoped lang="scss">
#classificationBar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px;
  border: solid 1px #ededed;

  > div:last-child {
    border: none;
  }
}
.group {
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  border-bottom: dashed 1px #ededed;
  width: 100%;

  .title {
    height: 30px;
    font-size: 10px;
    margin-right: 10px;
    line-height: 30px;
  }
  .right {
    flex: 1;
  }
}

.button {
  height: 100%;
  float: left;
  /deep/.el-radio-button__inner {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1px;

    border: none !important;
    border-radius: 0 !important;
  }
}
</style>
