<template>
  <div id="progressBar">
    <div class="order-progress-bar">
      <div class="step first done">
        <span class="step-num">1</span>
        <div class="bar"></div>
        <span class="step-text">选择影片场次</span>
      </div>
      <div class="step done">
        <span class="step-num">2</span>
        <div class="bar"></div>
        <span class="step-text">选择座位</span>
      </div>
      <!-- <div class="step">
        <span class="step-num">3</span>
        <div class="bar"></div>
        <span class="step-text">14分钟内付款</span>
      </div> -->
      <slot></slot>
      <div class="step last">
        <span class="step-num">4</span>
        <div class="bar"></div>
        <span class="step-text">影院取票观影</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'progressBar',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.order-progress-bar {
  height: 60px;
  width: 100%;
  margin: 40px 0;
  text-align: center;
  .step {
    float: left;
    width: 25%;
  }
  .step-text {
    font-size: 14px;
    color: #999;
    display: inline-block;
    margin-top: 10px;
  }
  .done {
    .step-num {
      background-color: #f03d37;
    }
    .step-text {
      color: #f03d37;
    }
    .bar {
      border-color: #f03d37;
    }
  }
  .step-num {
    color: #fff;
    font-size: 12px;
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 10px;
    text-align: center;
    background-color: #ffd8d7;
    position: relative;
    top: 10px;
  }
  .first {
    .bar {
      border-left-color: transparent !important;
    }
  }
  .last {
    .bar {
      border-right-color: transparent !important;
    }
  }
  .bar {
    width: 0;
    height: 4px;
    border-left: 150px solid #ffd8d7;
    border-right: 150px solid #ffd8d7;
  }
}
</style>
