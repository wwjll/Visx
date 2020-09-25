<template>
  <div class="navBar">
      <div class="pc-menu" v-if="!mobileMenuVisible">
        <div class="icon-wrapper">
          <span class="icon-menu"></span>
        </div>
      </div>
      <div class="mobie-menu" v-if="mobileMenuVisible">
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
  </div>
</template>

<script>
import { pageMixin } from "../utils/mixin"
export default {
  name: 'NavBar',
  mixins: [ pageMixin ],
  computed: {
    mobileMenuVisible() {
      return this.device === 'mobile' ? true : false 
    }
  },
  data() {
    return {
      // mobileMenuVisible: false
    }
  },
  mounted() {
    
    
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/global";
  .navBar {
    width: 100%;
    height: 100%;
    .pc-menu {
      width: px2rem(200);
      display: flex;
      top: 0;
      right: 0;
      @include down;
      .icon-wrapper {
        width: 100%;
        height: 40%;
        font-size: 1.5rem;
        color: #ffffff;
        @include center;
      }
      position: absolute;
      width: 20%;
      height: 15%;
      background-color: red;
      margin: 0;
    }
    .mobie-menu {
      width: 100%;
      height: 100%;
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
  }

</style>