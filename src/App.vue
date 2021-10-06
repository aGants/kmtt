<template>
  <div id="app" class="app">
    <button class="app-burger" @click="asideStatus()" >
      <icon-component 
        :IconName="iconName" 
        :IconSize="'1.5x'"
      />
    </button>
    <transition name="slide">
      <aside-block 
        :menu="Config" 
        :setting="Setting" 
        :class="[isAsideOpen ? 'visible' : 'hidden']"
      />
    </transition>
    <router-view :data="Config" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AsideBlock from './components/AdminPanel/AsideBlock.vue'
import IconComponent from './components/IconComponent.vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      /**
      * Статус бокового меню
      * @type {boolean}
      */
      isAsideOpen: false as Boolean,
      /**
      * Имя иконки, открывающей меню
      * @type {string} 
      */
      iconName: 'MenuIcon' as String,
    }
  },
  components: {
    AsideBlock, IconComponent
  },
  computed: {
    ...mapGetters([
      'Config',
      'Setting'
      ])
  },
  methods: {
    ...mapActions([
      'getConfig',
      'getSetting',
    ]),
    /**
    * Изменение статуса меню и иконки
    */
    asideStatus() {
        this.isAsideOpen = !this.isAsideOpen;
        this.iconName = (this.isAsideOpen) ? 'XIcon' : 'MenuIcon';
    }
  },
  created() {
    this.getConfig()
    this.getSetting()
  },
    watch: {
      /**
      * Закрыть боковое меню при переходе на другую страницу
      */
      $route() {
        this.isAsideOpen = false;
        this.iconName = (this.isAsideOpen) ? 'XIcon' : 'MenuIcon';
      }
    }
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  font: 18px $font;
  color: $textcolor;
  background: $bgcolor;
  @media (max-width: $screen) {
    font-size: 14px;
  }
}

body {
  height: 100%;
}

.app {
  box-sizing: border-box;
  display: flex;
  height: 100%;
  &-burger {
    display: none;
    @media (max-width: $screen) {
      all: unset;
      display: block;
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 99;
    }
  }
}

.hidden {
  @media (max-width: $screen) {
    transform: translateX(-100%);
    transition: transform .4s ease-out;
  }
}

.visible {
  @media (max-width: $screen) {
    transform: translateX(0);
    transition: transform .4s ease-out;
  }
}

</style>