<template>
    <transition name="mask-slide-up">
        <div class="mask-page" v-if="this.navBarVisible">
            <div class="content-wrapper1">Hello Dynamic!</div>
            <div class="content-wrapper2">Good</div>
        </div>
    </transition>
</template>

<script>
import { pageMixin } from "../utils/mixin"
export default {
    mixins: [ pageMixin ],
    name: "MaskPage",
}
</script>

<style lang="scss">
@import "../assets/styles/global";
.mask-page{
    position: relative;
    display: block;
    width: 100vw;
    height: 150vw;
    box-sizing: border-box;
    .content-wrapper1 {
        height: 75%;
        color: wheat;
        top: px2rem(50);
        line-height: px2rem(50);
        font-size: px2rem(50);
        @include center;
    }
    .content-wrapper2 {
        height: 75%;
        color:violet;
        line-height: px2rem(50);
        font-size: px2rem(50);
        @include center;
    }

}
</style>