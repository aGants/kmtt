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
            @click="isOpen = !isOpen" 
            class="popup__li"
          >

            <p v-if="item.objectName == true">
              {{ item.title }} {{ targetName }}
            </p> 

            <p v-else>
              <span>
                <component
                  v-if="item.icon"
                  :is="item.icon"
                  size="1x"
                ></component>
              </span>
              {{ item.title }} 
            </p>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { SettingsIcon, MenuIcon, AlertTriangleIcon } from 'vue-feather-icons'

export default {
  name: "PopupWindow",
  components: { SettingsIcon, MenuIcon, AlertTriangleIcon },
  data() {
    return {
      isOpen: false
    }
  },
  props: { 
    action: Array, 
    targetName: String 
  },
}
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
  border-radius: 10px;
  border: 1px solid $tablecolor;
  text-align: left;
  background: $bgcolor;
  &-inner {
    box-shadow: 0 15px 10px rgba(16, 17, 20, .3);
  }
  &-ul:last-child {
    border-radius: 10px 10px 0 0;
    color: red;
  }
  &__li {
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
  }
}
</style>