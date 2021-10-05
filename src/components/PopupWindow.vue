<template>
  <div class="popup-container">
    <button 
      class="popup-container__button"
      @click="isOpen = !isOpen"
    >
      <slot />
    </button>

    <div class="popup" v-if="isOpen">
      <div class="popup-inner">
        <ul class="popup-ul">
          <li 
            v-for="(item, index) in action" 
            :key="index"
            @click="Action(item.action)" 
            class="popup-li"
          >
            <p v-if="item.objectName == true" class="popup-li__text">
              {{ item.title }} {{ target.name }}
            </p> 
            <p v-else>
              <icon-component 
                v-if="item.icon"
                IconName="item.icon"
                :IconSize="'1.4x'"
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
import PopUpModel from '../interfaces/Component'

export default Vue.extend({
  name: "PopupWindow",
  components: { IconComponent },
  data() {
    return {
      isOpen: false as boolean
    }
  },
  props: { 
    action: Array as PropType<PopUpModel[]>, 
    target: Object
  },
    methods: {
      Action(target: any) {
      console.log(target)
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
  right: 10%;
  z-index: 99;
  min-width: 250px;
  border-radius: 10px;
  border: 1px solid $tablecolor;
  text-align: left;
  background: $bgcolor;
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