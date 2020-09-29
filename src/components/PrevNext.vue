<template> 
  <transition name="slide-up">
    <div class="prev-next" v-if="this.navBarVisible">
      <a href="" class="prev">
        <img src="/assets/images/arrow-next-white.svg" alt="left">
        </a>
      <a href="" class="next">
        <img src="/assets/images/arrow-next-white.svg" alt="right" >
      </a> 
    </div>
  </transition>    
</template>

<script>
import { pageMixin } from "../utils/mixin"
export default {
  name: 'PrevNext',
  mixins: [ pageMixin ],
  computed: {
    show() {
      let isPc = this.device === 'pc' ? true : false 
      return isPc && this.navBarVisible
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
// 媒体查询没符合的时候生效
.prev-next {
  position: absolute;
}
@media screen and (min-width: 900px) {
  .prev-next {
    position: absolute;
    background-color: #ff2b2b;
    width: 212px;
    height: 173px;
    top: 0;
    left: calc(100vw - 212px);
    will-change: transform;
    display: inline-block;
    .prev {
      position: absolute;
      transform: scaleX(-1);
      left: 44px;
      top: 90px;
      img {
        width: 31px;
        height: 26px;
      }
    }
    .next {
      position: absolute;
      right: 81px;
      top: 90px;
      img {
        width: 31px;
        height: 26px;
      } 
    }
  }
}
</style>