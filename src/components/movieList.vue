<template>
  <div id="movieList">
    电影列表
    <el-row>
      <el-col :span="6" v-for="(o, index) in movieList" :key="o">
        <el-card shadow="hover">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />

          <div class="bottom">
            <span>{{ name }}</span>
            <span>{{ score }}</span>
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
export default {
  name: 'movieList',
  data() {
    return {
      name: '默认',
      score: '9.1',
      movieList: [{ name: '13' }, { name: '13' }, { name: '13' }],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped>
#movieList {
  height: 100%;
  width: 70%;
}
#movieList >>> .el-card {
  position: relative;

  height: 260px;
  width: 160px;
}
#movieList >>> .el-card__body {
  padding: 0;
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
}
.bottom span:nth-of-type(1) {
  float: left;
}
.bottom span:nth-of-type(2) {
  float: right;
}
.buy {
  width: 100%;
  height: 44px;
  font-size: 16px;
  /* border: solid 1px #efefef; */
}
</style>
