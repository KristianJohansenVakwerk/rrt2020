export const getPageHead = (document, $prismic) => {
  document = document || { data: {} }
  const seo = {
    title: document.title || 'RTT 2020',
    description:
      document.description || 'RTT 2020 is an exhibition that blah blah'
  }
  const og = {
    title: document.title || 'RTT 2020',
    description:
      document.description || 'RTT 2020 is an exhibition that blah blah',
    image: document.images[0]?.url
  }

  return {
    title: seo.title,
    meta: [
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
