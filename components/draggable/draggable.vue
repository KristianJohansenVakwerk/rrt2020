<style lang="scss" src="./draggable.scss"></style>
<template>
  <div class="draggable">
    <div class="draggable-bounds">
      <div class="drag">
        <div v-for="(entry, index) in computedContent" :key="index">
          <base-image
            :mods="['grid']"
            :img="entry.primary.image"
            :sizes="'(min-width: 600px) 480px, 920px'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Draggable, InertiaPlugin } from 'gsap/all'

if (process.client) {
  gsap.registerPlugin(Draggable)
  gsap.registerPlugin(InertiaPlugin)
}

export default {
  components: {},
  props: {
    content: {
      type: [Array],
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {
    computedContent() {
      return this.content
    }
  },
  mounted() {
    Draggable.create('.drag', {
      type: 'x,y',
      bounds: '.draggable',
      edgeResistance: 0.65,
      inertia: true,
      onDrag: () => {}
    })
  },
  methods: {}
}
</script>
