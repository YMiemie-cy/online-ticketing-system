<template>
  <div id="movieList">
    电影列表
    <el-row>
      <el-col :span="6" v-for="(item, index) in currentList" :key="index">
        <el-card shadow="hover" @click.native="$root.$emit('showDetail', item.id)" v-if="item.id">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />

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
      :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import { getMovies } from '../api';

const getClassify = that => {
  that.movieList = that.$root.movieList.map(item => {
    if (
      that.classify.type === '全部' &&
      that.classify.region === '全部' &&
      that.classify.period === '全部'
    ) {
      return item;
    } else {
      if (
        item.classify.type === that.classify.type &&
        item.classify.region === that.classify.region &&
        item.classify.period === that.classify.period
      ) {
        return item;
      } else {
        return {};
      }
    }
  });
  that.currentList = that.movieList;
  console.log(that.movieList);
};

export default {
  name: 'movieList',
  data() {
    return {
      movieList: [],
      currentList: [],
    };
  },
  props: {
    classify: {
      type: Object,
    },
  },
  async created() {
    // console.log('created', this.classify);
    const res = await getMovies();
    // console.log('APP2', res.data);
    this.$root.movieList = res.data;
    getClassify(this);
    this.currentList = this.movieList.filter((item, index) => {
      if (index >= 0 && index <= 9) {
        return item;
      }
    });
  },
  watch: {
    classify: {
      handler(newValue, oldValue) {
        getClassify(this);
        // console.log('watch', this.classify);
        console.log('watch', this.currentList);
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
      console.log(`当前页: ${val}`);
      const resList = this.movieList.filter((item, index) => {
        if (index >= val - 1 && index <= val + 9) {
          return item;
        }
      });
      this.currentList = resList;
    },
  },
};
</script>

<style scoped lang="scss">
#movieList {
  height: 100%;
  width: 70%;
  /deep/ .el-card {
    position: relative;

    height: 260px;
    width: 160px;
  }
  /deep/ .el-card__body {
    padding: 0;
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
  /* border: solid 1px #efefef; */
}
</style>
