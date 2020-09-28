<template> 
    <div class="navBar">
      <transition name="slide-up">
        <div class="pc-menu" v-if="show">
          <div class="icon-wrapper">
            <span class="icon-menu"></span>
          </div>
        </div>
    </transition>     
  </div>
</template>

<script>
import { pageMixin } from "../utils/mixin"
export default {
  name: 'NavBar',
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
  .navBar {
    width: 100vw;
    height: 100%;
    .pc-menu {
      position: fixed;
      width: px2rem(180);
      height: px2rem(143);
      top: 0;
      right: 0;
      background-color: red;
      @include center;
      .icon-wrapper {
        font-size: px2rem(40);
        color: #ffffff;
        @include center;
      }
    }
  
  }

</style>