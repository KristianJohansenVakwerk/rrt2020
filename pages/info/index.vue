<template>
  <div>
    Test
  </div>
</template>

<script>
export default {
  // async asyncData({ $prismic, error }) {
  //   const documents = await $prismic.api.query(
  //     $prismic.predicates.at('document.type', 'artists'),
  //     {
  //       pageSize: 100
  //     }
  //   )
  //   if (documents.results.length) {
  //     const docs = documents.results
  //     let content = []
  //     for (let i = 0; i < docs.length; i++) {
  //       const doc = docs[i]
  //       const images = doc.data.body
  //       for (let j = 0; j < images.length; j++) {
  //         const image = images[j]
  //         image.uid = doc.uid
  //       }
  //       content = content.concat(images)
  //     }
  //     return { docs, content }
  //   } else {
  //     error({ statusCode: 404, message: 'Post not found' })
  //   }
  // }
}
</script>

<style></style>
