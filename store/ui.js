const defaultState = {
  loaderStatus: true,
  sortBy: {},
  content: [],
  original_content: [],
  hideInfoFromPage: false,
  showInfo: false,
  globals: null,
  slideShowInfo: false
}

export const state = () => defaultState

export const actions = {
  async loadEntries({ commit }, context) {
    const docs = await getPages(context)

    // const docs = data[0].concat(data[1])

    if (docs.length) {
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
          description: doc.data?.description
            ? context.$prismic.asHtml(doc.data.description)
            : '',
          press: doc.data?.press ? doc.data.press : '',
          width: doc.data?.width ? doc.data.width : '',
          height: doc.data?.height ? doc.data.height : '',
          country_code: doc.data?.country_code ? doc.data.country_code : '',
          tag: doc.data?.tag ? doc.data.tag : '',
          list_no: doc.data?.list_number ? doc.data.list_number : '',
          poster_size: doc.data?.musaic_image_size
            ? doc.data.musaic_image_size
            : '',
          images: images.length ? images : []
        }
      })

      commit('entries', content)
    }
  },
  async loadGlobals({ commit }, context) {
    const globals = await context.$prismic.api.getSingle('globals')

    if (globals) {
      const content = {
        about_text: globals.data?.about_text
          ? context.$prismic.asHtml(globals.data.about_text)
          : '',
        information: globals.data?.information
          ? context.$prismic.asHtml(globals.data.information)
          : ''
      }

      commit('setGlobals', content)
    }
  },
  sortContent({ commit }, sortBy) {
    commit('sortContent', sortBy)
  }
}

export const mutations = {
  hideInfoFromPage(state, payload) {
    state.hideInfoFromPage = payload
  },
  activateSlideshowInfo(state, payload) {
    state.slideShowInfo = payload
  },
  setLoaderStatus(state, payload) {
    state.loaderStatus = payload
  },
  infoState(state, payload) {
    state.showInfo = payload
  },
  sort(state, payload) {
    state.sortBy = { sortBy: payload[0], direction: payload[1] }
  },
  setGlobals(state, data) {
    state.globals = data
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

const getPages = async (context) => {
  // const data = []
  // let pageNum = 1
  // let lastResult = []

  // do {
  //   const resp = await context.$prismic.api.query(
  //     context.$prismic.predicates.at('document.type', 'artists'),
  //     {
  //       pageSize: 100,
  //       page: pageNum
  //     }
  //   )
  //   lastResult = resp

  //   data.push(resp.results)

  //   pageNum++
  // } while (lastResult.next_page !== null)

  const resp = await context.$prismic.api.query(
    context.$prismic.predicates.at('document.type', 'artists'),
    {
      pageSize: 100
      // page: pageNum
    }
  )

  return resp.results
}
