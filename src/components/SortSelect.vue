<script setup>
import IconDown from './icons/IconDown.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="custom-select">
    <select>
      <option v-for="item in props.items" :key="item.id" :value="item">{{ item }}</option>
    </select>
    <IconDown />
  </div>
</template>

<style lang="scss" scoped>
.custom-select {
  @include flex-base;
  justify-content: flex-end;
  gap: 5px;
  order: 3;
  position: relative;
  width: 50%;
  background-color: $white;

  @media (min-width: 768px) {
    justify-content: center;
    height: 50px;
    width: fit-content;
    white-space: nowrap;
    border-radius: 16px;
    background: $framework-light;
  }

  select {
    appearance: none;
    background: none;
    border: none;
    outline: none;
    position: relative;
    padding: 20px 23px 20px 12px;
    z-index: 2;
  }

  svg {
    position: absolute;
    right: 10px;
    z-index: 1;
  }
}
</style>
