/* eslint-disable vue/this-in-template */
<template>
  <div class="mask-page">
    <transition name="mask-slide-up">
      <div v-if="this.navBarVisible" class="mask-up">
        <div class="explore-wrapper">
          <p class="explore-text">
            鸡你太美！鸡你太美！鸡你太美！鸡你太美！鸡你太美！鸡你太美！鸡你太美！鸡你太美！
          </p>
          <div class="explore-btn">
            <span class="explore-btn-content">
              <span class="text">Explore</span>
              <img src="/assets/images/arrow-down-white.svg" class="icon">
            </span>
          </div>
        </div>
      </div>
    </transition>
    <transition name="full-page-slide-up">
      <div v-if="this.fullPageVisible" class="fullpage">
        <div class="section1"></div>
        <div class="section2"></div>
        <div class="section3"></div>
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import { pageMixin } from '../utils/mixin'
export default {
  name: 'MaskPage',
  mixins: [pageMixin]
}
</script>

<style lang="scss">
  @import "../assets/styles/global";
  .mask-page {
    position: relative;
    width: 100%;
    height: 100%;
    .mask-up {
      position: fixed;
      display: block;
      width: 100vw;
      height: 100%;
      box-sizing: border-box;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      // 非移动端布局
      .explore-wrapper {
        position: absolute;
        left: 66.14583vw;
        bottom: 115px;
        bottom: 24%;
        width: 26.04167%;
        margin-bottom: -135px;
        .explore-text {
          color: #fff;
          font-size: 1.25rem;
          letter-spacing: .01em;
          line-height: 1.625em;
          margin-bottom: 100px;
          max-width: 21em;
          box-sizing: border-box;
        }
        .explore-btn {
          width: 210px;
          height: 76px;
          background-color: #ff2b2b;
          overflow: hidden;
          border-radius: 3px;
          .explore-btn-content {
            width: 100%;
            height: 100%;
            display: inline-block;
            text-align: center;
            @include center;
            .text {
              font-size: 1.25rem;
              color: #fff;
            }
            .icon {
              width: 26px;
              height: 28px;
              margin-left: 4em;
              color: #fff;
            }
          }
        }
      }
      //  移动端布局
      @media screen and (max-width: 900px) {
        .explore-wrapper {
          position: relative;
          right: auto;
          left: auto;
          bottom: auto;
          width: 66.66667%;
          margin-left: 16.66667%;
          margin-top: 85vh;
          margin-bottom: 150px;
          .text {
            font-size: 1rem;
            color: #fff;
          }
          .icon {
            width: 26px;
            height: 28px;
            margin-left: 4em;
            color: #fff;
          }
        }
      }
    }
    .fullpage {
      display: block;
      width: 100vw;
      opacity: 0.5;
      box-sizing: border-box;
      .section1 {
        width: 100%;
        height: 150vw;
        background-color: yellow;
      }
      .section2 {
        width: 100%;
        height: 150vw;
        background-color: green;
      }
      .section3 {
        width: 100%;
        height: 150vw;
        background-color: blue;
      }
    }
  }
</style>
