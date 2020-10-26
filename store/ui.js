const defaultState = {
  loaderStatus: true
}

export const state = () => defaultState

export const actions = {}

export const mutations = {
  setLoaderStatus(state, payload) {
    state.loaderStatus = payload
  }
}
