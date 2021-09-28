<template>
  <nav class="nav">
    <ul
      v-for="block in menu"
      :key="block.title"
      class="nav-ul"
    >
      <p class="nav-ul__title"> 
        {{ block.title }} 
      </p>

      <li 
        v-for="page in block.pages"
        :key="page.id"
        class="nav-ul-li"
      >
        <p class="nav-ul-li__link">
          {{ page.name }}
        </p>
      </li>

    </ul>
  </nav>
</template>

<script lang="ts">
import  Vue, {PropType} from 'vue'
import  Section from '../interfaces/Menu'

export default Vue.extend({
  props: {
    menu: {
      required: true,
      type: Array as PropType<Section[]>
    }
  }
})

</script>

<style lang="scss">
$paddingleft: 30px;

.nav {
  padding-top: 30px;
  &-ul {
    font: 600 17px $font;
    margin-bottom: 35px;
    &__title {
      padding-left: $paddingleft;
      color: $subcolor;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    &-li {
      font: 400 20px $font;
      line-height: 30px;
      list-style-type: none;
      margin-top: 15px;
      &__link {
        width: 360px;
        padding-left: $paddingleft;
      }
    }
  }
}
</style>