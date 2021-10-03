<template>
  <div class="logo">
    <div class="logo__img">
      <span>KMTT</span>
    </div>
    <span class="logo__title">KMTT admin</span>
    <div class="logo__icon">
      <span class="logo__icon-down">
        <ChevronDownIcon size="2x" />
        <popup-window>
          <li class="popup__li">
            <span><SettingsIcon size="1x" /></span>
            <span>Основные настройки</span>
          </li>
          <li class="popup__li">
            <span><MenuIcon size="1x" /></span>
            <span>Настроить меню</span>
          </li>
          <li class="popup__li">
            <span><AlertTriangleIcon size="1x" /></span>
            <span>Сообщить о проблеме</span>
          </li>
        </popup-window>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { ChevronDownIcon, SettingsIcon, MenuIcon, AlertTriangleIcon} from 'vue-feather-icons'
import  Vue from 'vue'
import PopupWindow from '../PopupWindow.vue'

export default Vue.extend({
  name: 'LogoSettings',
  components: { ChevronDownIcon, SettingsIcon, MenuIcon, AlertTriangleIcon,
  PopupWindow }
})
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-right: 10px;
  border-bottom: 2px solid $bordercolor;
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
  }
  &__icon {
    color: $subcolor;
    line-height: 0px;
    flex-grow: 2;
    text-align: right;
    margin-right: 0px;
    &-down {
      position: relative;
      cursor: pointer;
    }
  }
}
</style>