const defaultState = {
  header: {
    menuOpen: false
  },
  isIdle: false,
  error: false
}

export const state = () => defaultState

export const actions = {}

export const mutations = {
  setMenuOpen(state, menuOpen) {
    state.header = { ...state.header, menuOpen }
  },
  setError(state, error) {
    state.error = error
  }
}
