<template>
  <div class="cols">
    <span class="col col-1" v-html="e.cat_no" />
    <span class="col col-2" v-html="e.artist" />
    <span class="col col-3" v-html="e.press" />
    <span class="col col-4" v-html="e.title" />
    <span class="col col-5" v-html="`${e.width} cm, ${e.height} cm`" />
    <span class="col col-6" v-html="e.country_code" />
    <span class="col col-7" v-html="e.tag" />
    <span class="col col-8">
      <span v-for="(i, key) in e.images" :key="key">
        <base-image
          :mods="['thumb']"
          :img="i"
          :sizes="'(min-width: 600px) 480px, 480px'"
        />
      </span>
    </span>

    <span class="col col-full">
      <div class="images">
        <div v-for="(i, key) in e.images" :key="key">
          <base-image
            :mods="['index']"
            :img="i"
            :sizes="'(min-width: 600px) 920px, 1280ox'"
          />
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    e: {
      type: [Object],
      default: () => []
    }
  },
  data() {
    return {}
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
    }
  },
  methods: {}
}
</script>
