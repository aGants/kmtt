<template>
  <div id="app" class="app">
    <button class="app-burger"
      @click="asideStatus()"
      v-if="!desc"
    >
      <icon-component 
        :IconName="iconName" 
        :IconSize="'1.5x'"
      />
    </button>
    <transition name="slide">
      <aside-block :menu="Config" :setting="Setting"  v-if="isAsideOpen"/>
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
      isAsideOpen: true as Boolean,
      /**
      * Имя иконки, открывающей меню
      * @type {string} 
      */
      iconName: 'MenuIcon' as String,
      /**
      * Тип устройства - компьютер
      * @type {boolean}
      */
      desc: true as Boolean
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
      if (!this.desc) {
        this.isAsideOpen = !this.isAsideOpen;
        this.iconName = (this.isAsideOpen) ? 'XIcon' : 'MenuIcon';
      }
    }
  },
  created() {
    this.getConfig()
    this.getSetting()
    
    /**
    * Проверка зашёл ли пользователь с телефона
    */
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.desc = false
      this.isAsideOpen = false
    }
  },
    watch: {
      /**
      * Закрыть боковое меню при переходе на другую страницу
      */
      $route() {
        if (!this.desc) {
          this.isAsideOpen = false;
          this.iconName = (this.isAsideOpen) ? 'XIcon' : 'MenuIcon';
        }
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
    all: unset;
    display: block;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 99;
  }
}

.slide-enter-active {
  transition: all .4s ease-out;
}
.slide-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

</style>