/**
 *  MapComponent.vue
**/
/* template import */
<template src="./map-component.html"></template>
/* style import */
<style scoped lang="scss" src="./map-component.scss"></style>
<script>

// import DeckMap from '@/components/map-component/map-utils/DeckMap'
import layerService from '@/components/map-component/map-utils/layerManager'

export default {
  name: 'MapComponent',
  mounted () {
    this.setupDeck()
  },
  methods: {
    setupDeck () {
      layerService.init({
        container: '#map'
      })
    }
  }
}

</script>