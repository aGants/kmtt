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
          <ChevronDownIcon size="1.8x"/>
        </popup-window>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'
import { ChevronDownIcon, SettingsIcon, MenuIcon, AlertTriangleIcon} from 'vue-feather-icons'
import PopupWindow from '../PopupWindow.vue'
import Setting from '../../interfaces/Setting'

export default Vue.extend({
  name: 'LogoSettings',
  components: { ChevronDownIcon, SettingsIcon, MenuIcon, AlertTriangleIcon,
  PopupWindow },
  props: {
    setting: {
      type: Array as PropType<Setting[]>
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
      margin-left: 28px;
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