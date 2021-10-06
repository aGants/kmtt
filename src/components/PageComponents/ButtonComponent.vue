<template>
  <a class="button" @click="Action(component.url)" target="_blank">
    {{ component.name }}
  </a>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ButtonModel } from "../../interfaces/Component"

export default Vue.extend({
  name: 'ButtonComponent',
  props: { 
    /**
    * Данные кнопки
    * @type {Object<ButtonModel>}
    */
    component: {
      required: true,
      type: Object as PropType<ButtonModel>
    }
  },
  /**
  * Обработчик нажатия на кнопку
  * @param {string} url
  */
  methods: {
    Action(url: string) {
      this.$router.push(url)
    }
  }
})
</script>

<style lang="scss">
.button {
  display: inline-block;
  margin: 10px 5px 10px 0;
  padding: 15px 30px;
  font: 400 18px $font;
  color: #fff;
  text-decoration: none;
  background: $linkcolor;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(54, 128, 236, .3);
  cursor: pointer;
  &:hover {
    background: $linkhover;
  }
  &:active {
    color: $titlecolor;
  }
}
</style>