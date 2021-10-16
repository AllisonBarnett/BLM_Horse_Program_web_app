/**
 *  ViewTemplate.vue
**/
/* template import */
<template src="./line-chart.html"></template>
/* style import */
<style lang="scss" src="./line-chart.scss"></style>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

export default {
  components: {
    "v-chart": ECharts,
  },
  data() {
    return {

    }
  }
}