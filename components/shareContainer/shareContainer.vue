<style lang="scss" src="./shareContainer.scss"></style>
<template>
  <div class="share-container">
    <div class="share-container-buttons">
      <share :e="entry.entry" type="slideshow" network="facebook" />
      <share :e="entry.entry" type="slideshow" network="twitter" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    entry: {
      type: [Object],
      default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
