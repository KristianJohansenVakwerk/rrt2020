<style lang="scss" src="./info.scss"></style>
<template>
  <header class="info" :class="{ show: infoState, 'hide-from-page': hideInfo }">
    <base-grid>
      <base-grid-column class="col-columns" :mods="['sm-6', 'md-6', 'lg-8']">
        <span v-html="globals.about_text" />
      </base-grid-column>
      <base-grid-column :mods="['sm-6', 'md-6', 'lg-4']">
        <span class="type-small" v-html="globals.information" />
      </base-grid-column>
      <base-grid-column class="info-trigger" :mods="['sm-6', 'md-12', 'lg-12']">
        <a href="#" @click="updateInfoState(true)">Info</a>
      </base-grid-column>
    </base-grid>
    <div class="info-close">
      <a href="#" @click="updateInfoState(false)"><Close /></a>
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
    hideInfo(state) {
      return state.ui.hideInfoFromPage
    },
    globals(state) {
      return state.ui.globals
    }
  }),
  methods: {
    updateInfoState(state) {
      this.$store.commit('ui/infoState', state)
    }
  }
}
</script>
