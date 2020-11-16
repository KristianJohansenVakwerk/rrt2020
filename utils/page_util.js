export const getPageHead = (document, $prismic) => {
  document = document || { data: {} }
  const seo = {
    url: `https://lucid-bardeen-23f185.netlify.app/${document.uid}`,
    title: $prismic.asText(document.title) || 'RTT 2020',
    description:
      $prismic.asText(document.description) ||
      'RTT 2020 is an exhibition that blah blah'
  }
  const og = {
    title: document.title || 'RTT 2020',
    description:
      $prismic.asText(document.description) ||
      'RTT 2020 is an exhibition that blah blah',
    image: document.musaic_image?.url
  }

  return {
    title: seo.title,
    meta: [
      seo.url && {
        property: 'og:url',
        content: seo.url
      },
      seo.description && {
        hid: 'description',
        name: 'description',
        content: seo.description
      },
      og.title && {
        hid: 'og:title',
        property: 'og:title',
        content: og.title
      },
      og.description && {
        hid: 'og:description',
        property: 'og:description',
        content: og.description
      },
      og.image && {
        hid: 'og:image',
        property: 'og:image',
        content: og.image
      }
    ].filter(Boolean)
  }
}
