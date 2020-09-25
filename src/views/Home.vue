<template>
  <div class="main">
    <scene-loader></scene-loader>
    <!-- <full-page ref="fullpage" 
      :options="options" 
      id="fullpage"
      class="fullpage"
    >
      <div class="section" >
        <div class="content">
          SnXun Visx···
        </div>
      </div>
      <div class="section">
       <div class="content">
          SnXun Visx···
        </div>
      </div>
      <div class="section">
        <div class="content">
          SnXun Visx···
        </div>
      </div>
    </full-page> -->
</div>
</template>

<script>
import SceneLoader from "../components/SceneLoader"
import { pageMixin } from "../utils/mixin"
export default {
  name: "Home",
  mixins: [ pageMixin ],
  components: {
    SceneLoader
  },
  data() {
    return {
       options: {
        // licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#ffffff', '#ffffff', '#ffffff']
      },
      camera: [

      ]
    }
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
    window.addEventListener('mousewheel', (e) => {
      console.log(document.body.clientHeight, window.pageYOffset)
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
    // .fullpage {
    //   // transform: translate3d(0, 100%, 0)!important;
    //   .section {
    //     opacity: 0.5!important;
    //     .content {
    //       padding: px2rem(100);
    //       font-size: px2rem(200);
    //       color: rgb(160, 86, 160);
    //       text-align: center;
    //     }
    //   }  
    // }
  }
</style>
