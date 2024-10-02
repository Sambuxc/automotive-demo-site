<template>
  <RouterLink @mouseover="$emit('handleMouseover', $el)" :to="to" class="nav-item-text">{{
    text
  }}</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
  to: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
a.router-link-exact-active:hover {
  background-color: transparent;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;

  /*font-family: Overpass;*/
  line-height: 27px;
  font-size: 16px;
  color: black;
}

a.router-link-exact-active {
  color: var(--color-text);
}

// a.router-link-exact-active::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   display: block;
//   width: 5px;
//   height: 24px;
//   border-radius: 0px 0px 100px 100px;
//   background-color: #7572ff;
// }

.nav-item-text {
  color: grey;
}
</style>
