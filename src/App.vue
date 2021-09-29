<template>
  <div id="app" class="app">
    <aside-block />
    <router-view />
  </div>
</template>

<script>
import AsideBlock from './components/AdminPanel/AsideBlock.vue'
const feather = require('feather-icons')

  export default {
    name: 'App',
    components: {
      AsideBlock
    },
    data() {
      return {
      }
    },
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font: 16px $font;
    color: $textcolor;
    background: $bgcolor;
  }

  .app {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .icon {
    color: red;
  }

  .aside {
    margin: 20px 0px;
    border-right: 2px solid $bordercolor;
  }
</style>