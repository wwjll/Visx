// TODO: 全屏切换组件
<template>
    <transition name="full-page-slide-up">
      <div class="fullpage" v-if="this.fullPageVisible">
        <div class="section1"></div>
        <div class="section2"></div>
        <div class="section3"></div>
        <slot/>
      </div>
    </transition>
</template>

<script>
import { pageMixin } from "../utils/mixin"

export default {
  name: "FullPage",
  mixins: [ pageMixin ],
  mounted() {}
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.fullpage {
  display: block;
  width: 100vw;
  height: 100%;
  opacity: 0.5;
  box-sizing: border-box;
  .section1 {
      width: 100%;
      height: 100%;
      background-color: yellow;
  }
  .section2 {
      width: 100%;
      height: 100%;
      background-color: green;
  }
  .section3 {
      width: 100%;
      height: 100%;
      background-color: blue;
  }
}

</style>