<template>
  <div class="aside">
    <di>
      <logo-settings 
        :setting="setting"
      />
      <nav-block
        :menu="menu"
      />
    </di>
      <a class="aside-library" href="#">
        <LayersIcon size="1.5x" /> 
        <span class="aside-library__text">Библиотека компонентов</span>
      </a>
    </div>
</template>

<script lang="ts">
import { LayersIcon } from 'vue-feather-icons'

import LogoSettings from './LogoSettings.vue'
import NavBlock from './NavBlock.vue'

export default {
  name: 'AsideBlock',
    components: {
      LogoSettings, NavBlock, LayersIcon
    },
    props: {
      menu: Array,
      setting: Array
    }
}
</script>

<style lang="scss">
  .aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 16px 0px;
    border-right: 2px solid $bordercolor;
    &-library { 
      display: block;
      padding-left: $navleft;
      font-size: 19px;
      color: $textcolor;
      text-decoration: none;
      &:hover {
        color: $titlecolor;
      }
      &__text {
        margin-left: 6px;
        vertical-align: middle;
      }
    }
  }
</style>