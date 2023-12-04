<template>
  <div class="controls-menu">
    <ul class="controls-menu__buttons">
      <li class="active" @click="toggleActive(0)">All</li>
      <li class="inactive">Used</li>
      <li @click="toggleActive(2)">New</li>
      <li class="inactive">Offers</li>
    </ul>

    <p class="sort__text">
      <span class="md:hidden">Showing 24 of&nbsp;</span>
      <span>339 cars</span>
    </p>

    <SortSelect :items="getSelectItems()"/>
  </div>
</template>

<script setup>
import SortSelect from "./SortSelect.vue";

function toggleActive(id) {
  let classList = document.querySelectorAll('.controls-menu__buttons li')[id].classList
  if( classList.contains('active') ) {
    classList.remove('active')
  } else {
    classList.add('active')
  }
}

function getSelectItems() {
  return ['Lowest price', 'Highest price', 'Most popular', 'Least popular']
}
</script>

<style lang="scss">
.controls-menu {
  @include flex-base;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    margin: 30px 0;
    flex-wrap: nowrap;
    padding: 0 50px;
  }
}

ul.controls-menu__buttons {
  @include flex-base;
  justify-content: space-evenly;
  flex-grow: 1;
  order: 1;
  list-style: none;
  position: relative;
  margin-top: 15px;
  padding-left: 0;
  padding-bottom: 1px;
  width: 100%;
  background-color: $white;

  @media (min-width: 768px) {
    justify-content: center;
    gap: 5px;
    flex-grow: 0;
    order: 2;
    margin: 0;
  }

  li {
    font-size: 14px;
    padding: 8px 0;
    width: 25%;
    text-align: center;
    color: $text-grey;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    border-bottom: 3px solid $grey;

    @media (min-width: 768px) {
      @include flex-base;
      justify-content: center;
      padding: 8px 25px;
      height: 30px;
      width: fit-content;
      border-radius: 12px;
      border: 1px solid $text-black;
      background-color: $text-white;
      color: $text-black;
    }

    &:hover {
      cursor: pointer;
    }
  }
  li.inactive {
    @media (min-width: 768px) {
      border-color: $framework-borders;
      color: $text-grey;
      cursor: default;
    }
  }
  li.active {
    border-bottom: 3px solid $brand-primary;
    color: $text-black;

    @media (min-width: 768px) {
      border: 1px solid $brand-primary;
      background-color: $brand-primary;
      color: $text-white;
    }
  }
}

.sort__text {
  @include flex-base;
  order: 2;
  padding: 23px 0 6px 13px;
  width: 50%;
  background-color: $white;
  white-space: nowrap;

  @media (min-width: 768px) {
    padding: 0;
    width: fit-content;
    order: 1;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
