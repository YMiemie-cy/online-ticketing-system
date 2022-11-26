<template>
  <div id="userInfo">
    <el-row class="list">
      <el-col
        :span="24"
        v-for="(item, index) in userList"
        :key="index"
        class="list_item"
      >
        <el-card
          shadow="hover"
          class="card"
          v-for="(item2, index) in item.tickInformation"
        >
          <img :src="item2.image" class="image" />

          <div class="left">
            <p>{{ item.username }}</p>
            <p>{{ item2.name }}</p>
            <p>{{ item2.date }}</p>
            <p>{{ item2.price }}￥</p>
            <p>{{ item2.seatNumber }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getUserList } from "../../api";

export default {
  name: "userInfo",
  data() {
    return {
      userList: [],
    };
  },
  async created() {
    this.userList = (await getUserList()).data;
    console.log(this.userList);
  },
};
</script>

<style scoped lang="scss">
#userInfo {
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
