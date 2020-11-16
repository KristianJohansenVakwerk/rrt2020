// https://prismic.io/docs/javascript/beyond-the-api/link-resolving
export default function(doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.uid === 'indexes') {
    return '/indexes'
  }

  if (doc.type === 'artists') {
    return '/posters/' + doc.uid
  }

  if (doc.uid === 'info') {
    return '/info'
  }

  return '/'
}
