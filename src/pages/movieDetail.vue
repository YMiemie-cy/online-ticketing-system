<template>
  <div id="movieDetail">
    <div class="top">
      <BigPicture>
        <div>
          <div class="left">
            <img src="../assets/logo.png" alt="" />
          </div>
          <div class="right">
            <div class="top">
              <p>{{ currentList.name }}</p>
              <p>
                {{
                  `${currentList.classify.type}  ${currentList.classify.period} ${currentList.classify.region}`
                }}
              </p>
              <p>{{ currentList.time }}</p>
              <p>{{ currentList.date }}</p>
            </div>
            <div class="bottom">
              <div class="btn">
                <el-button @click="buy">特惠购票</el-button>
              </div>
              <div class="score">口碑、票房</div>
            </div>
          </div>
        </div>
      </BigPicture>
    </div>
    <div class="main">
      <el-menu
        :default-active="active"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        mode="horizontal"
      >
        <el-menu-item index="1">
          <span slot="title">介绍</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title">演职人员</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title">图集</span>
        </el-menu-item>
      </el-menu>

      <el-main class="bot-main">
        <div v-show="active === '1'">
          <div class="plot">
            <div>
              <h2>剧情介绍</h2>
            </div>
            <p>
              {{ currentList.description.text }}
            </p>
          </div>
          <div class="actor">
            <div>
              <h2>演职人员</h2>
              <div>
                <el-link type="info" @click="active = '2'">更多></el-link>
              </div>
            </div>
            <div>{{ currentList.description.actors }}</div>
          </div>
          <div class="images">
            <div>
              <h2>图集</h2>
              <div>
                <el-link type="info" @click="active = '3'">更多></el-link>
              </div>
            </div>
            <div class="content">
              <div v-for="(item, index) in currentList.description.gallery">
                <img :src="item" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div v-show="active === '2'" class="cast">
          <div v-for="(item, index) in currentList.description.actor">
            <img :src="item" alt="" />
          </div>
        </div>
        <div v-show="active === '3'" class="atlas">
          <div v-for="(item, index) in currentList.description.gallery">
            <img :src="item" alt="" />
          </div>
        </div>
      </el-main>
    </div>
  </div>
</template>

<script>
import BigPicture from "../components/bigPicture.vue";
export default {
  name: "movieDetail",
  data() {
    return {
      active: "1",
      currentList: {},
    };
  },
  created() {
    // console.log(this.$route.params.id);
    this.currentList = this.$root.getCurrentIdList(this.$route.params.id);
    console.log(
      "detail",
      this.currentList,
      this.$route.params.id,
      this.$root.movieList
    );
  },
  methods: {
    buy() {
      this.$router.push(`/home/seatSelection/${this.$route.params.id}`);
    },
    handleSelect(key, keyPath) {
      this.active = key;
    },
  },
  components: { BigPicture },
};
</script>

<style scoped lang="scss">
.bot-main {
  > div > div > div {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .images {
    .content {
      justify-content: flex-start;
      height: auto;
    }
  }
  .cast {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .atlas {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
