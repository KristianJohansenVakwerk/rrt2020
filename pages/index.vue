<template>
  <div>
    <draggable :content="content" />
    <!-- {{ artists }} -->
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    const documents = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'artists'),
      {
        pageSize: 100
      }
    )

    if (documents.results.length) {
      const docs = documents.results
      const content = []

      for (let i = 0; i < docs.length; i++) {
        const doc = docs[i]
        const poster = doc.data.musaic_image

        content.push(poster)
      }

      return { docs, content }
    } else {
      error({ statusCode: 404, message: 'Post not found' })
    }
  }
}
</script>

<style></style>
