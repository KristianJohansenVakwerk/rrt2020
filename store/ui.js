const defaultState = {
  loaderStatus: true,
  sortBy: {},
  content: [],
  original_content: []
}

export const state = () => defaultState

export const actions = {
  async loadEntries({ commit }, context) {
    const documents = await context.$prismic.api.query(
      context.$prismic.predicates.at('document.type', 'artists'),
      {
        pageSize: 100
      }
    )

    if (documents.results.length) {
      const docs = documents.results

      const content = docs.map((doc) => {
        const poster = doc.data.musaic_image

        const images = doc.data.body.map((slice) => {
          return slice.primary.image
        })

        images.unshift(poster)

        return {
          uid: doc.uid,
          cat_no: doc.data?.cat_no_letter ? doc.data.cat_no_letter : '',
          title: doc.data?.title ? context.$prismic.asText(doc.data.title) : '',
          artist: doc.data?.artist_name ? doc.data.artist_name : '',
          press: doc.data?.press ? doc.data.press : '',
          width: doc.data?.width ? doc.data.width : '',
          height: doc.data?.height ? doc.data.height : '',
          country_code: doc.data?.country_code ? doc.data.country_code : '',
          tag: doc.data?.tag ? doc.data.tag : '',
          list_no: doc.data?.list_number ? doc.data.list_number : '',
          images: images.length ? images : []
        }
      })

      commit('entries', content)
    }
  },
  sortContent({ commit }, sortBy) {
    commit('sortContent', sortBy)
  }
}

export const mutations = {
  setLoaderStatus(state, payload) {
    state.loaderStatus = payload
  },
  sort(state, payload) {
    state.sortBy = { sortBy: payload[0], direction: payload[1] }
  },
  entries(state, data) {
    const reA = /[^a-zA-Z]/g
    const reN = /[^0-9]/g

    data.sort(function(a, b) {
      const aA = a.cat_no.replace(reA, '')
      const bA = b.cat_no.replace(reA, '')

      if (aA === bA) {
        const aN = parseInt(a.cat_no.replace(reN, ''), 10)
        const bN = parseInt(b.cat_no.replace(reN, ''), 10)
        return aN === bN ? 0 : aN > bN ? 1 : -1
      } else {
        return aA > bA ? 1 : -1
      }
    })

    state.original_content = data
    state.content = data
  },
  sortContent(state, payload) {
    const sortBy = payload[0]
    const direction = payload[1]

    switch (sortBy) {
      default:
        state.content.sort((a, b) => {
          if (direction === 'desc') {
            if (a[sortBy] > b[sortBy]) {
              return -1
            }
            if (a[sortBy] < b[sortBy]) {
              return 1
            }
          } else {
            if (a[sortBy] < b[sortBy]) {
              return -1
            }
            if (a[sortBy] > b[sortBy]) {
              return 1
            }
          }
        })
    }
  }
}
