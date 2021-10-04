<template>
  <div class="aside">
      <logo-settings 
        :setting="setting"
      />
      <nav-block
        :menu="menu"
      />
    </div>
</template>

<script lang="ts">
import LogoSettings from './LogoSettings.vue'
import NavBlock from './NavBlock.vue'

export default {
  name: 'AsideBlock',
    components: {
      LogoSettings, NavBlock,
    },
    props: {
      menu: Array,
      setting: Array
    }
}
</script>

<style lang="scss">
  .aside {
    margin: 16px 0px;
    border-right: 2px solid $bordercolor;
  }
</style>