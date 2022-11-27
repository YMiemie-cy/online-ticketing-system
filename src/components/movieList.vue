<template>
  <div id="movieList">
    电影列表
    <el-row>
      <el-col :span="6" v-for="(item, index) in currentList" :key="index">
        <el-card
          shadow="hover"
          @click.native="$root.$emit('showDetail', item.id)"
          v-if="item.id"
        >
          <img :src="item.description.gallery[0]" class="image" />

          <div class="bottom">
            <span>{{ item.name }}</span>
            <span>{{ item.rating }}</span>
          </div>
          <el-button class="buy">购票</el-button>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="(len / 8) * 10"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import { getMovies } from "../api";

const getClassify = (that) => {
  that.movieList = that.$root.movieList.map((item) => {
    if (
      that.classify.type === "全部" &&
      that.classify.region === "全部" &&
      that.classify.period === "全部"
    ) {
      return item;
    } else {
      if (
        (item.classify.type === that.classify.type &&
          item.classify.region === that.classify.region &&
          item.classify.period === that.classify.period) ||
        (that.classify.type === "全部" &&
          that.classify.region === "全部" &&
          item.classify.period === that.classify.period) ||
        (that.classify.type === "全部" &&
          item.classify.region === that.classify.region &&
          that.classify.period === "全部") ||
        (item.classify.type === that.classify.type &&
          that.classify.region === "全部" &&
          that.classify.period === "全部") ||
        (that.classify.type === "全部" &&
          item.classify.region === that.classify.region &&
          item.classify.period === that.classify.period) ||
        (item.classify.type === that.classify.type &&
          that.classify.region === "全部" &&
          item.classify.period === that.classify.period) ||
        (item.classify.type === that.classify.type &&
          item.classify.region === that.classify.region &&
          that.classify.period === "全部")
      ) {
        return item;
      } else {
        return {};
      }
    }
  });

  getCurrentList(that, 1);

  console.log("movieList22", that.currentList);
};
const getLength = (that) => {
  that.len = 0;
  that.movieList.map((item) => {
    if (item.id) {
      that.len++;
    }
  });
};
const getCurrentList = (that, val) => {
  let i = -1;
  const resList = that.movieList.filter((item) => {
    if (item.id) {
      i++;
      if (i >= (val - 1) * 8 && i <= (val - 1) * 8 + 7) {
        return item;
      }
    }
  });
  that.currentList = resList;
};

export default {
  name: "movieList",
  data() {
    return {
      movieList: [],
      currentList: [],
      len: 0,
    };
  },
  props: {
    classify: {
      type: Object,
    },
  },
  async created() {
    const res = await getMovies();

    this.$root.movieList = res.data;
    getClassify(this);
    getLength(this);
    this.currentList = this.movieList.filter((item, index) => {
      if (index >= 0 && index <= 7) {
        return item;
      }
    });
  },
  watch: {
    classify: {
      handler(newValue, oldValue) {
        getClassify(this);
        getLength(this);
      },
      deep: true, //深度检测  针对符合类型
      immediate: true, //首次运行
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val = 1) {
      console.log(`当前页: ${val} `);
      getCurrentList(this, val);
      getLength(this);
    },
  },
};
</script>

<style scoped lang="scss">
#movieList {
  height: 100%;
  width: 70%;
  .el-row {
    padding: 20px 0;
    /deep/ .el-card {
      position: relative;

      height: 260px;
      width: 160px;
      margin-bottom: 12px;
    }
    /deep/ .el-card__body {
      padding: 0;
    }
  }
}

.image {
  width: 100%;
  height: 220px;
  display: block;
}
.bottom {
  position: absolute;
  box-sizing: border-box;
  bottom: 44px;
  height: 30px;
  width: 100%;
  font-size: 16px;
  color: #fff;
  padding: 5px;

  span:nth-of-type(1) {
    float: left;
  }

  span:nth-of-type(2) {
    float: right;
  }
}

.buy {
  width: 100%;
  height: 44px;
  font-size: 16px;
  border: none;
}
</style>
