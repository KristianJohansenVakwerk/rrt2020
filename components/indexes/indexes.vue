<style lang="scss" src="./indexes.scss"></style>
<template>
  <ul class="indexes">
    <li v-for="(e, index) in content" :key="index">
      <indexesItem :e="e" />
    </li>
  </ul>
</template>

<script>
export default {
  components: {},
  props: {
    content: {
      type: [Array, String],
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
