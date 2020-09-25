const page = {
    state: {
      offsetY: 0,
      device: 'mobile',
      displayWidth: window.innerWidth
    },
    mutations: {
      'SET_OFFSETY': (state, offsetY) => {
        state.offsetY = offsetY
      },
      'SET_DEVICE': (state, device) => {
        state.device = device
      },
      'SET_DISPLAY_WIDTH': (state, displayWidth) => {
        state.displayWidth = displayWidth
      }
    }
}

export default page