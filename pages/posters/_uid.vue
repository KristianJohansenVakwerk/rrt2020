<template>
  <page :mods="['index']">
    <div class="page-slideshow">
      {{ images }}
      <!-- <slideshow
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
      /> -->
    </div>
  </page>
</template>

<script>
import { getPageHead } from '~/utils/page_util'

export default {
  async asyncData({ $prismic, store, params }) {
    // const uid = params.uid
    // const data = store.state.ui.original_content

    // const activePoster = await data.filter((entry) => entry.uid === uid)

    const doc = await $prismic.api.getByUID('artists', params.uid)

    const pageHead = getPageHead(doc.data, $prismic)

    const poster = doc.data.musaic_image
    // console.log(musaic_image)

    const images = doc.data.body.map((slice) => {
      return slice.primary.image
    })

    images.unshift(poster)

    // const slides = activePoster[0].images.map((img) => {
    //   return { image: img }
    // })

    // const allSlides = []

    // for (let i = 0; i < data.length; i++) {
    //   const entry = data[i]
    //   const images = []

    //   for (let j = 0; j < entry.images.length; j++) {
    //     const img = entry.images[j]

    //     images.push({ image: img, uid: entry.uid })
    //   }

    //   allSlides.push({ index: i, uid: entry.uid, images, entry })
    // }

    if (doc) {
      return { pageHead, images }
    }
  },
  computed: {},
  head() {
    return this.pageHead
  }
}
</script>
