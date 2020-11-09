<style lang="scss" src="./slideshow.scss"></style>
<template>
  <div
    ref="slideshow"
    v-swiper="computedOptions"
    class="slideshow"
    :class="[computedMods]"
  >
    <div class="slideshow-wrapper swiper-wrapper">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slideshow-slide swiper-slide"
      >
        <base-image :img="slide.image" :mods="['slideshow']" />
      </div>
    </div>

    <div class="slideshow-prev" @click="navigation('prev')">
      prev
      <!-- <icon-base icon-name="arrow-prev" width="24" height="21">
        <icon-arrow-prev />
      </icon-base> -->
    </div>
    <div class="slideshow-next" @click="navigation('next')">
      next
      <!-- <icon-base icon-name="arrow-next" width="24" height="21">
        <icon-arrow-next />
      </icon-base> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mods: {
      type: [Array],
      default: () => []
    },
    options: {
      type: [Object],
      default: () => {}
    },
    slides: {
      type: [Array],
      default: () => []
    },
    activeIndex: {
      type: [Number],
      default: () => 0
    }
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    computedOptions() {
      if (this.options) {
        return this.options
      } else {
        return this.swiperOption
      }
    },
    computedMods() {
      if (Array.isArray(this.mods)) {
        return this.mods.map((i) => {
          return ` slideshow-${i}`
        })
      } else {
        return `slideshow-${this.mods}`
      }
    }
  },
  mounted() {
    console.log(this.activeIndex)
    this.$swiper.slideTo(this.activeIndex)
  },
  methods: {
    navigation(dir) {
      if (dir === 'prev') {
        console.log(this.$swiper)
        this.$swiper.slidePrev()
      } else {
        this.$swiper.slideNext()
      }
    }
  }
}
</script>
