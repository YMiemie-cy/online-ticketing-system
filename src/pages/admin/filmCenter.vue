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
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />

          <div class="right">
            <span>{{ item.name }}</span>
            <span>{{ item.date }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getMovies } from "../../api";

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
};
</script>

<style scoped lang="scss">
#filmCenter {
  .list {
    .list_item {
      ::v-deep .el-card__body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
        }
        .right {
        }
      }
    }
  }
}
</style>
