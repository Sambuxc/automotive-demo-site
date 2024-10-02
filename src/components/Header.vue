<template>
  <header>
    <div class="flex">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125" />

      <button class="items-center hidden md:flex md:mr-15 appearance-none bg-transparent border-none">
        <img src="@/assets/star-icon.svg" width="24" height="24" />
        <span class="md:ml-5">{{ starredCount }}</span>
      </button>

      <div class="items-center hidden md:flex">
        <img src="@/assets/time-icon.svg" timeh="24" height="24" />
        <span class="md:ml-5">0</span>
      </div>
    </div>

    <Nav />
  </header>

  <ControlsMenu />
</template>

<script setup>
import { computed } from 'vue';
// stores
import { useStarredListingsStore } from '../store/stars';

import Nav from "./Nav.vue";
import ControlsMenu from "./ControlsMenu.vue";


const store = useStarredListingsStore();
const starredCount = computed(() => store.listings.length);

</script>

<style lang="scss">

header {
  @extend .flex;

  justify-content: space-between;
  height: $header-height;
  width: 100%;
  border-bottom: 1px solid $framework-borders;
  padding: 10px 13px;

  @media (min-width: 768px) {
    height: $header-height-tablet;
  }

  @media (min-width: 1024px) {
    padding: 30px 32px;
    height: $header-height-desktop;
    display: flex;
    align-items: center;
  }
}

</style>
