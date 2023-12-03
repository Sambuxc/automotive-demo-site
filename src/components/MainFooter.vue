<script setup>
import ListIcon from "./icons/IconPlus.vue";
</script>
<template>
  <footer>
    <div class="footer__first">
      <img
        src="../assets/footer_logo.svg"
        width="142" />

      <div class="row-wrapper">
        <RouterLink to="/call" class="btn-blue">Call Us</RouterLink>
        <RouterLink to="mailto:samwbru@gmail.com" class="btn-blue">Email Us</RouterLink>
      </div>

      <ul>
        <li>Branch details</li>
        <li>Popular brands</li>
        <li>Site map</li>
      </ul>
    </div>
    <div class="footer__second">
      <ul>
        <li>Company info</li>
        <li>Financial Disclosure</li>
      </ul>

      <div class="footer__second--links">
        <p>
          <a href="/">Terms and conditions</a>
        </p>
        <p>
          <a href="/">Privacy policy</a>
        </p>
        <p>
          <a href="/">Site map</a>
        </p>
        <p>
          <a href="/">Cookies policy</a>
        </p>
        <p>
          Powered by <a href="">Nexus Point Apex</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  @include flex-base;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 999;

  .footer__first {
    @include flex-base;
    flex-direction: column;
    gap: 30px;
    padding: 30px 12px;
    width: inherit;
    background-color: $framework-dark-2;
    border-radius: 0px 50px 0px 0px;

    @media (min-width: 768px) {
      padding: 50px 30px;
    }

    .row-wrapper {
      @include flex-base;
    }

    a:first-child {
      margin-right: 10px;
    }
  }

  .footer__second {
    @include flex-base;
    flex-direction: column;
    gap: 30px;
    padding: 30px 12px;
    width: inherit;
    background-color: $framework-dark-1;

    @media (min-width: 768px) {
      padding: 50px 30px;
    }

    &--links {
      @include flex-base;
      flex-wrap: wrap;
      width: inherit;

      @media (min-width: 768px) {
        gap: 30px;
      }

      @media (min-width: 1024px) {
        justify-content: center;
      }

      p {
        width: 50%;
        margin-bottom: 20px;

        @media (min-width: 768px) {
          width: fit-content;
          margin: 0;
        }
      }
      p:last-child {
        width: fit-content;
      }

      p, a {
        font-size: 12px;
        color: $text-white;
      }
      a {
        text-decoration: underline;
      }
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    width: 100%;

    @media (min-width: 1024px) {
      width: 30%;
    }

    li {
      @include flex-base;
      position: relative;
      margin-bottom: 20px;
      color: $text-white;
      font-weight: 700;

      &::after {
        content: url('../assets/add-expand.svg');
        position: absolute;
        top: 0;
        right: 12px;
        display: inline-block;
        width: 8px;
        height: 8px;
      }
    }

    li:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
