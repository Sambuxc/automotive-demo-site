<script setup>
import { reactive } from 'vue'
import ButtonControlSwitch from './ButtonControlSwitch.vue'
import FiltersItem from './SearchFilterItem__FiltersItem.vue'

const props = defineProps({title: String})

const state = reactive({
  selections: []
})


const handleFilterItemClick = (event, canAdd) => {
  const elem = event.target
  const selection = elem.innerText

  // update filter item view
  if (!elem.classList.contains("selected")) {
      elem.classList.add("selected")
    } else {
      elem.classList.remove("selected")
    }

  // Store filter selection
  if( canAdd ) {
    // add item if not stored already
    state.selections.push(selection)
  } else {
    state.selections.splice(state.selections.indexOf(selection), 1)
  }

  console.log(state.selections)
}
</script>

<template>
  <div class="search-filter-item">
    <div class="search-filter-item__header">
      <h3>{{ title }}</h3>

      <button-control-switch></button-control-switch>
    </div>

    <div class="search-filter-item__filters">
      <filters-item filter-item-name="Abarth" :handleClickFn="handleFilterItemClick"></filters-item>
      <filters-item filter-item-name="Alfa Romeo" :handleClickFn="handleFilterItemClick"></filters-item>
      <filters-item filter-item-name="Audi" :handleClickFn="handleFilterItemClick"></filters-item>
      <filters-item filter-item-name="BMW" :handleClickFn="handleFilterItemClick"></filters-item>
      <filters-item filter-item-name="Citroën" :handleClickFn="handleFilterItemClick"></filters-item>
      <filters-item filter-item-name="BS" />
      <filters-item filter-item-name="Abarth" />
      <filters-item filter-item-name="Alfa Romeo" />
      <filters-item filter-item-name="Audi" />
      <filters-item filter-item-name="BMW" />
      <filters-item filter-item-name="Citroën" />
      <filters-item filter-item-name="BS" />
      <filters-item filter-item-name="Abarth" />
      <filters-item filter-item-name="Alfa Romeo" />
      <filters-item filter-item-name="Audi" />
      <filters-item filter-item-name="BMW" />
      <filters-item filter-item-name="Citroën" />
      <filters-item filter-item-name="BS" />
      <filters-item filter-item-name="Abarth" />
      <filters-item filter-item-name="Alfa Romeo" />
      <filters-item filter-item-name="Audi" />
      <filters-item filter-item-name="BMW" />
      <filters-item filter-item-name="Citroën" />
      <filters-item filter-item-name="BS" />
      <filters-item filter-item-name="Abarth" />
      <filters-item filter-item-name="Alfa Romeo" />
      <filters-item filter-item-name="Audi" />
      <filters-item filter-item-name="BMW" />
      <filters-item filter-item-name="Citroën" />
      <filters-item filter-item-name="BS" />
    </div>
  </div>
</template>

<style lang="scss">
.search-filter-item {
  display: flex;
  flex-direction: column;
  padding: 0 13px;
  height: fit-content;

  border-radius: 16px;

  &__header {
    @include flex-base;
    justify-content: space-between;
    padding: 13px 0;
  }

  &__filters {
    display: none;
    flex-wrap: wrap;
    gap: 10px;
    padding: 13px 0;
  }

  &__header.open + &__filters {
    display: inline-flex;
  }

  h3 {
    font-family:
      'SF Pro Text',
      -apple-system,
      BlinkMacSystemFont,
      Roboto,
      'Segoe UI',
      Helvetica,
      Arial,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    color: black;
  }
}
.search-filter-item[disabled] {
  opacity: 0.4;
}
/*
for when filters have been selected
.search-filter-item.active {
  border: 1px solid $framework-borders;
}*/
</style>
