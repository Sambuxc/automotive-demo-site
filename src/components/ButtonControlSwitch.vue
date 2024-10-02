<script setup>
import IconPlus from './icons/IconPlus.vue'
import IconMinus from './icons/IconMinus.vue'
</script>

<template>
  <i class="control-switch">
    <IconMinus />
    <IconPlus />
  </i>
</template>

<style lang="scss">
.control-switch {
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid $framework-borders;

  .icon-minus {
    display: none;
  }
}
.control-switch.active {
  background-color: $brand-primary;
  border-color: $brand-primary;

  .icon-minus {
    display: block;
  }

  .icon-plus {
    display: none;
  }
}
</style>
