<style lang="scss" src="./base-slideshow-image.scss"></style>
<template>
  <img
    ref="imgEle"
    :data-src="src"
    :data-srcset="srcSet"
    :width="width"
    :height="height"
    :alt="alt"
    class="image swiper-lazy"
  />
</template>

<script>
export default {
  props: {
    img: {
      type: [Object, Array],
      default: () => null
    },
    type: {
      type: [Boolean, String],
      default: () => ''
    },
    mods: {
      type: [Array],
      default: () => []
    },
    src: {
      type: [String],
      default: () => ''
    },
    sizes: {
      type: [String, Boolean],
      default: () => 'auto'
    },
    caption: {
      type: [String],
      default: () => ''
    }
  },
  data() {
    return {}
  },
  computed: {
    computedMods() {
      if (Array.isArray(this.mods)) {
        return this.mods.map((i) => {
          return ` image-${i}`
        })
      } else {
        return `image-${this.mods}`
      }
    },
    width() {
      return this.img?.dimensions?.width
    },
    height() {
      return this.img?.dimensions?.height
    },
    alt() {
      return this.img?.alt
    },
    srcSet() {
      const sizes = [480, 920, 1280, 1440, 1920]

      if (this.img !== null && typeof this.img === 'object') {
        let srcSet = ''

        if (this.img == null) return ''
        let url = this.img.url || ''
        url = url.replace(/\?.*$/, '')

        srcSet = sizes
          .map((s) => `${url}?auto=compress,format&w=${s} ${s}w, `)
          .join()

        return srcSet
      } else {
        return this.img
      }
    },
    url() {
      if (this.img == null) return ''
      return this.img.url
    },
    ratio() {
      if (this.img !== null && this.img?.dimensions) {
        const w = this.img.dimensions.width
        const h = this.img.dimensions.height

        if (this.type === 'ratio') {
          return { 'padding-top': (h / w) * 100 + '%' }
        } else {
          return null
        }
      } else {
        return ''
      }
    },
    imageCap() {
      // return this.$prismic.asText(this.caption)
      return this.caption
    }
  },
  mounted() {
    this.$refs.imgEle.src = this.img.url
  },
  methods: {}
}
</script>
