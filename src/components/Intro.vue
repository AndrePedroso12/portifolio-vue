<template>
  <div class="splash-screen">
    <img class="logo" src="/src/assets/images/logo_full.svg" />
  </div>
  <div class="splash-screen_shadow-black"></div>
  <div class="splash-screen_shadow-white"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.splash-screen {
  z-index: 9;
  background-color: var(--primary);
  opacity: 1;
  background-image: url(src/assets/images/bg-intro.png);
  animation-delay: 1s;
  &_shadow-black {
    z-index: 8;
    background: var(--white);
    animation-delay: 1.2s !important;
  }

  &_shadow-white {
    z-index: 7;
    background: var(--black);
    animation-delay: 1.4s !important;
  }
  &,
  &_shadow-black,
  &_shadow-white {
    bottom: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) 1s both;
  }
}

.logo {
  animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) forwards,
    slide-out-blurred-left 1s ease-in 1.5s forwards;
  top: auto;
  position: absolute;
  width: 50%;
  top: 38%;
  left: 24%;
  @media (max-width: 768px) {
    bottom: 50%;
    width: 80%;
    right: 9%;
    left: auto;
  }
}

@-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

@-webkit-keyframes slide-out-blurred-left {
  0% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
    transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(-1000px) scaleX(2) scaleY(0.2);
    transform: translateX(-1000px) scaleX(2) scaleY(0.2);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
}
@keyframes slide-out-blurred-left {
  0% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
    transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(-1000px) scaleX(2) scaleY(0.2);
    transform: translateX(-1000px) scaleX(2) scaleY(0.2);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
}

@-webkit-keyframes slide-out-left {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
@keyframes slide-out-left {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>
