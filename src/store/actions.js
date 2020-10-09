const actions = {
  setOffsetY({ commit }, offsetY) {
    return commit('SET_OFFSETY', offsetY)
  },
  setDevice({ commit }, device) {
    return commit('SET_DEVICE', device)
  },
  setNavBarVisible({ commit }, navBavVisible) {
    return commit('SET_NAVBAR_VISIBLE', navBavVisible)
  },
  setFullPageVisible({ commit }, fullPageVisible) {
    return commit('SET_FULL_PAGE_VISIBLE', fullPageVisible)
  }
}

export default actions
