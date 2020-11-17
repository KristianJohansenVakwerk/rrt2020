<template>
  <header class="SiteHeader">
    <a href="#" @click="updateInfoState()">Info</a>
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    updateInfoState() {
      this.$store.commit('ui/infoState', true)
    }
  }
}
</script>
<style lang="scss" src="./Header.scss" />
