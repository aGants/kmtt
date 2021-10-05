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
      id: this.$route.params['id'] as string,
      page: this.$route.params['page'] as string,
      section: {'title': ''} as SectionModel | undefined,
      content: {'name': ''} as PageModel | undefined,
    }
  },
  props: {
    data: Array as PropType<SectionModel[]> 
  },
  mounted() {
    this.section = (this.data !== undefined) ? (this.data.find((x) => x.id == this.id)) : undefined;
    this.content = (this.section !== undefined) ? (this.section.pages.find((i) => i.id == this.page)) : undefined;
    if (this.content === undefined) {
      this.$router.push('/404')
    }
  },
  watch: {
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