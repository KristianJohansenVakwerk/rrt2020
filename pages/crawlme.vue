<template>
  <page :mods="['pages', 'default']" :title="'<h1>Pages</h1>'">
    <ul>
      <li v-for="item in results" :key="item.uid">
        <nuxt-link :to="`posters/${item.uid}`">{{
          $prismic.asText(item.data.title)
        }}</nuxt-link>
      </li>
    </ul>
  </page>
</template>
<script>
export default {
  async asyncData({ $prismic }) {
    const pages = await $prismic.api.query(
      [$prismic.predicates.at('document.type', 'artists')],
      {
        pageSize: 100
      }
    )
    return {
      results: pages?.results
    }
  },
  mounted() {
    console.log(this.results)
  }
}
</script>
