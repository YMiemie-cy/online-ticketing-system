<template>
  <div id="classification">
    <ClassificationBar :list="classList" :classify="classify" @getClassify="getClassify" />
    <MovieList :classify="classify" />
  </div>
</template>

<script>
import ClassificationBar from '../components/classificationBar.vue';
import MovieList from '../components/movieList.vue';

export default {
  name: 'classification',
  data() {
    return {
      classify: {
        type: '全部',
        region: '全部',
        period: '全部',
      },
      classList: [
        {
          title: '类型',
          default: '全部',
          children: [
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

            '纪录片',
            '戏曲',
            '音乐',
            '灾难',
            '青春',
            '儿童',
            '其他',
          ],
        },
        {
          title: '区域',
          default: '全部',
          children: [
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
            '意大利',
            '西班牙',
            '德国',
            '波兰',
            '澳大利亚',
            '伊朗',
            '其他',
          ],
        },
        {
          title: '年代',
          default: '全部',
          children: [
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
            '2011',
            '2000-2010',
            '90年代',
            '80年代',
            '70年代',
            '更早',
          ],
        },
      ],
    };
  },
  components: {
    ClassificationBar,
    MovieList,
  },
  watch: {},
  methods: {
    getClassify(data) {
      this.classify = Object.assign(data, this.classify);
    },
  },
};
</script>

<style scoped></style>
