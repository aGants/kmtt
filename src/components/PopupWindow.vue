<template>
  <div class="popup-container">
    <button 
      class="popup-container__button"
      @click="isOpen = !isOpen"
    >
      <slot />
    </button>

    <div
      v-if="isOpen"
      class="popup"
    >
      <div class="popup-inner">
        <ul class="popup-ul">
          <li 
            v-for="(item, index) in action" 
            :key="index"
            class="popup-li" 
            @click="Action(item.action)"
          >
            <p
              v-if="item.objectName == true"
              class="popup-li__text"
            >
              {{ item.title }} {{ target.name }}
            </p> 
            <p v-else>
              <icon-component 
                v-if="item.icon"
                :iconName="item.icon"
                :icon-size="'1.4x'"
                class="popup-li__icon"
              />
              <span class="popup-li__text"> {{ item.title }} </span> 
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import IconComponent from './IconComponent.vue'
import { PopUpModel } from '../interfaces/Menu'

export default Vue.extend({
  name: 'PopupWindow',
  components: { IconComponent },
  props: { 
    /**
     * Список элементов popup
     * @type {Array<any>}
     */
    action: Array as PropType<PopUpModel[]>, 
    /**
     * Данные вызывающего popup элемента
     * @type {Object}
     */
    target: Object
  },
  data() {
    return {
      /**
      * Состояние popup
      * @type {boolean}
      */
      isOpen: false as boolean
    }
  },
  methods: {
    /**
       * Обработчик нажатия на элемент
       * @param {any} action
       */
    Action(action: any) {
      console.log(action)
      this.isOpen = false;
    }
  }
})
</script>

<style lang="scss">
.popup-container {
  position: relative;
  &__button{
    all: unset;
    display: block;
    margin: 0 auto;
    cursor: pointer;
  } 
}
.popup {
  position: absolute;
  right: 9%;
  z-index: 80;
  min-width: 250px;
  border-radius: 10px;
  border: 1px solid $tablecolor;
  text-align: left;
  background: $bgcolor;
  @media (max-width: $screen) {
    min-width: 200px;
  }
  &-inner {
    box-shadow: 0 15px 10px rgba(16, 17, 20, .3);
  }
  &-ul:last-child {
    border-radius: 10px 10px 0 0;
  }
  &-li {
    padding: 15px 20px;
    font-weight: 500;
    color: $textcolor;
    white-space: nowrap;
    list-style-type: none;
    cursor: pointer;
    @media (max-width: $screen) {
      padding: 10px 15px;
    }
    &:last-child{
      border-radius: 0px 0px 10px 10px;
    }
    &:first-child{
      border-radius: 10px 10px 0px 0px;
    }
    &:hover {
      background: $bghover;
    }
    &__icon {
      vertical-align: middle;
      padding-right: 15px;
    }
    &__text {
      vertical-align: middle;
    }
  }
}
</style>