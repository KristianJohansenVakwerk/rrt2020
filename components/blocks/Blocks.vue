<style lang="scss" src="./Blocks.scss"></style>
<template>
  <main class="grid" :class="[`Page--${pageId}`]">
    <template v-for="(block, key) in blocks">
      <ImageBlock :key="key" :block="block" />
    </template>
  </main>
</template>
<script>
import EditorialBlock from './editorial/EditorialBlock'
import ImageBlock from './image/ImageBlock'

export default {
  components: {
    ImageBlock,
    EditorialBlock
  },
  props: {
    pageId: {
      type: String,
      default: 'not-set'
    },
    blocks: {
      type: Array,
      default: null
    }
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
