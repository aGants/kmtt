<template>
  <main class="main">
    <p class="main__title">{{ section.title }}</p>
    <p class="main__subtitle">{{ content.name }}</p>
    <section class="main-content">
      <component
        v-for="component in content.components" 
        :key="component.id"
        :is="component.type"
        :component="component"
        class="component"
        >
      </component>
    </section>
  </main>
</template>

<script lang="ts">
import Vue, { PropType }  from 'vue';
import ButtonComponent from '../components/PageComponents/ButtonComponent.vue'
import TableComponent from '../components/PageComponents/TableComponent.vue'
import { SectionModel, PageModel } from '../interfaces/Menu'

export default Vue.extend({
  name: 'PageBlock',
  components: {
    ButtonComponent, TableComponent
  },
  data() {
    return {
      /**
      *  Принимаем id из роута
      * @type string
      */
      id: this.$route.params['id'] as string,
      /**
      *  Принимает page из роута
      * @type string
      */
      page: this.$route.params['page'] as string,
      /**
      *  Данные категории страницы
      * @type {PageModel | underfined}
      */
      section: {'title': ''} as SectionModel | undefined,
      /**
      * Данные страницы
      * @type {PageModel | underfined}
      */
      content: {'name': ''} as PageModel | undefined,
    }
  },
  /**
  *  Данные из конфига
  * @type {Array<SectionModel>}
  */
  props: {
    data: Array as PropType<SectionModel[]> 
  },
  mounted() {
    /**
    *  Соотносим id и page из роута c категорией и страницей
    */
    this.section = (this.data !== undefined) ? (this.data.find((x) => x.id == this.id)) : undefined;
    this.content = (this.section !== undefined) ? (this.section.pages.find((i) => i.id == this.page)) : undefined;
    /**
    *  При переходе на несуществующую страницу, переадресуем на страницу 404
    */
    if (this.content === undefined) {
      this.$router.push('/404')
    }
  },
  watch: {
    /**
    * При переходе на страницу принимаем id и page из роута, и соотносим их с id категории и страницы
    */
    $route(toRoute) {
      this.id = toRoute.params['id']
      this.page = toRoute.params['page']
      this.section = (this.data !== undefined) ? (this.data.find((x) => x.id == this.id)) : undefined;
      this.content = (this.section !== undefined) ? (this.section.pages.find((i) => i.id == this.page)) :undefined;
    }
  }
})
</script>

<style lang="scss">

.main {
  width: 100%;
  padding: 42px 60px;
  &__title {
    font: 400 20px $font;
    margin-bottom: 15px;
  }

  &__subtitle {
    font: 500 29px $font;
    color: $titlecolor;
    margin-bottom: 40px;
  }
}
.component {
  margin-bottom: 20px;
}
</style>