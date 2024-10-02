<template>
  <div class="listings__tile">
    <div class="listings__tile--gallery">
      <img :src="imgUrl" :alt="name" />
      <img class="md:hidden" :src="imgUrl" :alt="name" />
      <img class="md:hidden" :src="imgUrl" :alt="name" />
      <img class="md:hidden" :src="imgUrl" :alt="name" />

      <listing-labels :labels="props.spec"></listing-labels>
    </div>
    <div class="listings__tile--details">
      <div class="listings__tile--details__heading">
        <h3>
          <span class="text">{{ name }}</span>
          <span class="button__tag">New</span>
          <IconStar class="star-icon" @star-clicked="handleStarClick" />
        </h3>
        <p class="listings__tile--details__heading--caption">
          {{ desc }}
        </p>
      </div>

      <div class="listings__tile--details__spec">
        <div class="listings__tile--details__spec--details">
          <listing-labels :labels="props.spec"></listing-labels>
        </div>
        <div class="listings__tile--details__spec--price">
          <p class="monthly-price">
            <span
              ><strong>£{{ monthly_price }}</strong></span
            >
            <span class="unit">/mo (PCP)</span>
          </p>
          <p v-if="discount_price" class="total-price">
            <span class="text-red">£{{ discount_price }}</span>
            &nbsp;
            <span class="strikeout">£{{ total_price }}</span>
          </p>
          <p v-else class="total-price">
            <span>£{{ total_price }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// stores
import { useStarredListingsStore } from '../store/stars'

// components
import IconStar from './icons/IconStar.vue'
import ListingLabels from '../components/ListingLabels.vue'

const store = useStarredListingsStore()

const props = defineProps([
  'id',
  'name',
  'desc',
  'spec',
  'total_price',
  'discount_price',
  'monthly_price',
  'imgUrl'
])

const handleStarClick = () => {
  // toggle listing in store
  store.add(props)
}
</script>

<style lang="scss">
.listings__tile {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;

  @media (min-width: 490px) {
    overflow: hidden;
    width: $tile-width-tablet;
    border-radius: 16px;
    background: $text-white;
    box-shadow: 0px 6px 25px 0px rgba(0, 0, 0, 0.15);
  }

  &--details {
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media (min-width: 490px) {
      margin: 0;
      padding: 10px;
      max-width: none;
    }
  }

  &--details__heading {
    display: flex;
    flex-direction: column;

    h3 {
      @include flex-base;
      width: 100%;
      gap: 10px;
      font-size: 14px;

      .text {
        flex-grow: 1;
      }
    }

    .button__tag {
      @include flex-base;
      justify-content: center;
      padding: 5px 10px;

      font-size: 12px;
      line-height: normal;
      color: $text-white;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: $framework-dark-1;
      transition: opacity 0.3s ease;

      @media (min-width: 490px) {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 14px;
      }

      &:hover {
        cursor: pointer;
      }
    }

    &--caption {
      color: $text-grey;
      font-size: 12px;
      line-height: 12px;
    }
  }

  &--details__spec {
    display: flex;
    align-items: flex-end;
    padding-top: 6px;

    > div {
      width: 50%;
      line-height: 18px;

      @media (min-width: 490px) {
        width: 100%;
      }
    }

    &--price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      @media screen and (min-width: 490px) {
        align-items: flex-start;
      }

      .monthly-price {
        font-size: 14px;

        @media (min-width: 490px) {
          padding: 10px 0 5px 0;
          font-size: 18px;
        }

        .unit {
          padding-left: 4px;
          font-size: 12px;
        }
      }

      .total-price {
        span:last-child::after {
          content: 'Calculate finance';
          padding-left: 8px;
          position: relative;
          display: block;
          font-size: inherit;
          color: $brand-primary;

          @media screen and (min-width: 490px) {
            display: inline-block;
          }
        }
      }
    }

    p {
      display: inline-block;
      color: $text-grey;
      font-size: 12px;
      text-align: right;
    }
  }

  &--details__spec--details {
    @media (min-width: 490px) {
      display: none;
    }
  }

  &--gallery {
    position: relative;
    padding: 0 13px;
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    overflow-x: scroll;

    /*@media (min-width: 490px) {
      margin: 0 auto;
    }*/

    @media (min-width: 490px) {
      padding: 0;
      overflow: hidden;
    }

    img {
      width: 113px;
      height: 84px;
      border-radius: 16px;

      @media (min-width: 490px) {
        width: 100%;
        height: 250px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
}
</style>
