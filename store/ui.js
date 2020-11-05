const defaultState = {
  loaderStatus: true,
  sortBy: {},
  content: []
}

export const state = () => defaultState

export const actions = {
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
    data.sort((a, b) => {
      if (a.cat_no < b.cat_no) {
        return -1
      }
      if (a.cat_no > b.cat_no) {
        return 1
      }
    })

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
