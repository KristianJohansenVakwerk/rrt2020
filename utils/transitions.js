export const transitions = (name) => {
  console.log(name)
  switch (name) {
    case 'index':
      return { type: 'lightbox-down', mode: 'out-in' }
    case 'indexes':
      return { type: 'lightbox', mode: 'in-out' }

    default:
      return { type: 'fade', mode: '' }
  }
}
