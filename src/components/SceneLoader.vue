<template>
    <div 
        class="container"
        ref="container"
        @mousemove.left="onMouseMove"
    >
    </div>
</template>

<script>
import * as THREE from "three";
import { OBJLoader, MTLLoader } from "three-obj-mtl-loader"
// import { OrbitControls } from "three-orbit-controls"
const OrbitControls = require('three-orbit-controls')(THREE)
import { objPath, mtlPath, texturePath, initialCameraPositionX,
    initialCameraPositionY, initialCameraPositionZ
} from "../utils/contants"
export default {
    name: "SceneLoader",
    // watch: {
    //     offSetY() {
    //         if (this.offsetY > 0) {
    //             console.log(this.offSetY)
    //         } else {
    //             console.log(this.offSetY)
    //         }
    //     }
    // },
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
            var axes = new THREE.AxesHelper(20);
            this.scene.add(axes);
        },
        initCamera() {
            this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000);
            this.camera.lookAt(0, 0, 0)
            this.camera.position.set(initialCameraPositionX, initialCameraPositionY, initialCameraPositionZ);
            //正方向
            this.camera.up.set(0, 1, 0);
            this.camera.lookAt(new THREE.Vector3(0, 0, 0));
            //视角控制
            // this.controller = new OrbitControls(this.camera, this.renderer.domElement);
            //设置控制点
            // this.controller.target = new THREE.Vector3(0, 0, 0);
            // this.controller.autoRotate = true; 
        },
        initLight() {
            this.light = new THREE.AmbientLight(0xfefefe, 1.0)
            this.scene.add(this.light)
        },
        initLoader() {
            this.mtlLoader = new MTLLoader()
            this.objLoader = new OBJLoader()
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
                })
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
            this.width = window.innerWidth || document.body.clientWidth
            // this.width = document.body.clientWidth
            this.height = window.innerHeight
            //  this.width = document.body.clientWidth
            // this.height = document.body.clientHeight
            this.initRenderer()
            this.initSene()
            this.initCamera()
            this.initLight()
            this.initLoader()
            this.render()
        },
        onMouseMove(e) {
            let polar = e.clientX > window.innerWidth/2 ? 1 : -1
            let x = e.clientX/window.innerWidth * 50
            let y = e.clientY/window.innerHeight * 50
            // console.log(x, y)
            this.camera.position.set(initialCameraPositionX + x, initialCameraPositionY, initialCameraPositionZ - 2*x)
        }

    },
    beforeDestroy() {
        this.renderer = null
        this.scene = null
        this.camera = null
        window.cancelAnimationFrame(this.frameAnim)
    },
    mounted() {
        this.init()
    }
}
</script>

<style lang='scss' scoped>
    .container {
        width: 100%;
        height: 100%;
        background: blue;
        position: fixed;
        box-sizing: border-box;
        left: 0;
    }
</style>