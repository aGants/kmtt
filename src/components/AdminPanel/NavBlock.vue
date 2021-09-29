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
        :page="page"
      >
          {{ page.name }}
      </li>

    </ul>
  </nav>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'
import Section from '../../interfaces/Menu'

export default Vue.extend({
  props: {
    menu: {
      required: true,
      type: Array as PropType<Section[]>
    }
  },
  components: { }
})

</script>
    RouterLink

<style lang="scss">
$paddingleft: 25px;

.nav {
  padding-top: 30px;
  &-ul {
    font: 600 17px $font;
    margin-bottom: 25px;
    &__title {
      margin-bottom: 10px;
      padding-left: $paddingleft;
      color: $subcolor;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    &-li {
      width: 360px;
      margin-top: 0px;
      padding: 7px 0px;
      padding-left: $paddingleft;
      font: 400 20px $font;
      line-height: 30px;
      list-style-type: none;
      cursor: pointer;
      &:hover, &.active {
        background: $bghover;
      }
    }
  }
}
</style>