<template>
  <div id="seatSelection">
    <BigPicture>
      <div>
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
              <el-button @click="viewDetails">查看更多电影详情</el-button>
            </div>
            <div class="score">口碑、票房</div>
          </div>
        </div>
      </div>
    </BigPicture>

    <ClassificationBar :list="seatList" />

    <div id="cinemaList">
      <h4 class="top">影院列表</h4>
      <div class="main">
        <div v-for="(item, i) in cinemaList">
          <div class="left">
            <p>{{ item.name }}</p>
            <p>{{ item.address }}</p>
          </div>
          <div class="right">
            <div>{{ item.price }}</div>
            <el-button @click="selectVenue">选座购票</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BigPicture from '@/components/bigPicture.vue';
import ClassificationBar from '@/components/classificationBar.vue';
export default {
  name: 'seatSelection',
  data() {
    return {
      name: '新神榜：杨戬',
      Classification: '动画 冒险 动作',
      time: '中国大陆/127分钟',
      date: '2022-08-19 09:00中国大陆上映',
      seatList: [
        {
          title: '日期',
          default: '明天9月16',
          children: ['明天9月16', '周六9月17', '周日9月18'],
        },
        {
          title: '品牌',
          default: '全部',
          children: [
            '全部',
            '太平洋电影城',
            '万达影城',
            'CGV影城',
            '横店影视',
            '橙天嘉禾影城',
            'UME国际影城',
            '保利万和国际影城',
            '卢米埃影城',
            '星光影城',
            '金逸影城',
            'EVO艺威影院',
            '幸福蓝海国际影城',
            '中影南方国际影城',
            '苏宁影城',
            '橙天国际影城',
            '沃美影城',
            '保利国际影城',
            '博纳国际影城',
            '星轶starx影城',

            '恒大嘉凯影城',
            '百老汇影城',
            '中影嘉莱国际影城',
            '大地影院',

            '百丽宫影城',
            'SFC上影影城',
            '中影星美国际影城',
            '中影泰得影城',
            '烽禾影城',
            '完美世界影城',

            '九州森美国际影城',
            '星河国际影城',
            '英皇ua电影城',
            '维多利影城',
            '海逸影城',
            '上影国际影城',

            '华联影城',
            'UA影院',
            'ACTO梦空间影城',
            '中影UL城市影院',

            '嘉裕国际影城',
            '嘉美国际影城',
            '欢乐小马电影城',
            '左岸国际影城',
            '海上国际影城',
            '至潮主题影城',
            '耀莱成龙国际影城',
            '其他',
          ],
        },
        {
          title: '行政区',
          default: '全部',
          children: [
            '全部',
            '地铁附近',
            '武侯区',
            '双流区',
            '成华区',
            '郫都区',
            '新都区',
            '锦江区',
            '金牛区',
            '青羊区',
            '龙泉驿区',
            '温江区',

            '都江堰市',
            '金堂县',
            '索州市',
            '青白江区',
            '彭州市',
            '邛崃市',
            '大邑县',
            '新津区',
            '简阳市',
            '蒲江县',
          ],
        },
        {
          title: '影厅类型',
          default: '全部',
          children: [
            '全部',
            'IMAX厅',
            'CGS中国巨幕厅',
            '杜比全景声厅',
            'Dolby Cinema厅',
            'ReaID厅',
            'RealD 6FL厅',
            'LUXE巨幕厅',
            '4DX厅',
            'DTS:X临境音厅',
            '儿童厅',
            '4K厅',

            '4D厅',
            '60帧厅',
            '120帧/4K厅',
            '巨幕厅',
            'CINITY厅',
            'MX4D厅',
            '激光厅',
            'ALPD Pro高亮厅',
          ],
        },
        {
          title: '影院服务',
          default: '全部',
          children: ['全部', '可改签', '可退票'],
        },
      ],
      cinemaList: [
        {
          name: '365影院（甜筒xxxxx）',
          address: '地址：xxxxxxxxxxxxxxxxxxxxx',
          price: '50',
        },
        {
          name: '365影院（甜筒xxxxx）',
          address: '地址：xxxxxxxxxxxxxxxxxxxxx',
          price: '50',
        },
        {
          name: '365影院（甜筒xxxxx）',
          address: '地址：xxxxxxxxxxxxxxxxxxxxx',
          price: '50',
        },
        {
          name: '365影院（甜筒xxxxx）',
          address: '地址：xxxxxxxxxxxxxxxxxxxxx',
          price: '50',
        },
        {
          name: '365影院（甜筒xxxxx）',
          address: '地址：xxxxxxxxxxxxxxxxxxxxx',
          price: '50',
        },
      ],
    };
  },
  components: { BigPicture, ClassificationBar },
  methods: {
    buy() {
      this.buyTickets = true;
    },
    viewDetails() {
      this.$router.push('/home/detail/1');
    },
    selectVenue() {
      this.$router.push('/home/selectVenue/1');
    },
  },
};
</script>

<style lang="scss" scoped>
#cinemaList {
  width: 100%;
  .top {
    height: 30px;
    width: 100%;
  }
  /deep/.main div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    border-bottom: dashed 1px #ededed;
    .left {
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;

      p {
        margin: 0;
      }
    }
    .right {
      width: 150px;
    }
  }
}
</style>
