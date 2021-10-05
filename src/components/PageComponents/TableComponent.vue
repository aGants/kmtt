<template>
<div>
  <div class="component-header">
    <p class="component-header__title">{{ component.name }}</p>
      <div
        v-if="component.search"
        class="component-header-input"
      >
        <SearchIcon size="1x" class="component-header-input__icon"/>
        <input 
          type="text" 
          placeholder="Поиск" 
          v-model="search"
          class="component-header-input__text"
        />
      </div>
  </div>
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
        v-for="(value, index) in filteredTable"
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
              :target="value"
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
</div>
</template>

<script>
import { ListIcon, UserIcon, AtSignIcon, InfoIcon, DiscIcon, CheckIcon, XIcon, HomeIcon, SearchIcon } from 'vue-feather-icons'
import PopupWindow from '../PopupWindow.vue'

export default {
  name: 'TableComponent',
  data() {
    return {
      search: ''
    }
  },
  props: { component: Object },
  components: { 
    PopupWindow, 
    ListIcon, UserIcon, AtSignIcon, InfoIcon, DiscIcon, CheckIcon, XIcon, HomeIcon, SearchIcon
  },
  computed: {
    filteredTable: function () {
      if (this.component.searchKey) {
        let key = this.component.searchKey
        return this.component.data.filter(search => {
          return search[key].toLowerCase().match(this.search.toLowerCase())
      })
      } else return this.component.data
    }
  }
}
</script>

<style lang="scss">
.component-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__title {
    font: 500 20px $font;
  }
  &-input {
    width: 260px;
    position: relative;
    display: block;
    padding: 5px;
    background: $bgcolor;
    color: $subcolor;
    border: 1px solid $tablecolor;
    border-radius: 20px;
    &__icon {
      position: absolute;
      top: 7px;
      left: 10px;
    }
    &__text {
      padding-left: 30px;
      font: 400 18px $font;
      background: $bgcolor;
      border: none;
      &:focus, &:active {
        border: none;
        outline: none;
        color: $subcolor;
      }
      &::placeholder {
        color: $subcolor;
      }
    }
  }
}

.table { 
  width: 100%;
  margin: 5px 0px;
  border-collapse: collapse;
  &-th {
    padding: 14px 10px;
    color: $subcolor;
    text-align: left;
    border: 1px solid $tablecolor;
    white-space: nowrap;
    &:first-child, &:last-child {
      border-left: none;
      border-right: none;
    }
    &__icon {
      margin: 0 5px;
    }
    &__title {
      margin-top: 5px;
      font-size: 18px;
      font-weight: 400;
    }
  }
  &-td {
    position: relative;
    padding: 12px;
    border: 1px solid $tablecolor;
    line-height: 19px;
    &:first-child, &:last-child {
      border-left: none;
      border-right: none;
    }
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