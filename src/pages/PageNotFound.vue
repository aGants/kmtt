<template>
  <div class="main error">
    <p class="error__text">Произошла ошибка :(</p>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style lang="scss">
.error {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  &__text {
    font-size: 30px;
  }
}
</style>