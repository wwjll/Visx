<template>
    <div 
        class="container"
        ref="container"
    >
    </div>
</template>

<script>
import * as THREE from "three"
import * as TWEEN from "tween"
import { OBJLoader, MTLLoader } from "three-obj-mtl-loader"
const OrbitControls = require('three-orbit-controls')(THREE)
import { objPath, mtlPath, texturePath, initialCameraPositionX,
    initialCameraPositionY, initialCameraPositionZ
} from "../utils/contants"
import { pageMixin } from "../utils/mixin"
export default {
    name: "SceneLoader",
    mixins: [ pageMixin ],
    methods:{
      initRenderer() {
          const container = this.$refs.container
          this.renderer = new THREE.WebGLRenderer({antialias: true})
          this.renderer.setSize(this.width, this.height)
          this.renderer.setClearColor(0x333333, 1.0)
          container.appendChild(this.renderer.domElement)
      },
      initSene() {
          this.scene = new THREE.Scene()
          this.axes = new THREE.AxesHelper(20);
          this.scene.add(this.axes);
      },
      initCamera() {
          this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000);
          this.camera.lookAt(0, 0, 0)
          this.camera.position.set(initialCameraPositionX, initialCameraPositionY, initialCameraPositionZ);
          //正方向
          this.camera.up.set(0, 1, 0);
          this.camera.lookAt(new THREE.Vector3(0, 0, 0));
          //视角控制
          this.controller = new OrbitControls(this.camera, this.renderer.domElement);
          //设置控制点
          this.controller.target = new THREE.Vector3(0, 0, 0);
          this.controller.autoRotate = true;
          // 
          this.rad = 0 
      },
      initLight() {
          this.light = new THREE.AmbientLight(0xfefefe, 1.0)
          this.scene.add(this.light)
      },
      initLoader() {
          this.mtlLoader = new MTLLoader()
          this.objLoader = new OBJLoader()
          function objLoaderOnProgress(p) {
              // console.log(p)
          }
          function objLoaderOnError(err) {
              // console.log(err)
          }
          function mtlLoaderOnProgress(p) {
              // console.log(p)
          }
          function mtlLoaderOnError(err) {
              // console.log(err)
          }
          this.mtlLoader.setCrossOrigin("Anonymous")
          this.mtlLoader.setTexturePath(texturePath)
          this.mtlLoader.load(mtlPath, (materials) => {
              materials.preload()
              this.objLoader.setMaterials(materials)
              this.objLoader.load(objPath, (object) => {
                  this.scene.add(object)
              }, objLoaderOnProgress, objLoaderOnError)
          }, mtlLoaderOnProgress, mtlLoaderOnError)
      },
      render() {
          if (this.renderer) {
              this.renderer.clear()    
          }
          this.renderer.render(this.scene, this.camera)
          this.frameAnim = window.requestAnimationFrame(this.render.bind(this))
      },
      init() {
          this.width = window.innerWidth
          this.height = window.innerHeight
          this.initRenderer()
          this.initSene()
          this.initCamera()
          this.initLight()
          this.initLoader()
          this.initTween()
          this.render()
          // this.introAnim()
          window.scene = this.scene
      },
      initTween() {
        this.introTween = new TWEEN.Tween(this.scene.position)
        this.introTween.to({x : 0, y : 0, z : -200 }, 5000)
        this.introTween.easing(TWEEN.Easing.Quadratic.In);
        this.initTween.onUpdate = (value) => {
          // this.scene.rotateY(value)
          console.log(this.scene.rotation.y)
        }
        this.introTween.start()
      },
      introAnim() {
        window.requestAnimationFrame(this.introAnim)
        TWEEN.update()
      }
    },
    beforeDestroy() {
        this.renderer = null
        this.scene = null
        this.camera = null
        window.cancelAnimationFrame(this.frameAnim)
    },
    mounted() {
        console.log(this.width, this.height)
        this.init()
        this.$on("resize", () => {
            this.$nextTick(() => {
                this.$refs.container.style.this.width = this.width
                // 窗口大小改变后需要重置场景中相机 aspect(长宽比) 并重置相应画布大小
                this.camera.aspect = this.width / this.height
                this.camera.updateProjectionMatrix()
                this.renderer.setSize(window.innerWidth, this.height)
            })
        })
        this.$on("rotateScene", (event) => {
          if (this.curEvent) {
            this.prevEvent = this.curEvent
          }
          this.curEvent = event
          if (!this.prevEvent) return
          let ratio = event.clientX / document.body.clientWidth 
          ratio = this.curEvent.clientX - this.prevEvent.clientX < 0 ? -ratio : ratio        
          if (this.rotateFrame) {
            window.cancelAnimationFrame(this.rotateFrame)  
          } 
          this.rotateY(Math.PI/6 * ratio, this.scene)
        })
    }
}
</script>

<style lang='scss' scoped>
@import "../assets/styles/global";
  .container {
    width: 100vw;
    height: 100%;
    background: blue;
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: 0;
  }
</style>