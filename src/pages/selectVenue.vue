<template>
  <div id="selectVenue">
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
              <el-button>特惠购票</el-button>
            </div>
            <div class="score">口碑、票房</div>
          </div>
        </div>
      </div>
    </BigPicture>

    <div class="main">
      <div class="top">
        <div class="title">
          <h2>{{ contentList.name }}</h2>
          <div class="score">{{ contentList.rating }}</div>
        </div>
        <div class="content">
          <div>时长:{{ contentList.duration }}</div>
          <div>类型:{{ contentList.type }}</div>
          <div>主演:{{ contentList.starring }}</div>
        </div>
      </div>
      <div class="bottom">
        <div class="time">
          观影时间:
          <button v-for="(item, i) in tableData" @click="btn($event)" :data-key="i">
            {{ item.date }}
          </button>
        </div>
        <div class="venue">
          <el-table :data="tableData[index].children" style="width: 100%">
            <el-table-column prop="time" label="放映时间"></el-table-column>
            <el-table-column prop="language" label="语言版本"></el-table-column>
            <el-table-column prop="room" label="放映厅"></el-table-column>
            <el-table-column prop="price" label="售价（元）"></el-table-column>
            <el-table-column label="选座购票">
              <el-button @click="goPayment">选座购票</el-button>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BigPicture from '@/components/bigPicture.vue';
export default {
  name: 'selectVenue',
  data() {
    return {
      name: '新神榜：杨戬',
      Classification: '动画 冒险 动作',
      time: '中国大陆/127分钟',
      date: '2022-08-19 09:00中国大陆上映',
      index: 0,
      contentList: {
        name: '新神榜：杨戬',
        rating: '8.8分',
        duration: '127分钟',
        type: '动画',
        starring: 'xxxx',
      },
      tableData: [
        {
          date: '今天9月16',
          children: [{ time: '16:15', language: '中文2D', room: 'xxxx', price: '￥43' }],
        },
        {
          date: '今天9月17',
          children: [{ time: '17:15', language: '中文3D', room: 'xxxx', price: '￥23' }],
        },
        {
          date: '今天9月18',
          children: [{ time: '18:15', language: '中文2D', room: 'xxxx', price: '￥13' }],
        },
      ],
    };
  },
  components: { BigPicture },
  created() {
    console.log(this.tableData[0].children[0]);
  },
  methods: {
    btn(e) {
      // console.log(e.target.getAttribute('data-key'));
      this.index = parseInt(e.target.getAttribute('data-key'));
    },
    goPayment() {
      this.$router.push('/home/payment/1/step2');
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom: solid 1px #e5e5e5;
    padding-bottom: 10px;
    margin-bottom: 10px;

    .title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .content {
      width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
