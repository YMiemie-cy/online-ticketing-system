<template>
  <div id="classificationBar">
    <el-radio-group v-for="(item, i) in list" v-model="item.default" class="group">
      <div class="title">{{ item.title }}:</div>
      <div class="right">
        <div v-for="(item2, j) in item.children" @click="show">
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
  props: {
    list: {
      type: Array,
    },
    classify: {
      type: Object,
    },
    localClassify: {
      type: Object,
    },
  },
  methods: {
    show(e) {
      // console.log(e.target.parentElement.className.indexOf('is-active'));
      // previousSibling 表示上一个兄弟节点
      const typeName = e.target.parentElement.parentElement.parentElement.previousSibling.innerText;
      const option = e.target.innerText;

      if (this.classify && option !== '') {
        console.log('Bar', this.classify, typeName, option);
        if (typeName === '类型:') {
          this.$set(this.classify, 'type', option);
        } else if (typeName === '区域:') {
          this.$set(this.classify, 'region', option);
        } else if (typeName === '年代:') {
          this.$set(this.classify, 'period', option);
        }
        this.$emit('getClassify', this.classify);
      }
      if (this.localClassify && option !== '') {
        console.log('Bar', this.localClassify, typeName, option);
        if (typeName === '日期:') {
          this.$set(this.localClassify, 'date', option);
        } else if (typeName === '品牌:') {
          this.$set(this.localClassify, 'brand', option);
        } else if (typeName === '行政区:') {
          this.$set(this.localClassify, 'district', option);
        } else if (typeName === '影厅类型:') {
          this.$set(this.localClassify, 'cinemaType', option);
        } else if (typeName === '影院服务:') {
          this.$set(this.localClassify, 'service', option);
        }
        this.$emit('getLocalClassify', this.localClassify);
      }
    },
  },
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
    // > div {
    //   width: 64px;
    //   height: 36px;
    // }
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
