<template>
  <div 
    class="main"
    ref="main"
    @mousemove="onMouseMove"
  >
    <scene-loader ref="loader"></scene-loader>
    <mask-page></mask-page>
    <full-page></full-page>
    <nav-bar></nav-bar>
    <mobile-menu></mobile-menu>
  </div>
</template>

<script>
import SceneLoader from "../components/SceneLoader"
import NavBar from "../components/NavBar"
import MobileMenu from "../components/MobileMenu"
import FullPage from "../components/FullPage"
import MaskPage from "../components/Mask"
import { pageMixin } from "../utils/mixin"
import variable from "@/assets/styles/transition.scss"
export default {
  name: "Home",
  mixins: [ pageMixin ],
  components: {
    SceneLoader,
    NavBar,
    MobileMenu,
    FullPage,
    MaskPage
  },
  computed: {
    maskAnimTime() {
      return parseFloat(variable.animationTime)
    }
  },
  methods: {
    onMouseMove(e) {
      if (this.$refs) {
        if (this.$refs.loader) {
          this.$refs.loader.$emit('rotateScene', e)
        }
      }
    }
  },
  mounted() {
    // 这段逻辑用来处理滚动切换 mask 和 fullpage 组件
    window.addEventListener('mousewheel', (e) => {
      // 当滚轮向下滚动并且 navBar 处于可见的时候
      if (e.deltaY > 0 && this.navBarVisible) {
        this.setNavBarVisible(false) 
        if (this.fullPageTimer) {
          clearTimeout(this.fullPageTimer)
        }
        this.fullPageTimer = setTimeout(() => {
          this.setFullPageVisible(true)
          // 由顶部向下时滚动条位置需要置顶
          window.scrollTo(0, 0)
        }, this.maskAnimTime * 1000)
      } 
      // 当滚轮向上滚动并且 navBar 不可见的时候
      else if (e.deltaY < 0 && !this.navBarVisible && window.pageYOffset === 0) {
        this.setNavBarVisible(true)
        if (this.maskTimer) {
          clearTimeout(this.maskTimer)
        }
        this.maskTimer = setTimeout(() => {
          this.setFullPageVisible(false)
        }, this.maskAnimTime * 1000)
      }
    })
    // 窗口尺寸变动触发
    window.addEventListener("resize", () => {
      if (this.$refs) {
        if (this.$refs.loader) {
          this.$refs.loader.$emit('resize')
        }
      }
      // 判断当前屏幕是用移动方案还是 PC 方案
      if (window.innerWidth < 650) {
        this.setDevice('mobile')
      } else {
        this.setDevice('pc')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/global";
  .main {
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
  }
</style>
