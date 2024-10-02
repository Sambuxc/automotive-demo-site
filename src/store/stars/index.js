import { defineStore } from 'pinia'

export const useStarredListingsStore = defineStore('starredListings', {
  state: () => ({
    listings: []
  }),
  actions: {
    add(listing) {
      const index = this.listings.findIndex((item) => item.id === listing.id)
      if (index !== -1) {
        this.listings.splice(index, 1)
      } else {
        this.listings.push(listing)
      }
    }
  }
})
