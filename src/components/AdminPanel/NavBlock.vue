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

      <router-link
        v-for="page in block.pages"
        :key="page.id"
        class="nav-ul-li"
        active-class="active"
        tag="li"
        :to="{ name: 'Page', params: { id: block.id, page: page.id } }"
      >
        {{ page.name }}
      </router-link>

    </ul>
  </nav>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { SectionModel } from '../../interfaces/Menu'

export default Vue.extend({
  /**
  *  Данные из конфига
  * @type {Array<SectionModel[]>}
  */
  props: {
    menu: Array as PropType<SectionModel[]>
  }
})

</script>
    RouterLink

<style lang="scss">
.nav {
  padding-top: 30px;
  &-ul {
    font-weight: 600;
    margin-bottom: 29px;
    &__title {
      margin-bottom: 5px;
      padding-left: $navleft;
      color: $subcolor;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    &-li {
      min-width: 360px;
      margin-top: 0px;
      padding: 7px 0px;
      padding-left: $navleft;
      font: 400 20px $font;
      line-height: 30px;
      list-style-type: none;
      cursor: pointer;
      @media (max-width: $screen) {
        min-width: auto;
        font-size: 16px;
      }
      &:hover {
        color: #fff;
      }
    }
  }
}
.active {
  background: $bghover;
}
</style>