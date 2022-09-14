<template>
  <div id="orderDetails">
    <ul>
      <li v-for="(item, i) in 10">
        <el-card shadow="hover" class="card">
          <div class="top">电影院名</div>
          <div class="main">
            <div class="left">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
            </div>

            <div class="right">
              <div>
                <p>{{ name }}</p>
                <p>{{ date }}</p>
                <p>{{ seatNumber }}</p>
              </div>
              <div>{{ score }}</div>
            </div>
          </div>
          <div class="foot">总价：</div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'orderDetails',
  data() {
    return {
      name: '叶问4：完结篇',
      date: '2019年12月31日 21:10',
      seatNumber: '3号厅 7排2座',
    };
  },
};
</script>

<style scoped lang="scss">
li {
  height: 150px;
  width: 100%;
  margin-bottom: 10px;

  .card {
    width: 100%;
    height: 100%;

    /deep/ .el-card__body {
      width: 100%;
      height: 100%;
      padding: 0;

      .top {
        height: 15%;
      }
      .foot {
        height: 15%;
      }
      .main {
        box-sizing: border-box;
        height: 70%;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 5px 0 5px 0;
        border-top: solid 1px #e7e7e7;
        border-bottom: solid 1px #e7e7e7;
        .left {
          height: 100%;

          img {
            height: 100%;
          }
        }
        .right {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
}
</style>
