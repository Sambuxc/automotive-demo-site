<script>
import { ref } from 'vue'
import ButtonControlSwitch from './ButtonControlSwitch.vue'

export default {
  name: 'FiltersItem',
  setup() {
    const isSelected = ref(false)

    return {
      isSelected
    }
  },
  props: {
    filterItemName: String,
    handleClickFn: Function
  },
  methods: {
    handleClick(e) {
      this.isSelected = !this.isSelected
      // Parent callback
      this.handleClickFn(e, this.isSelected)
    }
  }
}
</script>

<template>
  <div class="search-filters__item" @click="handleClick">
    <p class="search-filters__item--title">{{ filterItemName }}</p>
    <ButtonControlSwitch />
  </div>
</template>

<style lang="scss">
.search-filters__item {
  @include flex-base;
  gap: 10px;
  padding: 5px 5px 5px 10px;
  width: fit-content;
  height: fit-content;
  background-color: $framework-light;
  border-radius: 12px;

  &--title {
    text-wrap: nowrap;
    color: $text-grey;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px; /* 150% */
    pointer-events: none;
  }
}

.search-filters__item.selected .control-switch {
  background-color: $red;
  border-color: $red;

  svg path {
    stroke: white;
  }
}

.icon-plus,
.control-switch {
  pointer-events: none;
}
</style>
