<template>
  <a
    class="mouse-scroll"
    :class="{ cornered: props.cornered }"
    :href="'#' + [props?.target ? props?.target : '']"
  >
    <span class="mouse">
      <span class="mouse-movement"> </span>
    </span>
    <span class="mouse-message fadeIn">scroll</span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  target: string;
  cornered: boolean;
}>();
</script>

<style lang="scss" scoped>
@-webkit-keyframes scroll-ani {
  0% {
    opacity: 1;
    top: 29%;
  }
  15% {
    opacity: 1;
    top: 50%;
  }
  50% {
    opacity: 0;
    top: 50%;
  }
  100% {
    opacity: 0;
    top: 29%;
  }
}

@-moz-keyframes scroll-ani {
  0% {
    opacity: 1;
    top: 29%;
  }
  15% {
    opacity: 1;
    top: 50%;
  }
  50% {
    opacity: 0;
    top: 50%;
  }
  100% {
    opacity: 0;
    top: 29%;
  }
}

@keyframes scroll-ani {
  0% {
    opacity: 1;
    top: 29%;
  }
  15% {
    opacity: 1;
    top: 50%;
  }
  50% {
    opacity: 0;
    top: 50%;
  }
  100% {
    opacity: 0;
    top: 29%;
  }
}

// Mouse & Message Styles

// The Scroll Link
.mouse-scroll {
  display: inline-block;
  line-height: 18px;
  font-size: 13px;
  font-weight: normal;
  color: #7f8c8d;
  color: #fff;
  font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
  letter-spacing: 2px;
  margin-top: 10%;
  text-decoration: none;
  overflow: hidden;
  position: absolute;
  right: 50%;
  @media (max-width: 768px) {
    right: 43%;
  }

  // The Mouse
  .mouse {
    position: relative;
    display: block;
    width: 46px;
    height: 73px;
    margin: 0 auto 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 3px solid #fff;
    border-radius: 23px;

    // Scroll Indicator
    .mouse-movement {
      position: absolute;
      display: block;
      top: 29%;
      left: 50%;
      width: 8px;
      height: 8px;
      margin: -4px 0 0 -4px;
      background: #fff;
      border-radius: 50%;
      -webkit-animation: scroll-ani 4s linear infinite;
      -moz-animation: scroll-ani 4s linear infinite;
      animation: scroll-ani 4s linear infinite;
    }
  }

  // The Scroll Message
  .mouse-message {
    float: left;
    margin: 0 0 0 7px;
    padding: 0;
    -webkit-animation: scroll-ani 4s linear infinite;
    -moz-animation: scroll-ani 4s linear infinite;
    animation: scroll-ani 4s linear infinite;
  }

  &:hover {
    .mouse-message {
      margin-top: 0;
      opacity: 1;
    }
  }
}
.cornered {
  left: auto;
  right: 1rem;
  bottom: 1rem;
  @media (max-width: 768px) {
    right: 41%;
    bottom: auto;
    top: 10%;
  }
}
</style>
