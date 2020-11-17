<style lang="scss" src="./share.scss"></style>
<template>
  <div class="share" :class="[`share-${network}`]">
    <ShareNetwork
      :network="network"
      :url="url"
      :title="title"
      :quote="description"
      :hashtags="tag"
    >
      <span v-if="network === 'facebook'"><facebook /></span>
      <span v-else><twitter /></span>
    </ShareNetwork>
  </div>
</template>

<script>
import facebook from '~/components/icons/facebook.svg?inline'
import twitter from '~/components/icons/twitter.svg?inline'
export default {
  components: { facebook, twitter },
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
