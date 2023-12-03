<template>
  <div class="relative flex lg:w-full">
    <i class="marker"></i>
    <nav>
      <div class="menu-wrapper">
        <nav-link-item to="/" text="Home" @handleMouseover="handleMouseover"></nav-link-item>
        <nav-link-item
          to="/our-cars"
          text="Our cars"
          @handleMouseover="handleMouseover"
        ></nav-link-item>
        <nav-link-item
          to="/sell"
          text="Sell your car"
          @handleMouseover="handleMouseover"
        ></nav-link-item>
        <nav-link-item
          to="/apply"
          text="Apply for finance"
          @handleMouseover="handleMouseover"
        ></nav-link-item>
        <nav-link-item
          to="/about"
          text="About us"
          @handleMouseover="handleMouseover"
        ></nav-link-item>
        <nav-link-item to="/blog" text="Blog" @handleMouseover="handleMouseover"></nav-link-item>
        <nav-link-item
          to="/contact"
          text="Contact"
          @handleMouseover="handleMouseover"
        ></nav-link-item>
      </div>

      <RouterLink to="/contact" class="btn-blue md:hidden">Contact</RouterLink>
      <RouterLink to="mailto:samwbru@gmail.com" class="order-1 btn-blue hidden md:flex lg:order-2"
        >Email</RouterLink
      >
      <RouterLink to="/call" class="order-2 hidden btn-blue md:flex lg:order-1">Call</RouterLink>

      <div class="flex lg:hidden">
        <a class="nav-item-btn">Menu</a>
        <img
          class="hidden md:flex"
          src="@/assets/menu-icon.svg"
          alt="menu icon"
          width="24"
          height="24"
        />
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavLinkItem from '@/components/NavLinkItem.vue'

let marker, root, navBar

onMounted(() => {
  root = document.documentElement
  marker = document.querySelector('.marker')
  navBar = document.querySelector('nav')
  setTimeout(() => {
    const activeNavItem = document.querySelector('.router-link-exact-active.nav-item-text')
    if (activeNavItem) {
      // for now wait a lil bit to ensure other dom elements have loaded otherwise marker position is incorrect
      // TODO: look into the lifecycle rendering of Nav component in relation to Header/logo component
      // might need to do something is onUpdated hook
      moveMarkerOverElement(activeNavItem)
    }
  }, 300)
})

/**
 * Set the left position correctly
   the left value of the nav item minus the marker's left value because when setting the style left pos to equal firstItemValues.left it adds to its original value.
   centerPos - markerWidth to positioning it in the center of nav item.
* */
function handleMouseover(elem) {
  moveMarkerOverElement(elem)
}

function moveMarkerOverElement(elem) {
  const selectedNavItemRect = elem.getBoundingClientRect()
  let offset = selectedNavItemRect.width / 2 // ensures the marker is central to selected nav item
  let newMarkerPos = selectedNavItemRect.left - navBar.getBoundingClientRect().left + offset
  root.style.setProperty('--nav-marker-left', `${newMarkerPos}px`)
}
</script>

<style lang="scss">
.logo {
  height: fit-content;
  @media (min-width: 768px) {
    margin-right: 32px;
  }

  @media (min-width: 1024px) {
    width: 200px;
  }
}

nav {
  @include flex-base;
  justify-content: flex-end;
  width: 100%;
  text-align: center;
  gap: 15px;
  position: relative;

  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 100%;
  }

  // Nested nav elements

  .menu-wrapper {
    display: none;

    @media (min-width: 1340px) {
      @include flex-base;
      justify-content: flex-end;
      margin-right: 50px;
      width: 100%;
      gap: 30px;
    }
  }

  /*
    Specific menu items
  */

  .nav-item-btn {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: 30px;
      margin-right: 10px;
    }
  }
}

.marker {
  @media (min-width: 1340px) {
    position: absolute;
    top: 0;
    left: var(--nav-marker-left);
    display: block;
    width: 5px;
    height: 24px;
    border-radius: 0px 0px 100px 100px;
    background-color: #7572ff;
    transition: 0.5s left ease;
  }
}
</style>
