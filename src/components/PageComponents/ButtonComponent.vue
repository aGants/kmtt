<template>
  <a class="button" :href="component.url" target="_blank">
    {{ component.name }}
  </a>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: { component: Object }
}
</script>

<style lang="scss">
.button {
  display: inline-block;
  margin: 10px 5px 10px 0;
  padding: 10px 20px;
  font: 13px $font;
  color: #fff;
  text-decoration: none;
  background: $linkcolor;
  border: none;
  border-radius: 10px;
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