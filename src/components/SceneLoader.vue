<template>
  <div ref="container" class="container"></div>
</template>

<script>
import * as THREE from 'three'
import * as TWEEN from 'tween'
import { OBJLoader, MTLLoader } from 'three-obj-mtl-loader'
const OrbitControls = require('three-orbit-controls')(THREE)
import { objPath, mtlPath, texturePath, initialCameraPositionX,
  initialCameraPositionY, initialCameraPositionZ
} from '../utils/contants'
import { pageMixin } from '../utils/mixin'
export default {
  name: 'SceneLoader',
  mixins: [pageMixin],
  beforeDestroy() {
    this.renderer = null
    this.scene = null
    this.camera = null
    window.cancelAnimationFrame(this.frameAnim)
    window.cancelAnimationFrame(this.introFrame)
  },
  mounted() {
    this.init()
    this.$on('resize', () => {
      this.$nextTick(() => {
        const width = window.innerWidth || document.body.clientWidth
        const height = window.innerHeight
        // 窗口大小改变后需要重置场景中相机 aspect(长宽比) 并重置相应画布大小
        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(width, height)
      })
    })
    this.$on('rotateScene', (event) => {
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
      this.rotateY(Math.PI / 6 * ratio, this.scene)
    })
  },
  methods: {
    initRenderer() {
      const container = this.$refs.container
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(this.width, this.height)
      this.renderer.setClearColor(0x333333, 1.0)
      container.appendChild(this.renderer.domElement)
    },
    initSene() {
      this.scene = new THREE.Scene()
      this.axes = new THREE.AxesHelper(20)
      this.scene.add(this.axes)
      // canvas 加载图片作为场景背景贴图
      const canvas = document.createElement('canvas')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const context = canvas.getContext('2d')
      const img = new Image()
      img.src = '/assets/images/loader-cross-white-2x.png'
      img.onload = () => {
        context.fillStyle = context.createPattern(img, 'repeat')
        context.fillRect(0, 0, window.innerWidth, window.innerHeight)
        // 注意图片加载完成执行canvas相关方法后，要更新一下纹理
        texture.needsUpdate = true
      }
      const texture = new THREE.Texture(canvas)
      this.scene.background = texture
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000)
      this.camera.lookAt(0, 0, 0)
      this.camera.position.set(initialCameraPositionX, initialCameraPositionY, initialCameraPositionZ)
      // 正方向
      this.camera.up.set(0, 1, 0)
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
      // 视角控制
      this.controller = new OrbitControls(this.camera, this.renderer.domElement)
      // 设置控制点
      this.controller.target = new THREE.Vector3(0, 0, 0)
      this.controller.autoRotate = true
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
      // eslint-disable-next-line handle-callback-err
      function objLoaderOnError(err) {
        // console.log(err)
      }
      function mtlLoaderOnProgress(p) {
        // console.log(p)
      }
      // eslint-disable-next-line handle-callback-err
      function mtlLoaderOnError(err) {
        // console.log(err)
      }
      this.mtlLoader.setCrossOrigin('Anonymous')
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
      this.render()
      this.initTween()
      this.introAnim()
      window.scene = this.scene
    },
    initTween() {
      this.tweenGo = new TWEEN.Tween({ x: 0, y: 100, z: 0 })
        .to({ x: 0, y: 0, z: 0 }, 3000)
        .easing(TWEEN.Easing.Quadratic.In)
        .onUpdate((t) => {
          this.scene.position.y = 100 - 100 * t
        })
        .start()
      // this.tweenBack = new TWEEN.Tween(this.scene.position)
      //   .to( { x : 0, y : 0, z : 0 }, 3000)
      //   .easing(TWEEN.Easing.Quadratic.Out)
      //   .onUpdate(() => {})
      //   .start()
      // this.tweenGo.chain(this.tweenBack)
      // this.tweenBack.chain(this.tweenGo)
    },
    introAnim() {
      // 目前 Tweenjs 似乎没有暂停/继续功能
      this.introFrame = window.requestAnimationFrame(this.introAnim)
      TWEEN.update()
    }
  }
}
</script>

<style lang="scss" scoped>
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
