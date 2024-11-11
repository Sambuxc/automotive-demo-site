<script>
import { defineComponent, ref } from 'vue'
import ButtonControlSwitch from './ButtonControlSwitch.vue'

export default defineComponent({
  components: {
    ButtonControlSwitch
  },
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const isOpen = ref(false)
    const isActive = ref(false)

    const toggleFilter = () => {
      if (props.disabled) return
      
      isOpen.value = !isOpen.value
      isActive.value = !isActive.value
      emit('custom-change', {
        title: props.title,
        isOpen: isOpen.value,
        isActive: isActive.value
      })
    }

    return {
      isOpen,
      isActive,
      toggleFilter
    }
  }
})
</script>

<template>
  <div 
    class="search-filter-item__header" 
    :class="{ open: isOpen, disabled }"
    @click="toggleFilter"
  >
    <span>{{ title }}</span>
    <ButtonControlSwitch 
      class="control-switch"
      :class="{ active: isActive }"
    />
  </div>
</template>
