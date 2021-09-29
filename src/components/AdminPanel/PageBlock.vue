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
import menu from '../../config/menu.json'
import ButtonComponent from '../PageComponents/ButtonComponent.vue'
import TableComponent from '../PageComponents/TableComponent.vue'

export default{
  name: 'PageBlock',
  components: {
    ButtonComponent, TableComponent
  },
  data() {
    return {
      id: this.$route.params['id'],
      page: this.$route.params['page'],
      menu: menu,
      section: {title: ''},
      content: {name: ''},
    }
  },
  created() {
    this.section = this.menu.filter((x) => x.id == this.id)[0];
    this.content = this.section.pages.filter((i) => i.id == this.page)[0];
  },
  watch: {
    $route(toRoute) {
      this.id = toRoute.params['id']
      this.page = toRoute.params['page']
      this.section = this.menu.filter((x) => x.id == this.id)[0];
      this.content = this.section.pages.filter((i) => i.id == this.page)[0];
    }
  }
}
</script>

<style lang="scss">

.main {
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