<script>
import { reactive } from 'vue'
import SearchFilterItem from './SearchFilterItem.vue'
import IconFilter from './icons/IconFilter.vue'

export default {
  name: 'SearchFilterMenu',

  setup() {
    const state = reactive({
      selections: []
    })
    return {
      state
    }
  },

  components: {
    SearchFilterItem,
    IconFilter
  },

  methods: {
    setSelection(selection, canAdd) {
      const selections = this.state.selections

      // Store filter selection
      if (canAdd) {
        // add item if not stored already
        selections.push(selection)
      } else {
        selections.splice(selections.indexOf(selection), 1)
      }

      console.log(selections)
    }
  }
}
</script>

<template>
  <div class="search-filter-menu">
    <div class="search-filter-menu__header">
      <h2>Search filters</h2>
      <button class="search-filter-menu__header--reset btn-red">Reset</button>
      <button class="search-filter-menu__header--cancel btn-base">Cancel</button>
    </div>

    <div class="search-filter-menu__body">
      <h2>Brand</h2>

      <search-filter-item title="Make" @custom-change="setSelection"></search-filter-item>
      <search-filter-item title="Model" disabled />

      <h2>Finance</h2>
      <search-filter-item title="Deposit" />
      <search-filter-item title="Mileage" />
      <search-filter-item title="Period" />
      <search-filter-item title="Budget" />

      <h2>Budget</h2>
      <search-filter-item title="Min. Price" disabled />
      <search-filter-item title="Max. Price" disabled />
    </div>

    <div class="search-filter-menu__control">
      <div class="search-filter-menu__control--button">
        <IconFilter />
        <p>Update (399)</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.search-filter-menu {
  overflow-y: scroll;
  position: absolute;
  top: $header-height;
  width: 100%;
  height: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  transition: 0.6s height ease;
  z-index: 100;

  @media (min-width: 768px) {
    top: $header-height-tablet;
  }
  @media (min-width: 1024px) {
    display: none;
  }

  &__header {
    @include flex-base;
    gap: 15px;
    height: fit-content;
    width: 100%;
    padding: 20px 12px;

    h2 {
      flex-grow: 1;
      font-size: 18px;
      color: black;
      font-weight: 700;
      line-height: 24px;
    }
  }

  &__body {
    padding: 0 13px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    h2 {
      margin: 20px 0;

      color: $text-disabled;
      font-variation-settings: 'wght' 900;
      font-size: 12px;
      line-height: 18px; /* 150% */
      letter-spacing: 1.8px;
      text-transform: uppercase;
    }
  }

  &__control {
    position: fixed;
    bottom: 0;
    display: none;
    height: 70px;
    width: 100%;
    padding: 10px 98px 10px 97px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);

    &--button {
      @include flex-base;
      justify-content: center;
      gap: 10px;
      padding: 12px 25px;
      height: 50px;
      width: fit-content;

      border-radius: 16px;
      border: 1px solid $framework-borders;
      background: $framework-light;

      p {
        height: fit-content;
        color: $text-black;
        text-align: center;
        /* All/Headings/Buttons */
        font-family: 'Overpass-variable';
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        white-space: nowrap;
      }
    }
  }
}
.search-filter-menu.open {
  height: calc(100% - $header-height);

  .search-filter-menu__control {
    display: inline-flex;
  }
}
</style>
