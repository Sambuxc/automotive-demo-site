<script setup>
import IconFilter from "./icons/IconFilter.vue";

const emit = defineEmits(['openMenu'])

const handleClick = () => {
  emit('openMenu')
}
</script>

<template>
  <div class="filters-menu__control">
    <div 
      class="filters-menu__control--button"
      @click="handleClick"
    >
      <IconFilter />
      <p>Filters</p>
    </div>
  </div>
</template>

<style lang="scss">
.filters-menu__control {
  position: fixed;
  bottom: 0;
  display: inline-flex;
  height: 70px;
  width: 100%;
  padding: 10px 98px 10px 97px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  z-index: 100;

  @media (min-width: 1024px) {
    display: none;
  }

  &--button {
    @include flex-base;
    justify-content: center;
    gap: 10px;
    padding: 12px 25px;
    height: 50px;
    width: fit-content;
    cursor: pointer;

    border-radius: 16px;
    border: $framework-borders;
    background: $brand-primary;

    p {
      color: $text-white;
    }

    svg path {
      stroke: $text-white;
    }
  }
}

.search-filter-menu.open + .filters-menu__control {
  display: none;
}
</style>
