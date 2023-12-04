import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

/**
 * Search Filter Menu
 */
const searchFilterMenu = document.querySelector(".search-filter-menu");

document
  .querySelectorAll(
    ".search-filter-menu__header--cancel, .filters-menu__control--button"
  ).forEach((elem) => {
    elem.addEventListener("click", function () {
      if (!searchFilterMenu.classList.contains("open")) {
        searchFilterMenu.classList.add("open");
        document.body.style.overflow = "hidden" // prevent body scroll whilst menu open
      } else {
        searchFilterMenu.classList.remove("open");
        document.body.style.overflow = ""
      }
    })
  })

  document.querySelector(".search-filter-menu__header--reset").addEventListener("click", function () {
    searchFilterMenu.querySelectorAll('.selected, .active, .open').forEach((elem) => {
      elem.classList.remove('selected', 'active', 'open')
    })
  })

document.querySelectorAll(".search-filter-item__header").forEach((headerFilterItem) => {
  headerFilterItem.addEventListener("click", function () {
    if (!headerFilterItem.closest("[disabled]")) {
      // if headerFilterItement is not disabled
      const searchFilterIcon = headerFilterItem.querySelector('.control-switch');

      // toggle state for the icon button and it's header headerFilterItement
      if (!headerFilterItem.classList.contains("open")) {
        headerFilterItem.classList.add("open");
        searchFilterIcon.classList.add("active");
      } else {
        headerFilterItem.classList.remove("open");
        searchFilterIcon.classList.remove("active"); // no need to if check, it won't remove if it doesn't exist anyway
      }
    }
  })
})

document.querySelectorAll(".search-filters__item").forEach((filterItem) => {
  filterItem.addEventListener("click", function () {
    if (!filterItem.classList.contains("selected")) {
      filterItem.classList.add("selected");
    } else {
      filterItem.classList.remove("selected");
    }
  });
});
