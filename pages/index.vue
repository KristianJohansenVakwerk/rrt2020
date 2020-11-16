<template>
  <div>
    <draggable :content="getPosters" />
    <!-- {{ artists }} -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    getPosters(state) {
      return state.ui.content
    }
  })
  // fetch({ store, params }) {
  //   if (typeof (store.state.products.byId[params.id]) === 'undefined') {
  //     return store.dispatch('products/loadProduct', {id: params.id});
  //   }
  // },
  // async asyncData({ $prismic, error }) {
  //   const documents = await $prismic.api.query(
  //     $prismic.predicates.at('document.type', 'artists'),
  //     {
  //       pageSize: 100
  //     }
  //   )

  //   if (documents.results.length) {
  //     const docs = documents.results
  //     const content = []

  //     for (let i = 0; i < docs.length; i++) {
  //       const doc = docs[i]
  //       const poster = doc.data.musaic_image
  //       const posterId = doc.uid

  //       content.push({ poster, posterId })
  //     }

  //     return { docs, content }
  //   } else {
  //     error({ statusCode: 404, message: 'Post not found' })
  //   }
  // }
}
</script>

<style></style>
