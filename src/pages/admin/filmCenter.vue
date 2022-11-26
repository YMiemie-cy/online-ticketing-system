<template>
  <div id="filmCenter">
    <el-row class="list">
      <el-col
        :span="24"
        v-for="(item, index) in currentList"
        :key="index"
        class="list_item"
      >
        <el-card shadow="hover" v-if="item.id" class="card">
          <img :src="item.description.gallery[0]" class="image" />

          <div class="left">
            <p>{{ item.name }}</p>
            <p>
              {{
                `${item.classify.type} ${item.classify.region} ${item.classify.period}`
              }}
            </p>
            <p>{{ item.date }}</p>
          </div>

          <div class="right">
            <el-button type="primary" round @click="del(item.id)"
              >删除</el-button
            >
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getMovies, delMovies } from "../../api";

export default {
  name: "filmCenter",
  data() {
    return {
      currentList: [],
    };
  },
  async created() {
    const res = await getMovies();
    this.$root.movieList = res.data;
    this.currentList = this.$root.movieList;
  },
  methods: {
    async del(id) {
      console.log(id);
      const res = await delMovies(id);
      console.log("del", res);
    },
  },
};
</script>

<style scoped lang="scss">
#filmCenter {
  .list {
    .list_item {
      ::v-deep .el-card__body {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          width: 116px;
          height: 161px;
          margin-right: 10%;
        }
        .left {
          margin-right: 60%;
        }
        .right {
        }
      }
    }
  }
}
</style>
