<style lang="scss" src="./page.scss"></style>
<template>
  <main class="page" :class="computedMods">
    <slot />
  </main>
</template>

<script>
export default {
  components: {},
  props: {
    mods: {
      type: [Array, String],
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
          return ` page-${i}`
        })
      } else {
        return `page-${this.mods}`
      }
    }
  },
  methods: {}
}
</script>
