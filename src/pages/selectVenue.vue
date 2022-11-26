<template>
  <div id="selectVenue">
    <BigPicture>
      <div>
        <div class="left">
          <img
            :src="currentList.description.gallery[0]"
            style="width: 200px; height: 280px"
          />
        </div>
        <div class="right">
          <div class="top">
            <p>{{ currentList.name }}</p>
            <p>
              {{
                `${currentList.classify.type} ${currentList.classify.region} ${currentList.classify.period}`
              }}
            </p>
            <p>{{ currentList.duration }}</p>

            <p>{{ currentList.date }}</p>
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
          <h2>{{ currentList.name }}</h2>
          <div class="score">{{ currentList.rating }}</div>
        </div>
        <div class="content">
          <div>时长:{{ currentList.duration }}</div>
          <div>类型:{{ currentList.classify.type }}</div>
          <div>主演:{{ currentList.description.actors }}</div>
        </div>
      </div>
      <div class="bottom">
        <div class="time">
          观影时间:
          <button
            v-for="(item, i) in tableData"
            @click="btn($event)"
            :data-key="i"
          >
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
              <el-button @click="goPayment(index)">选座购票</el-button>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BigPicture from "@/components/bigPicture.vue";
export default {
  name: "selectVenue",
  data() {
    return {
      index: 0,
      currentList: {},
      tableData: [],
    };
  },
  components: { BigPicture },
  created() {
    this.currentList = this.$root.getCurrentIdList(this.$route.params.id);
    this.currentList.location.filter((item) => {
      if (item.brand === this.$route.params.brand) {
        let obj = {
          date: item.date,
          children: [
            {
              time: item.time,
              language: item.language,
              room: item.room,
              price: item.price,
            },
          ],
        };
        console.log(obj);
        this.tableData.push(obj);
      }
    });
    console.log("tableDate", this.tableData);
  },
  methods: {
    btn(e) {
      // console.log(e.target.getAttribute('data-key'));
      this.index = parseInt(e.target.getAttribute("data-key"));
    },
    goPayment(index) {
      if (localStorage.getItem("token")) {
        this.$router.push(
          `/home/payment/${this.$route.params.id}/${index}/step2`
        );
      } else {
        this.$router.push("/login");
      }
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
      width: 414px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
