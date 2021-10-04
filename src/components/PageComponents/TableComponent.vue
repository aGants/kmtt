<template>
  <table class="table">
    <thead>
      <tr>
        <th 
          v-for="key in component.keys"
          :key="key.id"
          class="table-th"
        >

          <span class="table-th__icon">
            <component
              :is="key.icon"
              size="1x"
            ></component>
          </span>
          
          <span class="table-th__title">
            {{ key.title }}
          </span>

        </th>
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="(value, index) in component.data"
        :key="index"
        class="table-tr"
      >
        <td 
          v-for="(name, index) in value"
          :key="index"
          class="table-td">

            <a
              v-if="name.name"
              :href="name.link"
              class="table-td__link"
            >
                {{ name.name }}
            </a>

            <span v-else-if="name.icon" class="table-td__icon">
              <component
                  :is="name.icon"
                  size="1x"
                  :color="name.color"
              ></component>
              {{ name.text }}
            </span>

            <popup-window 
              v-else-if="name === 'action'" 
              :action="component.action.list" 
              :targetName="value.name"
              > 
              {{ component.action.name }}
            </popup-window>

            <span v-else class="table-td__text">
              {{ name }}
            </span>
            
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ListIcon, UserIcon, AtSignIcon, InfoIcon, DiscIcon, CheckIcon, XIcon } from 'vue-feather-icons'
import PopupWindow from '../PopupWindow.vue'

export default {
  name: 'TableComponent',
  props: { component: Object },
  components: { 
    PopupWindow, 
    ListIcon, UserIcon, AtSignIcon, InfoIcon, DiscIcon, CheckIcon, XIcon
  },
}
</script>

<style lang="scss">
.table { 
  width: 100%;
  margin: 10px 0px;
  border-collapse: collapse;
  &-th {
    padding: 15px 10px;
    color: $subcolor;
    text-align: left;
    border: 1px solid $tablecolor;
    white-space: nowrap;
    &__icon {
      margin: 5px;
    }
    &__title {
      font-size: 18px;
      font-weight: 400;
    }
  }
  &-td {
    position: relative;
    padding: 10px;
    border: 1px solid $tablecolor;
    line-height: 19px;
    &__icon {
      white-space: nowrap;
    }
    &__link {
      color: $linkcolor;
      text-decoration: none;
      border-bottom: 1px dashed $linkcolor;
      &:hover {
        color: $linkhover;
        border-color: $linkhover;
      }
    }
  }
}
</style>