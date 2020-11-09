<style lang="scss" src="./draggable.scss"></style>
<template>
  <div class="draggable">
    <div id="drag" class="draggable-bounds">
      <div class="drag">
        <div v-for="(entry, index) in computedContent" :key="index">
          <nuxt-link :to="`posters/${entry.posterId}`">
            <base-image
              :mods="['grid']"
              :img="entry.poster"
              :sizes="'(min-width: 600px) 480px, 920px'"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Draggable, InertiaPlugin } from 'gsap/all'
// import normalizeWheel from 'normalize-wheel'

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
    return {
      PIXEL_STEP: 10,
      LINE_HEIGHT: 40,
      PAGE_HEIGHT: 800
    }
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

    // let zoom = 1

    // const normEvent = normalizeWheel.getEventType()

    // document.addEventListener(normEvent, (event) => {
    //   const normalized = normalizeWheel(event)

    //   zoom += normalized.spinX

    //   // if (zoom >= 0.25 || zoom <= 1) {
    //   drag.style.transform = `scale(${zoom}) translate(-50%,-50%)`
    //   // }

    //   console.log(zoom, normalized.pixelX, normalized.spinX)
    //   // console.log(normalized.pixelX, normalized.pixelY)
    // })
    const drag = document.getElementById('drag')
    let scale = 1

    document.addEventListener('mousewheel', function(e) {
      let delta = e.delta || e.wheelDelta
      let zoomOut

      if (delta === undefined) {
        // we are on firefox
        delta = e.detail
        zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0
        zoomOut = !zoomOut
      } else {
        zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0
      }
      // const touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX
      // const touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY

      if (zoomOut) {
        // we are zooming out
        scale -= 0.01

        // const offsetWidth = drag.offsetWidth
        // const offsetHeight = drag.offsetHeight
        // drag.style.cssText = `transform-origin: ${touchX}px ${touchY}px; transform: scale( ${scale})  translate(-50%, -50%) `
        gsap.to(drag, 0.2, { zoom: scale })
      } else {
        // we are zooming in
        scale = scale + 0.01

        // const offsetWidth = drag.offsetWidth
        // const offsetHeight = drag.offsetHeight
        // drag.style.cssText = `transform-origin: ${touchX}px ${touchY}px; transform: scale( ${scale} ) translate(-50%, -50%)`
        gsap.to(drag, 0.2, { zoom: scale })
        // drag.style.transformOrigin = `(${touchX}px, ${touchY}px)`
        // drag.style.transform = `scale( ${scale})`
      }
    })
  },
  methods: {}
}
</script>
