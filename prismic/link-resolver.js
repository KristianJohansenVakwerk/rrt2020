// https://prismic.io/docs/javascript/beyond-the-api/link-resolving
export default function(doc) {
  console.log(doc)
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.uid === 'indexes') {
    return '/indexes'
  }

  if (doc.type === 'posters') {
    return '/posters/' + doc.uid
  }

  if (doc.uid === 'info') {
    return '/info'
  }

  return '/'
}
