<template>
  <page :mods="['index']">
    <div class="page-head">
      <div class="page-title">
        <h1>Index</h1>
      </div>
      <div class="page-close">
        <nuxt-link to="/"><Close /> </nuxt-link>
      </div>
    </div>

    <indexes :content="mod_content" />
  </page>
</template>

<script>
import { mapState } from 'vuex'
import Close from '~/components/icons/close.svg?inline'

export default {
  components: { Close },
  computed: mapState({
    mod_content: (state) => state.ui.content,
    sort: (state) => state.ui.sortBy
  }),
  watch: {
    sort(newValue, oldValue) {
      if (newValue !== '') {
        this.sortIndex(newValue)
      }
    }
  },
  methods: {
    sortIndex(obj) {
      this.$store.commit('ui/sortContent', [obj.sortBy, obj.direction])
    }
  }
}
</script>

<style lang="scss"></style>
