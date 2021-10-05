<template>
  <component
    :is=IconName
    :size="IconSize"
  />
</template>

<script>
import 
{ 
  SettingsIcon, MenuIcon, AlertTriangleIcon, ChevronDownIcon,ListIcon,
  UserIcon, AtSignIcon, InfoIcon, DiscIcon, CheckIcon, XIcon, HomeIcon, SearchIcon 
} from 'vue-feather-icons'

export default {
  name: 'Icon',
  components: 
  { 
    SettingsIcon, MenuIcon, AlertTriangleIcon, ChevronDownIcon, ListIcon, 
    UserIcon, AtSignIcon, InfoIcon, DiscIcon, CheckIcon, XIcon, HomeIcon, 
    SearchIcon
  },
  props: {
    IconName: String,
    IconSize : String
  },
}
</script>

<style lang="scss">
.feather {
  vertical-align: middle;
  margin-right: 2px;
}
</style>