<template>
  <svg
    class="classList"
    @click="handleClick"
    :class="{ selected: selected }"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M11.0489 3.92705C11.3483 3.00574 12.6517 3.00574 12.9511 3.92705L14.2451 7.90983C14.379 8.32185 14.763 8.60081 15.1962 8.60081H19.3839C20.3527 8.60081 20.7554 9.84043 19.9717 10.4098L16.5838 12.8713C16.2333 13.126 16.0866 13.5773 16.2205 13.9894L17.5146 17.9721C17.8139 18.8934 16.7595 19.6596 15.9757 19.0902L12.5878 16.6287C12.2373 16.374 11.7627 16.374 11.4122 16.6287L8.02426 19.0902C7.24054 19.6596 6.18607 18.8934 6.48542 17.9721L7.7795 13.9894C7.91338 13.5773 7.76672 13.126 7.41623 12.8713L4.02827 10.4098C3.24456 9.84043 3.64734 8.60081 4.61606 8.60081H8.8038C9.23703 8.60081 9.62099 8.32185 9.75486 7.90983L11.0489 3.92705Z"
    />
  </svg>
</template>
<script setup>
import { ref } from 'vue'

const emit = defineEmits(['star-clicked'])
const selected = ref(false)

function handleClick(e) {
  selected.value = !selected.value
  emit('star-clicked')
}
</script>

<style lang="scss">
.star-icon {
  cursor: pointer;

  &:hover path {
    fill: $brand-primary;
    stroke: none;
  }

  path {
    stroke: $brand-primary;
    stroke-width: 1.2px;
    fill: none;
  }
}

.selected {
  path {
    fill: $brand-primary;
    stroke: none;
  }
}
</style>
