<template>
  <div id="orderDetails">
    <ul>
      <li v-for="(item, i) in tickInformation">
        <el-card shadow="hover" class="card">
          <div class="top">{{ item.brand }}</div>
          <div class="main">
            <div class="left">
              <img :src="item.image" class="image" />
            </div>

            <div class="right">
              <div>
                <p>{{ item.name }}</p>
                <p>{{ item.date }}</p>
                <p>{{ item.seatNumber }}</p>
              </div>
            </div>
          </div>
          <div class="foot">总价：{{ item.price }}</div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import { getUserInfo } from "../api";
export default {
  name: "orderDetails",
  data() {
    return {
      tickInformation: [],
    };
  },
  async created() {
    const username = JSON.parse(localStorage.getItem("token")).username;
    const res = await getUserInfo(username);
    this.tickInformation = res.data.tickInformation;
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

    ::v-deep .el-card__body {
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
