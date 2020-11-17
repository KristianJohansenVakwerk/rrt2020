<template>
  <div class="col" :class="[computedMods]">
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
          return ` col-${i}`
        })
      } else {
        return `col-${this.mods}`
      }
    }
  },
  methods: {}
}
</script>
