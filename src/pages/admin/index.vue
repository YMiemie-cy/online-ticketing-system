<template>
  <div id="index">
    <div id="box"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getUserList } from "../../api";
export default {
  name: "index",
  data() {
    return {
      option: {
        title: {
          text: "用户数据看板",

          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  created() {},
  mounted() {
    this.myChart();
  },
  methods: {
    async myChart() {
      var chartDom = document.getElementById("box");
      var myChart = echarts.init(chartDom);

      const res = await getUserList();
      this.option.series[0].data = res.data.map((item) => {
        return {
          value: item.tickInformation.length,
          name: item.username,
        };
      });
      this.option && myChart.setOption(this.option);
    },
  },
};
</script>

<style scoped lang="scss">
#index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #box {
    width: 500px;
    height: 500px;
  }
}
</style>
