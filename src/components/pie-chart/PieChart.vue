/**
 *  ViewTemplate.vue
**/
/* template import */
<template src="./pie-chart.html"></template>
/* style import */
<style lang="scss" src="./pie-chart.scss"></style>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/pie";
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'




export default {
  components: {
    "v-chart": ECharts,
  },
  data() {
    return {
      pie: {
        title: {
          text: "Horses",
          x: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["Nevada", "California", "Arizona", "Colorado", "New Mexico"],
        },
        series: [
          {
            name: "Wild Horse Population",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 200, name: "Nevada" },
              { value: 310, name: "California" },
              { value: 234, name: "Arizona" },
              { value: 135, name: "Colorado" },
              { value: 1548, name: "New Mexico" },
            ],
            itemStyle: {
              emphasis: {
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
};
</script>
