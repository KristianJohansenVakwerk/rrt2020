<style lang="scss" src="./share.scss"></style>
<template>
  <div class="share">
    <ShareNetwork
      :network="network"
      :url="url"
      :title="title"
      :quote="description"
      :hashtags="tag"
    >
      <span :class="`icon icon-${network}`">{{ network }}</span>
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    e: {
      type: [Object],
      default: () => {}
    },
    type: {
      type: [String],
      default: () => ''
    },
    network: {
      type: [String],
      default: () => ''
    }
  },
  data() {
    return {}
  },
  computed: {
    title() {
      return this.e.title
    },
    tag() {
      return this.e.tag.replace('#', '')
    },
    description() {
      return `RTT 2020 is exhibition blah blah`
    },
    url() {
      if (this.type === 'slideshow') {
        return `https://lucid-bardeen-23f185.netlify.app/posters/${this.e.uid}`
      } else {
        return 'https://lucid-bardeen-23f185.netlify.app/'
      }
    }
  },
  methods: {}
}
</script>
