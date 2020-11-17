<style lang="scss" src="./base-grid.scss"></style>
<template>
  <div class="grid" :class="[computedMods]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mods: {
      type: [Array],
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {
    computedMods() {
      if (Array.isArray(this.mods)) {
        return this.mods.map((i) => {
          return ` grid-${i}`
        })
      } else {
        return `grid-${this.mods}`
      }
    }
  },
  methods: {}
}
</script>
