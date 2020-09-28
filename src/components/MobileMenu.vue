<template>
    <transition name="mobile-menu-slide-down">  
        <div class="mobie-menu" v-if="show">
            <div class="mobile-menu-left">
                <div class="icon-wrapper">
                    <span class="icon-more"></span>
                </div>
            </div>
            <div class="mobile-menu-right">
                <div class="icon-wrapper">
                    <span class="icon-down"></span>
                </div>
            </div>
        </div>
    </transition>  
</template>

<script>
import { pageMixin } from "../utils/mixin"

export default {
  name: 'MobileMenu',
  mixins: [ pageMixin ],
  computed: {
    show() {
      let isMobile = this.device === 'mobile' ? true : false 
      return isMobile && this.navBarVisible
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/global";
  .mobie-menu {
      width: 100vw;
      height: px2rem(40);
      position: fixed;
      bottom: 0;
      display: flex;
      .mobile-menu-left {
        width: 30%;
        height: 100%;
        background-color: red;
        @include center;
      }
      .mobile-menu-right {
        width: 70%;
        height: 100%;
        background-color: white;
        @include center;
      }
    }
</style>