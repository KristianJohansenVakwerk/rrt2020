<template>
  <div
    class="cols"
    :class="[index === activeRow ? 'expanded' : '']"
    @click="expandRow(index, showThumbs)"
  >
    <span class="col col-1" v-html="`${e.cat_no}`" />
    <span class="col col-2 col-artists"><span v-html="e.artist"/></span>
    <span class="col col-3 col-press"><span v-html="e.press"/></span>
    <span class="col col-4 col-title">
      <span v-html="e.title" />
    </span>
    <span
      class="col col-5 col-dimensions"
      v-html="`${e.width} x ${e.height} cm`"
    />
    <span class="col col-6 col-country_code" v-html="e.country_code" />
    <span class="col col-7 col-tag" v-html="e.tag" />
    <span v-if="showThumbs" class="col col-8 col-thumbs">
      <span v-for="(i, key) in e.images" :key="key">
        <base-image
          :mods="['thumb']"
          :img="i"
          :sizes="'(min-width: 600px) 480px, 480px'"
        />
      </span>
    </span>
    <span v-else class="col col-8 col-readMore">
      <span
        @click="activateSlideInfo"
        v-html="showInfo ? '[Read Less]' : '[Read More]'"
      />
    </span>

    <span
      :ref="`images-${index}`"
      class="col col-full"
      :style="[
        index === activeRow ? { 'max-height': `${activeHeight}px` } : {}
      ]"
    >
      <div class="col-container">
        <span class="col-text" v-html="e.description" />
        <div class="images">
          <div v-for="(i, key) in e.images" :key="key">
            <base-image
              :mods="['index']"
              :img="i"
              :sizes="'(min-width: 600px) 920px, 1280ox'"
            />
          </div>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: {
    e: {
      type: [Object],
      default: () => []
    },
    index: {
      type: [Number],
      default: () => 0
    },
    activeRow: {
      type: [Number],
      default: () => -1
    },
    showThumbs: {
      type: [Boolean],
      default: () => true
    }
  },
  data() {
    return {
      activeIndex: -1,
      activeHeight: 0,
      slideshowInfo: false
    }
  },
  computed: {
    computedMods() {
      if (Array.isArray(this.mods)) {
        return this.mods.map((i) => {
          return ` page-${i}`
        })
      } else {
        return `page-${this.mods}`
      }
    },
    ...mapState({
      showInfo: (state) => state.ui.slideShowInfo
    })
  },
  mounted() {},
  methods: {
    activateSlideInfo() {
      this.slideshowInfo = !this.slideshowInfo
      this.$store.commit('ui/activateSlideshowInfo', this.slideshowInfo)
    },
    expandRow(index, checkState) {
      if (checkState) {
        this.activeIndex = index

        const activeCols = this.$refs[`images-${index}`]
        const container = activeCols.getElementsByClassName('col-container')
        const containerRect = container[0].getBoundingClientRect()
        const containerH = containerRect.height

        this.activeHeight = Math.round(containerH + 100)

        this.$parent.updateActive(index)
      }
    }
  }
}
</script>
