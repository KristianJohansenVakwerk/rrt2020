<template>
  <page :mods="['index']">
    <div class="page-slideshow">
      <slideshow
        :slides="slides"
        :all-slides="allSlides"
        :uid="uid"
        :mods="['gallery']"
        :options="{
          autoplay: true,
          loop: false,
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: '25%',
          speed: 0,
          keyboard: {
            enabled: true,
            onlyInViewport: true
          },
          preloadImages: false
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

    const activePoster = await data.filter((entry) => entry.uid === uid)

    const slides = activePoster[0].images.map((img) => {
      return { image: img }
    })

    const allSlides = []

    for (let i = 0; i < data.length; i++) {
      const entry = data[i]
      const images = []

      for (let j = 0; j < entry.images.length; j++) {
        const img = entry.images[j]

        images.push({ image: img, uid: entry.uid })
      }

      allSlides.push({ index: i, uid: entry.uid, images, entry })
    }

    if (data.length) {
      return { slides, allSlides, uid }
    } else {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  computed: {}
}
</script>
