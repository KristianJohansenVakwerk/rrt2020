<style lang="scss" src="./draggable.scss"></style>
<template>
  <div class="draggable">
    <div class="draggable-bounds">
      <div class="drag">
        <span v-for="i in 2" :key="i">Draggable {{ i }}</span>
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
  data() {
    return {}
  },
  computed: {},
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
