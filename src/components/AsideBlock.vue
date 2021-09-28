<template>
  <div class="aside">
      <logo-settings
      />
      <menu-block
        :menu="menu" 
      />
    </div>
</template>

<script lang="ts">
import LogoSettings from './LogoSettings.vue'
import MenuBlock from './MenuBlock.vue'
import menu from '../config/menu.json'

export default {
  name: 'AsideBlock',
    components: {
      LogoSettings, MenuBlock,
    },
    data() {
      return {
        menu: menu
      }
    },
}
</script>

<style lang="scss">
  .aside {
    margin: 20px 0px;
    border-right: 2px solid $bordercolor;
  }
</style>