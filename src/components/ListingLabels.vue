<template>
  <div class="item__labels">
    <div v-for="(group, index) in groupedStrings()" :key="index" class="line-group">
      <p v-for="(string, i) in group" :key="i">{{ string }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  labels: {
    type: String,
    required: true
  }
})

const labelsArr = props.labels.split(',')

/**
 * Group strings into line group pairs from an array.
 *
 * @param {Array} specArr - The input array of strings to be grouped.
 * @returns {Array} An array containing sub-arrays with pairs of strings.
 */
function groupedStrings() {
  // an array to store the groups of strings.
  const groups = []
  for (let i = 0; i < labelsArr.length; i += 2) {
    // Slice the input array to create a group of 2 strings.
    const group = labelsArr.slice(i, i + 2)
    groups.push(group)
  }
  return groups
}
</script>

<style scoped lang="scss">
.item__labels {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: 490px) {
    flex-direction: row;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 5px;
  }

  .line-group {
    @include flex-base;

    @media (min-width: 490px) {
      display: flex;
      gap: 5px;
    }
  }

  .line-group:first-child {
    @media (min-width: 490px) {
      margin-right: 5px;
    }
  }

  p {
    @media (min-width: 490px) {
      font-size: 10px;
      padding: 1px 10px;
      color: $text-white;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: $framework-dark-1;

      &:hover {
        cursor: pointer;
      }
    }
  }
  p + p {
    @include flex-base;
    gap: 4px;
  }

  p + p::before {
    content: '';
    display: block;
    position: relative;
    left: 0;
    margin-left: 4px;
    height: 10px;
    width: 1px;
    background-color: $framework-borders;

    @media (min-width: 490px) {
      display: none;
    }
  }
}
</style>
