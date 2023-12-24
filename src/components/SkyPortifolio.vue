<template>
  <div class="parallax" ref="listEl">
    <div class="parallax__layer parallax__layer__0">
      <img src="/src/assets/images/parallax/mountBg.webp" />
    </div>
    <div class="parallax__layer parallax__layer__1">
      <img src="/src/assets/images/parallax/mountMg.webp" />
    </div>
    <div class="parallax__layer parallax__layer__2">
      <img src="/src/assets/images/parallax/cloud2.webp" />
    </div>
    <div class="parallax__layer parallax__layer__3">
      <img src="/src/assets/images/parallax/mountFg.webp" />
    </div>
    <div class="parallax__layer parallax__layer__4">
      <img src="/src/assets/images/parallax/cloud3.webp" />
    </div>
    <div class="parallax__layer parallax__layer__5">
      <p>Transformando<br />Ideias</p>
      <ScrollIcon :target="'projetos'" />
    </div>
    <div class="parallax__layer parallax__layer__6">
      <img src="/src/assets/images/parallax/cloud1.webp" />
    </div>

    <div class="parallax__cover">
      <div
        class="parallax__cover-text"
        v-motion-fade-visible
        :delay="500"
        style="transform: none"
      >
        <p id="projetos">Em projetos</p>
      </div>
      <slot name="text"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import ScrollIcon from "@/components/ScrollIcon.vue";

export default {
  name: "App",
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.parallax {
  perspective: 100px;
  height: 140vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(68, 143, 198);
  background: radial-gradient(
    circle,
    rgba(68, 143, 198, 1) 0%,
    rgba(33, 93, 145, 1) 100%
  );
  @media (max-width: 768px) {
    height: 100vh;
  }
  @media (min-height: 819px) and (min-width: 768px) {
    height: 155vh;
  }
  &__layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    & img,
    & p {
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    & p {
      color: white;
      left: 0;
      text-align: center;
      font-size: 6rem;
      right: auto;
      font-weight: 900;
      line-height: 0.9;
      bottom: 72%;
      text-transform: uppercase;
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }

  &__cover {
    background: #fff;
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: fit-content;
    z-index: 2;
    box-shadow: 0px -20px 20px 20px #fff;
    @media (min-height: 819px) and (min-width: 768px) {
      padding-bottom: 32rem;
    }

    & p {
      top: 0;
      background-attachment: fixed;
      position: relative;
      background-image: url("src/assets/images/parallax/cloud-mask.webp");
      // background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom center;
      background-attachment: fixed;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      left: 0%;
      text-align: center;
      font-size: 6rem;
      right: 50%;
      font-weight: 900;
      line-height: 0.9;
      bottom: 84%;
      text-transform: uppercase;
      padding: 5rem 0;
      @media (max-width: 768px) {
        font-size: xxx-large;
      }

      &::before {
        content: "Em projetos";
        color: var(--primary);
        position: absolute;
        z-index: -1;
        transition: opacity 0.3s ease; /* Add a transition effect for smooth opacity changes */
      }
    }
  }
}

.parallax__layer__0 {
  transform: translateZ(-300px) scale(4);
}

.parallax__layer__1 {
  transform: translateZ(-250px) scale(3.5);
}

.parallax__layer__2 {
  transform: translateZ(-200px) translateY(-32rem) scale(3);
  @media (max-width: 768px) {
    transform: translateZ(-200px) translateY(-97rem) scale(3);
  }
}

.parallax__layer__3 {
  transform: translateZ(-150px) scale(2.5);
}

.parallax__layer__4 {
  transform: translateZ(-100px) scale(2);
  @media (max-width: 768px) {
    transform: translateZ(-115px) translateY(-48rem) scale(3);
    z-index: -1;
  }
}

.parallax__layer__5 {
  transform: translateZ(-50px) scale(1.5);
  z-index: -1;
  position: sticky;
  top: 16rem;
  @media (max-width: 768px) {
    top: 3rem;
  }
}

.parallax__layer__6 {
  transform: translateZ(0px) scale(1);
}

@media (max-width: 768px) {
  .parallax__layer__0,
  .parallax__layer__1,
  .parallax__layer__3 {
    transform: translateZ(-200px) translateY(-54rem) scale(5);
  }
}
</style>
