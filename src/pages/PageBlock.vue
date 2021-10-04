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
        >
      </component>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import ButtonComponent from '../components/PageComponents/ButtonComponent.vue'
import TableComponent from '../components/PageComponents/TableComponent.vue'

export default{
  name: 'PageBlock',
  components: {
    ButtonComponent, TableComponent
  },
  data() {
    return {
      id: this.$route.params['id'],
      page: this.$route.params['page'],
      section: { "title": "Заголовок" },
      content: { "name": "Заголовок" },
    }
  },
  props: {data: Array },
  created() {
    this.section = this.data.find((x) => x.id == this.id) || '';
    this.content = this.section.pages.find((i) => i.id == this.page) || '';
    },
  watch: {
    $route(toRoute) {
      this.id = toRoute.params['id']
      this.page = toRoute.params['page']
      this.section = this.data.find((x) => x.id == this.id) || '';
      this.content = this.section.pages.find((i) => i.id == this.page) || '';
    }
  }
}
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
    font: 500 28px $font;
    color: $titlecolor;
  }
}

</style>