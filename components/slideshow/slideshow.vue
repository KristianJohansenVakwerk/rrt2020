<style lang="scss" src="./slideshow.scss"></style>
<template>
  <div
    ref="slideshow"
    v-swiper="computedOptions"
    class="slideshow"
    :class="[computedMods]"
    @slideChangeTransitionStart="transEnd()"
  >
    <div class="slideshow-wrapper swiper-wrapper">
      <div
        v-for="(slide, index) in activeSlides"
        :key="index"
        class="slideshow-slide swiper-slide"
        :data-uid="slide.uid"
        :data-index="index"
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
  components: {},
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
    allSlides: {
      type: [Array],
      default: () => []
    },
    uid: {
      type: [String],
      default: () => ''
    }
  },
  data() {
    return {
      activeEntry: null,
      activeIndex: 0,
      activeSlides: null,
      firstCheck: true
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
  async created() {
    this.activeEntry = await this.allSlides.filter(
      (entry) => entry.uid === this.uid
    )

    this.activeIndex = this.activeEntry[0].index
    this.activeSlides = this.activeEntry[0].images
  },
  mounted() {
    const _this = this
    setTimeout(() => {
      _this.checkSlides(true)
    }, 100)
  },
  methods: {
    transEnd() {
      this.checkSlides(false)
    },
    checkSlides(init) {
      let direction = null

      if (this.$swiper.previousIndex - this.$swiper.activeIndex < 0) {
        direction = 'next'
      } else {
        direction = 'prev'
      }

      const initIndex = this.activeIndex

      if (init) {
        const nextIndex = initIndex + 1
        const prevIndex = initIndex - 1
        const nextSlides = this.allSlides[nextIndex]
        const prevSlides = this.allSlides[prevIndex]

        if (this.activeIndex === 0) {
          console.log('if')
          const nextHtml = nextSlides.images.map((slide, index) => {
            return `<div class="slideshow-slide swiper-slide" data-uid="${slide.uid}" data-index="${index}"><figure class="image image-slideshow"><img src="${slide.image.url}" loading="lazy" class="lazyload" /></figure> </div>`
          })

          this.$swiper.appendSlide(nextHtml)
        } else if (this.activeIndex === this.allSlides.length - 1) {
          console.log('else if')
          const prevHtml = prevSlides.images.map((slide, index) => {
            return `<div class="slideshow-slide swiper-slide" data-uid="${slide.uid}" data-index="${index}"><figure class="image image-slideshow"><img src="${slide.image.url}" loading="lazy" class="lazyload" /></figure> </div>`
          })

          const reversed = prevHtml.reverse()

          this.$swiper.prependSlide(reversed)
        } else {
          console.log('else')
          const nextHtml = nextSlides.images.map((slide, index) => {
            return `<div class="slideshow-slide swiper-slide" data-uid="${slide.uid}" data-index="${index}"><figure class="image image-slideshow"><img src="${slide.image.url}" loading="lazy" class="lazyload" /></figure> </div>`
          })

          const prevHtml = prevSlides.images.map((slide, index) => {
            return `<div class="slideshow-slide swiper-slide" data-uid="${slide.uid}" data-index="${index}"><figure class="image image-slideshow"><img src="${slide.image.url}" loading="lazy" class="lazyload" /></figure> </div>`
          })

          const reversed = prevHtml.reverse()

          this.$swiper.appendSlide(nextHtml)
          this.$swiper.prependSlide(reversed)
        }

        // this.activeIndex = nextIndex
      } else {
        // on transition end
        const prevSlide = this.$swiper.slides[this.$swiper.previousIndex]
        const currentSlide = this.$swiper.slides[this.$swiper.activeIndex]
        const currentUid = currentSlide.dataset.uid
        const prevUid = prevSlide.dataset.uid
        const currentIndex = currentSlide.dataset.index

        if (direction === 'next') {
          if (currentUid !== prevUid && parseInt(currentIndex) === 0) {
            this.activeIndex += 1
          }

          if (
            (currentUid === prevUid &&
              this.$swiper.activeIndex === this.$swiper.slides.length - 1) ||
            (this.allSlides[this.activeIndex].images.length === 1 &&
              this.$swiper.activeIndex === this.$swiper.slides.length - 1)
          ) {
            console.log('append slides')

            const newSlides = this.allSlides[this.activeIndex + 1]

            if (newSlides !== undefined) {
              // Generate html
              const newHtml = newSlides.images.map((slide, index) => {
                return `<div class="slideshow-slide swiper-slide" data-uid="${slide.uid}" data-index="${index}"><figure class="image image-slideshow"><img src="${slide.image.url}" loading="lazy" class="lazyload" /></figure> </div>`
              })

              // Add slides
              this.$swiper.appendSlide(newHtml)
            }
          }
        } else {
          if (
            currentSlide.dataset.uid !== prevSlide.dataset.uid &&
            parseInt(currentIndex) ===
              this.allSlides[this.activeIndex - 1].images.length - 1
          ) {
            this.activeIndex -= 1
          }

          if (this.$swiper.activeIndex === 0) {
            console.log('prepend slides')

            const newSlides = this.allSlides[this.activeIndex - 1]

            if (newSlides !== undefined && this.activeIndex !== 0) {
              // Generate html
              const newHtml = newSlides.images.map((slide, index) => {
                return `<div class="slideshow-slide swiper-slide" data-uid="${slide.uid}" data-index="${index}"><figure class="image image-slideshow"><img src="${slide.image.url}" loading="lazy" class="lazyload" /></figure> </div>`
              })

              const reversed = newHtml.reverse()

              // Add slides
              this.$swiper.prependSlide(reversed)
            }
          }
        }
      }

      console.log(
        'activeIndex',
        this.$swiper.activeIndex,
        'previousIndex',
        this.$swiper.previousIndex,
        'active Entry images length',
        this.activeEntry[0].images.length,
        'swiper current length',
        this.$swiper.slides.length,
        'active entry index',
        this.activeIndex
      )
    },
    navigation(dir) {
      if (dir === 'prev') {
        this.$swiper.slidePrev()
      } else {
        this.$swiper.slideNext()

        // history.pushState({}, null, 'resist')
      }
    }
  }
}
</script>
