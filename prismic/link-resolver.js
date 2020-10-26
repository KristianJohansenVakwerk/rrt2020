// https://prismic.io/docs/javascript/beyond-the-api/link-resolving
export default function(doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/'
  }

  if (doc.uid === 'store-locator') {
    return '/store-locator'
  }

  if (doc.uid === 'products') {
    return '/products'
  }

  if (doc.type === 'page') {
    return '/' + doc.uid
  }

  if (doc.type === 'product') {
    return '/products/' + doc.uid
  }

  if (doc.type === 'designer') {
    return '/designers/' + doc.uid
  }

  if (doc.type === 'news') {
    return '/journal'
  }

  if (doc.type === 'press_images') {
    return '/newsroom/press-images/' + doc.uid
  }

  if (doc.type === 'press_releases') {
    return '/newsroom/press-releases/' + doc.uid
  }

  if (doc.type === 'store_type') {
    return '/distribution/' + doc.uid
  }

  return '/'
}
