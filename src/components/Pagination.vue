<script setup>
import IconLeft from './icons/IconLeft.vue'
import IconRight from './icons/IconRight.vue'
</script>
<template>
  <div class="pagination">
    <ul>
      <li>
        <IconLeft />
      </li>
      <li class="active">1</li>
      <li>2</li>
      <li>3</li>
      <li>
        <IconRight />
      </li>
      <li>
        <IconRight />
        <IconRight />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.pagination {
  padding: 30px 13px;
  order: 1;

  @media (min-width: 768px) {
    order: 2;
  }

  ul {
    @include flex-base;
    justify-content: center;
    gap: 5px;
    padding: 0;
    width: 100%;
    list-style: none;

    li {
      @include btn-primary;
      width: 54px;
      height: 30px;
    }
    li.active {
      color: $text-white;
      border-color: $brand-primary;
      background: $brand-primary;
    }
  }
}
</style>
