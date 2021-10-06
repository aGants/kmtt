<template>
  <component
    :is="iconName"
    :size="iconSize"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import 
{ 
  SettingsIcon, MenuIcon, AlertTriangleIcon, ChevronDownIcon,ListIcon, 
  UserIcon, AtSignIcon, InfoIcon, DiscIcon, CheckIcon, XIcon, HomeIcon, 
  SearchIcon, LayersIcon
} from 'vue-feather-icons'

export default Vue.extend({
  name: 'Icon',
  components: 
  { 
    SettingsIcon, MenuIcon, AlertTriangleIcon, ChevronDownIcon, ListIcon, 
    UserIcon, AtSignIcon, InfoIcon, DiscIcon, CheckIcon, XIcon, HomeIcon, 
    SearchIcon, LayersIcon
  },
  props: {
    /**
    * Имя иконки
    * @type {string}
    */
    iconName: {
      required: true,
      type: String,
    },
    /**
    * Размер иконки
    * @type {string}
    */
    iconSize: {
      required: true,
      type: String,
    },
  },
})
</script>

<style lang="scss">
.feather {
  vertical-align: middle;
  margin-right: 2px;
}
</style>