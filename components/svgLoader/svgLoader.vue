<style lang="scss" src="./svgLoader.scss"></style>
<template>
  <div id="svgsSplash" class="svgs">
    <div class="svg svg-1"><B /></div>

    <div class="svg svg-2">
      <Y />
    </div>
  </div>
</template>
<script>
import B from './B.svg?inline'
import Y from './Y.svg?inline'

export default {
  components: { B, Y },
  data() {
    return {
      aniDur: 500,
      easing: 'easeOutSine'
    }
  },
  computed: {},
  mounted() {
    const _this = this

    this.$anime({
      targets: '.svg-1 > svg > clipPath > .rect1',
      width: ['0', '100%'],
      duration: this.aniDur,
      delay: 1000,
      easing: this.easing,
      complete: () => {
        _this.$anime({
          targets: '.svg-2 > svg > clipPath > .rect2',
          width: ['0', '100%'],
          translateX: ['100%', '0%'],
          duration: this.aniDur,
          delay: 200,
          easing: this.easing,
          complete: () => {
            _this.$store.commit('ui/setLoaderStatus', false)
          }
        })
      }
    })
  },
  methods: {}
}
</script>
