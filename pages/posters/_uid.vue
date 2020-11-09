<template>
  <page :mods="['index']">
    <div class="page-slideshow">
      <slideshow
        :slides="slides"
        :mods="['gallery']"
        :active-index="activeIndex"
        :options="{
          autoplay: true,
          loop: false,
          keyboard: {
            enabled: true,
            onlyInViewport: true
          },
          preloadImages: false,
          lazy: true
        }"
      />
    </div>
  </page>
</template>

<script>
export default {
  async asyncData({ $prismic, error, store, params }) {
    const uid = params.uid
    const data = store.state.ui.original_content

    // const doc = await store.state.ui.original_content.filter(
    //   (entry) => entry.uid === uid
    // )

    // const prevIndex = content[0].index - 1
    // // const nextIndex = content[0].index + 1

    // const prevEntry = data
    //   .map((e) => {
    //     return e
    //   })
    //   .indexOf(prevIndex)

    // content.concat({ entry: prevEntry, ix: prevIndex })
    // content.push({ entry: data[nextIndex], ix: nextIndex })

    // const slides = data.map((entry) => {
    //   return entry.images.map((img) => {
    //     return {
    //       slide: img
    //     }
    //   })
    // })
    const slides = []

    for (let i = 0; i < data.length; i++) {
      const entry = data[i]
      let active = false

      if (entry.uid === uid) {
        active = true
      }

      for (let j = 0; j < entry.images.length; j++) {
        const img = entry.images[j]
        const activeSlide = j === 0 ? active : false
        slides.push({ image: img, id: entry.uid + j, activeSlide })
      }
    }

    let activeIndex
    await slides.some(function(entry, i) {
      if (entry.activeSlide) {
        activeIndex = i
        return true
      }
    })

    if (data.length) {
      return { slides, activeIndex }
    } else {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  computed: {}
}
</script>
