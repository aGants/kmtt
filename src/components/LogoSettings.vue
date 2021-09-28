<template>
  <div class="logo">
    <div class="logo__img">
      <span>KMTT</span>
    </div>
    <span class="logo__title">KMTT admin</span>
    <div class="logo__icon">
      <span class="logo__icon-down">
        <ChevronDownIcon size="2x" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { ChevronDownIcon } from 'vue-feather-icons'
import  Vue /*, {PropType} */ from 'vue'

export default Vue.extend({
  name: 'LogoSettings',
  components: { ChevronDownIcon }
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
    }
  }
}
</style>