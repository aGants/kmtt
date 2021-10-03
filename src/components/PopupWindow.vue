<template>
  <div class="popup">
    <div class="popup-inner">
      <ul class="popup-ul">
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupWindow"
}
</script>

<style lang="scss">
.popup {
  position: absolute;
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