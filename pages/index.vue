<template>
  <div>
    <draggable />
    <!-- {{ artists }} -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const artists = await $content('artists').fetch()

    if (artists.length) {
      return { artists }
    } else {
      error({ statusCode: 404, message: 'Post not found' })
    }
  }
}
</script>

<style></style>
