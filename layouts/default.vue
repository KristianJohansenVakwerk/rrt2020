<template>
  <div>
    <transition name="fade">
      <svg-loader v-if="showLoader" :key="'loader'" />
      <div v-else :key="'logo'" class="Logo"><Logo /></div>
    </transition>
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/icons/logo.svg?inline'

export default {
  components: { Logo },
  data() {
    return {
      showLoader: true
    }
  },
  computed: mapState({
    loaderStatus(state) {
      return state.ui.loaderStatus
    }
  }),
  watch: {
    loaderStatus(newValue, oldValue) {
      this.showLoader = newValue
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
