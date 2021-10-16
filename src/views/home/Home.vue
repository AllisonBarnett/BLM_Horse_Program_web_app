/**
 *  ViewTemplate.vue
**/
/* template import */
<template src="./home.html"></template>
/* style import */
<style lang="scss" src="./home.scss"></style>
<script>
import AppHeader from '@/components/app-header/AppHeader.vue';
import PieChart from '@/components/pie-chart/PieChart.vue';
import BarChart from '@/components/bar-chart/BarChart.vue';
export default {
  name: 'Home',
  components: {
    AppHeader,
    PieChart,
    BarChart
  }
}
</script>