export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    await dispatch('ui/loadEntries', context)
  }
}
