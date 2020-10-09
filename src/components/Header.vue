/* eslint-disable vue/this-in-template */
<template>
  <div class="header">
    <div class="main-logo">
      <a href="" class="logo-link">
        <img src="/assets/images/main-logo.png" alt="">
      </a>
      <slot />
    </div>
    <transition name="mobile-nav-slide-down">
      <div v-if="this.navBarVisible" class="mobie-nav">
        <div class="mobile-prev-next">
          <a href="" class="prev">
            <img src="/assets/images/arrow-next-white.svg" alt="left">
          </a>
          <a href="" class="next">
            <img src="/assets/images/arrow-next-white.svg" alt="left">
          </a>
        </div>
        <div class="explore">
          <span class="explore-wrapper">
            <span class="text">Explore</span>
            <img src="/assets/images/arrow-down-red.svg" class="icon">
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// 该组件包含 logo 部分和移动导航栏部分
// main-logo && mobile-nav
import { pageMixin } from '../utils/mixin'

export default {
  name: 'ComplexHeader',
  mixins: [pageMixin]
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/global";
// 媒体查询没符合的时候生效
  img {
    display: none;
  }
  .text {
    display: none;
  }
  .header {
    position: absolute;
    .main-logo {
    position: fixed;
    top: 95px;
    left: 103px;
    .logo-link {
      position: relative;
      display: inline-block;
      img {
        width: 41px;
        height: 41px;
      }
    }
  }
  @media screen and (max-width: 899px) {
    .mobie-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 85px;
      width: 100%;
      display: flex;
      will-change: transform;
      .mobile-prev-next {
        max-width: 180px;
        display: flex;
        -webkit-box-flex: 1;
        flex: 1;
        background-color: #ff2b2b;
        .prev {
          width: 50%;
          transform: scaleX(-1);
          @include center;
          img {
            width: 31px;
            height: 26px;
            @include center;
            // margin-bottom: 20px;
          }
        }
        .next {
          width: 50%;
          @include center;
        img {
          width: 31px;
          height: 26px;
          // margin-bottom: 20px;
          @include center;
          }
        }
      }
      .explore {
        position: relative;
        background: #fff;
        -webkit-box-flex: 1;
        flex: 1;
        box-sizing: border-box;
        display: flex;
        padding: 24px 20px 24px 30px;
        .explore-wrapper {
          width: 100%;
          display: inline-block;
          text-align: center;
          .text {
            font-size: 1.25rem;
            color: #ff2b2b;
          }
          .icon {
            width: 26px;
            height: 28px;
            margin-left: 4em;
            transform: translateY(5px);
          }
        }
      }
    }
  }
}
</style>
