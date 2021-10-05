<template>
  <div id="app" class="app">
    <aside-block :menu="Config" :setting="Setting" />
    <router-view :data="Config" />
  </div>
</template>

<script>
import AsideBlock from './components/AdminPanel/AsideBlock.vue'
const feather = require('feather-icons')
import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'App',
    components: {
      AsideBlock
    },
    computed: {
      ...mapGetters([
        'Config',
        'Setting'
        ])
    },
    methods: {
      ...mapActions([
        'getConfig',
        'getSetting'
      ])
    },
    created() {
      this.getConfig()
      this.getSetting
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    font: 18px $font;
    color: $textcolor;
    background: $bgcolor;
  }

  body {
    height: 100%;
  }

  .app {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .feather {
   vertical-align: middle;
   margin-right: 2px;
  }

</style>