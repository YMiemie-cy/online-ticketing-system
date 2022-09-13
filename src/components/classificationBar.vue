<template>
  <div id="classificationBar">
    <el-radio-group v-for="(item, i) in list" v-model="item.default" class="group">
      <div class="title">{{ item.title }}:</div>
      <div class="right">
        <el-row>
          <el-col :span="2" v-for="(item2, j) in item.children[0]">
            <el-radio-button :label="item2" class="button"></el-radio-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2" v-for="(item2, j) in item.children[1]">
            <el-radio-button :label="item2" class="button"></el-radio-button>
          </el-col>
        </el-row>
        <el-row v-if="item.children[2] !== undefined">
          <el-col :span="2" v-for="(item2, j) in item.children[2]">
            <el-radio-button :label="item2" class="button"></el-radio-button>
          </el-col>
        </el-row>
      </div>
    </el-radio-group>
  </div>
</template>

<script>
console.log(undefined);
export default {
  name: 'classificationBar',
  data() {
    return {
      list: [
        {
          title: '类型',
          default: '全部',
          children: [
            [
              '全部',
              '爱情',
              '喜剧',
              '动画',
              '剧情',
              '恐怖',
              '惊悚',
              '科幻',
              '动作',
              '悬疑',
              '犯罪',
              '冒险',
            ],
            [
              '战争',
              '奇幻',
              '运动',
              '家庭',
              '古装',
              '武侠',
              '西部',
              '历史',
              '传记',
              '歌舞',
              '黑色电影',
              '短片',
            ],
            ['纪录片', '戏曲', '音乐', '灾难', '青春', '儿童', '其他'],
          ],
        },
        {
          title: '区域',
          default: '全部',
          children: [
            [
              '全部',
              '大陆',
              '美国',
              '韩国',
              '日本',
              '中国香港',
              '中国台湾',
              '泰国',
              '印度',
              '法国',
              '英国',
              '俄罗斯',
            ],
            ['意大利', '西班牙', '德国', '波兰', '澳大利亚', '伊朗', '其他'],
          ],
        },
        {
          title: '年代',
          default: '全部',
          children: [
            [
              '全部',
              '2022',
              '2021',
              '2020',
              '2019',
              '2018',
              '2017',
              '2016',
              '2015',
              '2014',
              '2013',
              '2012',
            ],
            ['2011', '2000-2010', '90年代', '80年代', '70年代', '更早'],
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
#classificationBar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px;
  border: solid 1px #ededed;
}
.group {
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  border-bottom: dashed 1px #ededed;
  width: 100%;
  height: 90px;
}
#classificationBar > div:nth-child(2) {
  height: 60px;
}
#classificationBar > div:nth-child(3) {
  height: 60px;
  border: none;
}
.group .title {
  height: 30px;
  width: 30px;
  font-size: 10px;
  margin-right: 10px;
  line-height: 30px;
}
.group .right {
  flex: 1;
}
.el-row {
  height: 30px;
}
.el-col {
  height: 100%;
}
.button {
  width: 100%;
  height: 100%;
  float: left;
}
.button >>> .el-radio-button__inner {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1px;
  /* padding-left: 3px; */
  border: none !important;
  border-radius: 0 !important;
}
</style>
