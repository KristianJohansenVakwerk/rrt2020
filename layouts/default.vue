<template>
  <div>
    <info />
    <!-- <siteHeader v-if="!showLoader" /> -->

    <transition name="fade">
      <svg-loader v-if="showLoader" :key="'loader'" />
      <div v-else :key="'logo'" class="Logo"><Logo /></div>
    </transition>

    <transition :name="type" :mode="mode" duration="800">
      <nuxt :key="$route.path" />
    </transition>

    <siteFooter v-if="!showLoader" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/icons/logo.svg?inline'
import { transitions } from '~/utils/transitions'

export default {
  components: { Logo },
  data() {
    return {
      showLoader: true,
      type: 'fade',
      mode: 'out-in'
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
    },
    $route(newValue, oldValue) {
      let value = newValue.name

      if (oldValue.name === 'posters-uid') {
        value = 'from-poster'
      }
      const trans = transitions(value)

      this.type = trans.type
      this.mode = trans.mode
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.lightbox-enter {
  transform: translateY(100vh);
}

.lightbox-leave-to {
  opacity: 1;
}
.lightbox-enter-to {
  transform: translateY(0);
}

.lightbox-enter-active {
  transition: transform 400ms;
  z-index: 2;
}

.lightbox-leave-active {
  z-index: -2;
}
.lightbox-down-leave {
  transform: translateY(0vh);
}

.lightbox-down-enter-to {
  opacity: 0;
  transition: opacity 0.4s;
}
.lightbox-down-leave-to {
  transform: translateY(100vh);
}

.lightbox-down-leave-active {
  transition: transform 500ms;
  z-index: 2;
}

.lightbox-down-enter-active {
  z-index: -2;
  opacity: 1;
  transition: opacity 0.4s;
}
</style>
