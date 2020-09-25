<template>
  <div class="main">
    <scene-loader ref="loader"></scene-loader>
    <nav-bar/>
    <div class="page1">

    </div>
  </div>
</template>

<script>
import SceneLoader from "../components/SceneLoader"
import NavBar from "../components/NavBar"
import { pageMixin } from "../utils/mixin"
export default {
  name: "Home",
  mixins: [ pageMixin ],
  components: {
    SceneLoader,
    NavBar
  },
  methods: {
    // 1 - 鼠标进入
    // 2 - 鼠标进入后的移动
    // 3 - 鼠标从移动状态松手
    // 4 - 鼠标还原 (鼠标在遮罩层上但是什么都没做)
    onMouseEnd(e) {
      if (this.mouseState === 2) {
        this.setOffsetY(0)
        this.firstOffsetY = null
        this.mouseState = 3
      } else {
        this.mouseState = 4
      }
      const time = e.timeStamp - this.mouseStartTime
      if (time < 100) {
        // 这里是鼠标点击左键时有可能带有轻微的移动，这种情况要被视为还原状态，优化体验
        this.mouseState = 4
      }
      e.preventDefault()
      e.stopPropagation()
    },
    onMouseMove(e) {
      if (this.mouseState === 1) {
        this.mouseState = 2
      } else if (this.mouseState === 2) {
        let offsetY = 0
        if (this.firstOffsetY) {
          offsetY = e.clientY - this.firstOffsetY
          this.setOffsetY(offsetY)
        } else {
          this.firstOffsetY = e.clientY
        }
      }

      e.preventDefault()
      e.stopPropagation()
    },
    onMouseEnter(e) {
      this.mouseState = 1
      this.mouseStartTime = e.timeStamp
      e.preventDefault()
      e.stopPropagation()
    }
  },
  mounted() {
    // window.addEventListener('mousewheel', (e) => {
    //   console.log(document.body.clientHeight, window.pageYOffset)
    // })
    window.addEventListener("resize", () => {
      // 重置 canvas 尺寸
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
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .page1 {
    width: 100%;
    height: 100%;
    background-color: yellow;
  }
</style>
