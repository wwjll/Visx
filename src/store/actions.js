const actions = {
    setOffsetY ({ commit }, offsetY) {
        return commit('SET_OFFSETY', offsetY)
    },
    setDevice ({ commit }, device) {
        return commit('SET_DEVICE', device)
    },
    setDisplayWidth({ commit }, displayWidth) {
        return commit('SET_DISPLAY_WIDTH', displayWidth)
    },
}

export default actions