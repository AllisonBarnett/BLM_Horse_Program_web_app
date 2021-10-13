/**
 *  ViewTemplate.vue
**/
/* template import */
<template src="./home.html"></template>
/* style import */
<style lang="scss" src="./home.scss"></style>
<script>
import AppHeader from '@/components/app-header/AppHeader.vue';
export default {
  name: 'Home',
  components: {
    AppHeader
  }
}
</script>