const page = {
  state: {
    offsetY: 0,
    device: 'mobile',
    navBarVisible: true,
    fullPageVisible: false
  },
  mutations: {
    'SET_OFFSETY': (state, offsetY) => {
      state.offsetY = offsetY
    },
    'SET_DEVICE': (state, device) => {
      state.device = device
    },
    'SET_NAVBAR_VISIBLE': (state, navBarVisible) => {
      state.navBarVisible = navBarVisible
    },
    'SET_FULL_PAGE_VISIBLE': (state, fullPageVisible) => {
      state.fullPageVisible = fullPageVisible
    }
  }
}

export default page
