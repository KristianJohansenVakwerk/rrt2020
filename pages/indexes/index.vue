<template>
  <page :mods="['index']">
    <div class="page-close"><nuxt-link to="/">Close</nuxt-link></div>
    <indexes :content="mod_content" />
  </page>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData({ $prismic, error, store }) {
    const documents = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'artists'),
      {
        pageSize: 100
      }
    )
    if (documents.results.length) {
      const docs = documents.results

      const content = docs.map((doc) => {
        const poster = doc.data.musaic_image

        const images = doc.data.body.map((slice) => {
          return slice.primary.image
        })

        images.unshift(poster)

        return {
          cat_no: doc.data?.cat_no ? doc.data.cat_no : '',
          title: doc.data?.title ? $prismic.asText(doc.data.title) : '',
          artist: doc.data?.artist_name ? doc.data.artist_name : '',
          press: doc.data?.press ? doc.data.press : '',
          width: doc.data?.width ? doc.data.width : '',
          height: doc.data?.height ? doc.data.height : '',
          country_code: doc.data?.country_code ? doc.data.country_code : '',
          tag: doc.data?.tag ? doc.data.tag : '',
          images: images.length ? images : []
        }
      })

      store.commit('ui/entries', content)
    } else {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  computed: mapState({
    mod_content: (state) => state.ui.content,
    sort: (state) => state.ui.sortBy
  }),
  watch: {
    sort(newValue, oldValue) {
      if (newValue !== '') {
        this.sortIndex(newValue)
      }
    }
  },
  methods: {
    sortIndex(obj) {
      this.$store.commit('ui/sortContent', [obj.sortBy, obj.direction])
    }
  }
}
</script>

<style lang="scss"></style>
