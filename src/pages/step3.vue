<template>
  <div id="step3">
    <ProgressBar>
      <div class="step done">
        <span class="step-num">3</span>
        <div class="bar"></div>
        <span class="step-text">14分钟内付款</span>
      </div>
    </ProgressBar>

    <div class="count-down-wrapper">
      <div class="count-down" data-payleftseconds="839">
        <p class="time-left">
          请在
          <span class="minute">{{ min }}</span>
          分钟
          <span class="second">{{ second }}</span>
          秒内完成支付
        </p>
        <p class="tip">超时订单会自动取消，如遇支付问题，请致电客服：1010-5335</p>
      </div>
    </div>

    <div class="detail">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="影片"></el-table-column>
        <el-table-column prop="time" label="时间"></el-table-column>
        <el-table-column prop="address" label="影院"></el-table-column>
        <el-table-column prop="seat" label="座位"></el-table-column>
      </el-table>
    </div>

    <div class="foot">
      <div>
        实际支付:
        <span>￥{{ totalPrice }}</span>
      </div>
      <el-button round @click="buy">确定支付</el-button>
    </div>

    <div class="modal" v-show="flag">
      <div class="mark"></div>
      <div class="center">
        <span class="icon"></span>

        <p class="tip">支付超时，该订单已失效，请重新购买</p>

        <div class="ok-btn btn" @click="back">我知道了</div>
      </div>
    </div>

    <div class="payStatus" v-if="buyList[0].ifBuy">
      <div>
        <i>
          <svg
            t="1663644114146"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2576"
            width="200"
            height="200"
          >
            <path
              d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z"
              fill="#52C41A"
              p-id="2577"
            ></path>
          </svg>
        </i>
        <p>{{ buyList[0].text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '../components/progressBar.vue';
export default {
  name: 'step3',
  data() {
    return {
      currentList: {},
      tableData: [
        {
   
        },
      ],
      min: 13,
      second: 59,
      flag: false,
      buyList: [
        {
          ifBuy: false,
          imgUrl: '',
          text: '支付成功',
        },
      ],
    };
  },
  components: {
    ProgressBar,
  },
  created() {
    this.currentList = this.$root.getCurrentIdList(this.$route.params.id, this.$route.params.index);
    this.tableData = this.$root.buyTicket;
  },
  mounted() {
    let timer = setInterval(() => {
      if (this.second !== 0) {
        this.second--;
      } else {
        this.min--;
        this.second = 59;
      }
      if (this.min === 0 && this.second === 0) {
        clearInterval(timer);
        this.flag = true;
      }
    }, 1000);
  },
  computed: {
    totalPrice() {
      let sum = 0;
      this.$root.buyTicket.map(item => {
        sum += item.price;
      });
      return sum;
    },
  },
  methods: {
    back() {
      this.flag = false;
      this.$router.go(-1);
    },
    buy() {
      this.buyList[0].ifBuy = true;
      setTimeout(() => {
        this.buyList[0].ifBuy = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.count-down-wrapper {
  width: 100%;
  height: 110px;
  padding-top: 8px;
  margin-bottom: 40px;
  background-color: #fff3f3;
  .count-down {
    padding-left: 55px;
    min-height: 41px;
    margin-left: 30px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAApCAYAAAC/QpA/AAAAAXNSR0IArs4c6QAABPdJREFUWAnNWFtsVEUYnn+XFopGQQNiCJfaAhK2oBgLr8aY2CgiUYKQ8FBBH+SFRkMiikZq0ocKCQkkCrESbzESExMh4IMPGHkQ3rpbJFzkEomVVQvaUGq7+/P9cy47cy57tkV2mWTO/PNfv5n5Z86cQ5zNvqGUelcx3422NoVoEIHfI4C5BiD31AaFEZXon5Qi+tRg1Y4EDpLofPbsdHX9uizTYdT5wqtSOY04bWry5EFqbr4yQYIKgeYK9/b+hrZ6YIguU0vLr4JBSspp/OcfPlUdwopng0mlfq8OBjcKc78ZzwajVK8prAJtxbPBMB+vAoBSiHTaiqd3kydlZlK53NWIc+cqdKZ4euNow/ZE/6pMZgoRFT1/1sxAwAByyBPqluhzWrx4Ks6jjyx+pR3YufafBEwOmUBEZoHRykRfWkbMD+o+85toByxZcmcAgxM7HGaun5LNFyXSocJgMpnvMQvmlnsSr4ynMLoBlUptCzpI6L8jdpzLPQG9p31d8S9xAiUEBlM3Ap2ugF439/XVUyazB/y9AVlcdx+A7EYe1qli8YOAUpcbx2KHwGjppEkfYnYu+ZrMS1ShsF8neEvLa5D1+LJoYr8SPSm53Md4LtW0PMSv+I8okWBo3rxh6G6EoZ/p6K+F4260RRzhG1Q6vRryi5ZPCUS0BjPSjpGPYnm6kCvrfR3ZIESvuv59tkdYW9tjei1y5X04e8vru+0RAGmnRYv6MVMpAGwD/1nUg8iDwwBR1C/eoaEe2D5j2RJ1YSBbLZ7RKQ/GCbYXTjcYNkLmUXeohoYejFJoXfjMmWlqeLgdOfI6GNNdttPI0mYyrwhYi290yoIRPZ0n2exOkJsNO4ck+g9EN0b7Nt74nViCLTCoj9DbBSAdAMIhmcGIzBlDDv/EyIEO8Fah86cpcwO3ah7RshAQR38VwG5OAiI+EsF4wQHoW+yCJgCSJE4uRDtwaWrWdsnaWqNiMFp7aGgFRv9iRb6ZX8DtcUVFuq6SvuklGeDAuw/njJwtK5N0DflcAP8MubRa1dW9TAsX/mXIIsnEmQGQ2QByAtZjAWIGe06NjJzgkyfnmMwouiwYnDOzAOQoDB+KMh4Dr1H86IGVMYoFgy09AdP8NWznlrGvXMQ8B+fPAfitizOKBaP6+jphtDzOcFx85lYlp3pMiQTDp041uqdojNktsTuQ1JHLHgkGCbcd4WKn85agiF8i8R8qITD6Jcf8Ukjz/2TAP5J5RtBlCIy6cWMdlCo6f4LOxtBPY3dJHKuEwTCvtTRuV4coFMcCw/39d2E7l25ltwuI+GV+FEslPxv8Yi9HPv84JDbPUyX6Gw4uIPnOo8pn8CD68pPnF63CvA/tz6jyWSPfWDNRH4ZOKDfAl5JGXYb6g3Sk2IGJWmHsSJzXvxx6R1V9/TFasOCyI4h+4u18ABKpVuFz5+7FhUvu0PJ10Ab/j/gKhYIMPgZMsThbKzqX8U24EB3BPWTUNx4HQU1N12D2o1u3YmlaAewr9Bsxg9b7KjgzM/XMMAuo73C/HcQB9RO+l47BMAsnWdz6LwBg7NURdn6BrSzZLNgvhd/HdC0UZGYaXCVZSr/oaydeiA+AI8n0DQyW+NJoooAAeYjkd0Ye+qPol66TzPejL3kyA7KJ0S58bhbU896fKwL63WBs8sW1I/bcYX87ldqOaZUtWrvixO+8CTchtZNySYUQAAAAAElFTkSuQmCC)
      no-repeat;
    background-position: 0 17px;
  }
  .time-left {
    font-size: 16px;
    color: #666;
    margin-bottom: 4px;
    .minute,
    .second {
      font-size: 32px;
      color: #f03d37;
      margin: 0 5px;
    }
  }
  .tip {
    font-size: 14px;
    color: #f03d37;
  }
}
.el-table {
  border: solid 1px #e5e5e5;
}
.foot {
  float: right;
  margin-top: 50px;
}

.modal {
  width: 468px;
  height: 155px;
  padding: 30px 0;
  position: fixed;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 9999;
  text-align: center;
  .mark {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    z-index: -9999;
    cursor: pointer;
    transition: all 0.15s;
  }
  .center {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #fff;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      display: inline-block;
      width: 50px;
      height: 50px;
      background: url(data:image/png;base64,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)
        no-repeat;
    }
    .tip {
      font-size: 14px;
      color: #666;
      margin-bottom: 26px;
      margin-top: 12px;
    }
    .ok-btn {
      color: #fff;
      background-color: #f03d37;
      -webkit-box-shadow: 0 2px 10px -2px #f03d37;
      box-shadow: 0 2px 10px -2px #f03d37;
    }
    .btn {
      border-radius: 100px;
      height: 42px;
      line-height: 42px;
      font-size: 16px;
      width: 260px;
      padding: 0;
      cursor: default;
    }
  }
}

.payStatus {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      width: 100px;
      height: 100px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
