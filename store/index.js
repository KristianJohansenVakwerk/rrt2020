export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    console.log('nuxtserverinit')
    await dispatch('ui/loadEntries', context)
    await dispatch('ui/loadGlobals', context)
  }
}
