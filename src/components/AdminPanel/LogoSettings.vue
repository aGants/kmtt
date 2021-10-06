<template>
  <div class="logo">
    <div class="logo-info">
      <div class="logo-info__img">
        <span>KMTT</span>
      </div>
      <router-link 
        tag="a" 
        class="logo-info__title" 
        to="/"
      >
        KMTT admin
      </router-link>
    </div>
    <div class="logo__icon">
      <span class="logo__icon-down">
        <popup-window 
          :action="setting"
        >
          <icon-component :IconName="'ChevronDownIcon'" :IconSize="'1.8x'"/>
        </popup-window>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'
import PopupWindow from '../PopupWindow.vue'
import SettingModel from '../../interfaces/Setting'
import IconComponent from '../IconComponent.vue'

export default Vue.extend({
  name: 'LogoSettings',
  components: { PopupWindow, IconComponent },
  props: {
    setting: {
      type: Array as PropType<SettingModel[]>
    }
  }
})
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  padding-right: 10px;
  border-bottom: 2px solid $bordercolor;
  &-info {
    display: flex;
    align-items: center;
    &__img {
      margin-left: $navleft;
      font: bold 8px $font;
      color: $maincolor;
      padding: 12px 4px;
      background: #000;
      border-radius: 6px;
      letter-spacing: 1px;
    }
    &__title {
      margin: 0 15px;
      font: bold 19px $font;
      color: $maincolor;
      text-decoration: none;
      &:hover {
        color: $textcolor;
      }
    }
  }
  &__icon {
    color: $subcolor;
    text-align: right;
    margin-top: 6px;
    &-down {
      position: relative;
      cursor: pointer;
    }
  }
}
</style>