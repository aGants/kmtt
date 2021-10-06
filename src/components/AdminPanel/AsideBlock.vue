<template>
  <div class="aside">
    <div>
      <logo-settings 
        :setting="setting"
      />
      <nav-block
        :menu="menu"
      />
    </div>
      <a class="aside-library" href="#">
        <icon-component 
          :IconName="'LayersIcon'"
          :IconSize="'1.5x'" 
        /> 
        <span class="aside-library__text">Библиотека компонентов</span>
      </a>
    </div>
</template>

<script lang="ts">
import Vue, { PropType }  from 'vue';
import IconComponent from '../IconComponent.vue'
import LogoSettings from './LogoSettings.vue'
import NavBlock from './NavBlock.vue'
import { SectionModel } from '../../interfaces/Menu'
import SettingModel from '../../interfaces/Setting'

export default Vue.extend({
  name: 'AsideBlock',
    components: {
      IconComponent, LogoSettings, NavBlock
    },
    props: {
      /**
      *  Данные из конфига
      * @type {Array<SectionModel[]>}
      */
      menu: {
        required: true,
        type: Array as PropType<SectionModel[]>
      },
      /**
      *  Данные настроек 
      * @type {Array<SettingModel[]>}
      */
      setting: {
        required: true,
        type: Array as PropType<SettingModel[]>
      }
    }
})
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