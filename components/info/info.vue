<style lang="scss" src="./info.scss"></style>
<template>
  <header class="info" :class="{ show: infoState }">
    <base-grid>
      <base-grid-column class="col-columns" :mods="['sm-6', 'md-6', 'lg-8']">
        <span v-html="globals.about_text" />
      </base-grid-column>
      <base-grid-column :mods="['sm-6', 'md-6', 'lg-4']">
        <span class="type-small" v-html="globals.information" />
      </base-grid-column>
    </base-grid>
    <div class="info-close">
      <a href="#" @click="updateInfoState()"><Close /></a>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Close from '~/components/icons/close.svg?inline'
export default {
  components: { Close },
  props: {},
  data() {
    return {}
  },
  computed: mapState({
    infoState(state) {
      return state.ui.showInfo
    },
    globals(state) {
      return state.ui.globals
    }
  }),
  methods: {
    updateInfoState() {
      this.$store.commit('ui/infoState', false)
    }
  }
}
</script>
