<script setup>
import ListingTile from './ListingTile.vue'
import ListingTileAd from './ListingTileAd.vue'
import Pagination from './Pagination.vue'
import SortSelect from './SortSelect.vue'
import IconDown from './icons/IconDown.vue'
import mercedesCar from '../assets/mercedes-car.jpg'

function getSelectItems() {
  return ['Lowest price', 'Highest price', 'Most popular', 'Least popular']
}

// Function to get image URL
function getImageUrl(imageName) {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
}
</script>

<template>
  <section class="listings">
    <ListingTile
      id="1233"
      name="2014 (64) Mercedes-Benz"
      desc="CLA 250e Coupe Shooting Break"
      spec="32k miles,Hybrid,Manual,SUV"
      monthly_price="550.90"
      total_price="23,300"
      :img-url="getImageUrl('mercedes-car.jpg')"
    />
    <ListingTile
      id="1234"
      name="2019 (19) Renault Zoe"
      desc="i R135 Rapid Charge ZE50"
      spec="325 miles,EV,Automatic,Hatchback"
      monthly_price="550.90"
      total_price="23,300"
      discount_price="22,300"
      :img-url="getImageUrl('renault-zoe.jpg')"
    />
    <ListingTile
      id="1235"
      name="2020 (20) Peugeot 208"
      desc="1.2 PureTech 100 GT-Line"
      spec="Petrol,Automatic,Hatchback"
      monthly_price="550.90"
      total_price="23,300"
      discount_price="22,300"
      :img-url="getImageUrl('peugeot.jpg')"
    />
    <ListingTileAd />
    <ListingTile
      id="1236"
      name="2014 (64) Mercedes-Benz"
      desc="CLA 250e Coupe Shooting Break"
      spec="32k miles,Hybrid,Manual,SUV"
      monthly_price="550.90"
      total_price="23,300"
      :img-url="getImageUrl('mercedes-benz.jpg')"
    />
    <ListingTile
      id="1237"
      name="2019 (19) Renault Zoe"
      desc="i R135 Rapid Charge ZE50"
      spec="325 miles,EV,Automatic,Hatchback"
      monthly_price="550.90"
      total_price="23,300"
      discount_price="22,300"
      :img-url="getImageUrl('renault_classic.webp')"
    />
    <ListingTile
      id="1238"
      name="2020 (20) Peugeot 208"
      desc="1.2 PureTech 100 GT-Line"
      spec="Petrol,Automatic,Hatchback"
      monthly_price="550.90"
      total_price="23,300"
      discount_price="22,300"
      :img-url="getImageUrl('peugeot-classic.jpg')"
    />
  </section>

  <div class="listings-footer">
    <div class="listings-footer__header">
      <Pagination />
      <a href="#">Back to top</a>
      <SortSelect :items="getSelectItems()" />
    </div>

    <div class="listings-footer__footer">
      <div class="representative">
        <p>
          <strong>Representative example:</strong> Borrowing £11,790.00 over 4 years with a
          representative APR of 7.9 %, an annual interest rate of 4.08 % (Fixed) and a deposit of
          £500.00, the amount payable would be £273.59 per month, with a total cost of credit of
          £1,843.32 and a total amount payable of £13,633.32.
        </p>
        <div class="select-wrapper">
          <select id="breakdown" name="breakdown">
            <option value="0">Show breakdown</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="select-icon-wrapper">
            <IconDown />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.listings {
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  @media (min-width: 490px) {
    gap: $listings-gap-tablet;
  }
  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 0 0 50px;
    width: calc($tile-width-tablet * 2) + $listings-gap-tablet;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.listings-footer {
  @include flex-base;
  flex-direction: column;

  &__header {
    @include flex-base;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
      width: calc($tile-width-tablet * 2) + $listings-gap-tablet;
    }

    a {
      order: 2;
      margin: 0 auto;
      display: block;
      width: fit-content;
      text-align: center;
      color: $text-grey;
      font-size: 16px;

      @media (min-width: 768px) {
        order: 1;
        margin: 0 auto 0 0;
      }

      &::after {
        content: '';
        position: relative;
        top: -4px;
        display: block;
        width: 100%;
        height: 1px;
        background-color: $text-grey;
      }
    }

    .sort__select {
      display: none;

      @media (min-width: 768px) {
        display: flex;
        order: 3;
      }
    }
  }

  &__footer {
    margin-top: 30px;
    padding: 0 12px;

    @media (min-width: 490px) {
      padding: 0 50px;
      max-width: 669px;
    }

    @media (min-width: 768px) {
      padding: 0;
    }

    .representative {
      display: flex;
      padding: 15px;
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
      border-radius: 16px;
      border: 1px solid $framework-borders;
      background: $framework-light;

      .select-wrapper {
        @include flex-base;
        position: relative;
        width: 100%;

        select {
          padding: 12px 13px;
          display: block;
          width: 100%;
          appearance: none;
          border-radius: 16px;
          background: $text-white;
          font-size: 16px;
          font-weight: 600;
        }

        .select-icon-wrapper {
          @include flex-base;
          justify-content: center;
          position: absolute;
          right: 13px;
          width: 24px;
          height: 24px;
          background-color: $framework-borders;
          border-radius: 8px;
          pointer-events: none;

          svg {
            path {
              stroke: $text-white;
            }
          }
        }
      }
    }
  }
}
</style>
