<script setup>
import '@/assets/main.scss'
import Header from './components/Header.vue'
import SearchFilterMenu from './components/SearchFilterMenu.vue'
import FiltersMenuButton from './components/FiltersMenuButton.vue'
import Listings from './components/Listings.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <Header />

  <SearchFilterMenu />

  <FiltersMenuButton />

  <main>
    <Listings />
  </main>

  <MainFooter />
</template>

<style lang="scss">
main {
  @include flex-base;
  flex-direction: column;
  padding-bottom: 70px;
  position: relative;
}
</style>
