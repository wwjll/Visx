# visx

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### fix node_module
#### 1
如果运行代码，会报THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.的错
需要在 node_module > three-obj-mtl-loader > index.js中找到第543行并注释掉。在 545行重新定义loader
// var loader = THREE.Loader.Handlers.get( url )
var loader = manager.getHandler(url)
#### 2
如果运行代码控制台报大量 three.module.js?5a89:50050 THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute(). 警告, 需要在 node_module > three-obj-mtl-loader > index.js 中找到所有 .addAttribute() 并改成
.setAttribute()
