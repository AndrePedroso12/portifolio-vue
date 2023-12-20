<template>
  <Lines />
  <div class="flex justify-end">
    <div class="overlay"></div>
    <div class="home-description">
      <p class="open-sans-font" v-motion-slide-right :delay="2100">
        Meu nome é André Luiz Pedroso, sou Desenvolvedor Front-End com mais de 8
        anos de experiência, concentrando-me principalmente no desenvolvimento
        de lojas online, websites empresariais e landing pages.
      </p>
      <router-link to="/sobre" custom v-slot="{ navigate }">
        <Button
          @click="navigate"
          role="link"
          title="Saiba Mais"
          :icon="'fa-arrow-right'"
          v-motion-slide-bottom
          :delay="2400"
        />
      </router-link>
    </div>
    <div class="headline-container">
      <div id="text-behind">Dev<br />Front-End</div>
      <div id="text-behind-blur">Dev<br />Front-End</div>
      <div id="text-front">Dev<br />Front-End</div>
    </div>

    <img class="logo" src="src/assets/images/logo_lines.svg" />
    <img class="picture" src="src/assets/images/dev_alone.png" />
    <div class="halo"></div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  left: -7rem;
  top: 2rem;
  width: 36rem;
  opacity: 10%;
  filter: drop-shadow(12px 12px 5px #ffff);
}
.picture {
  z-index: 1;
  left: 38%;
  bottom: 0;
  position: absolute;
  flex: 0 0 auto;
  width: 33.33333333%;
  @media (max-width: 768px) {
    left: 17%;
    position: absolute;
    width: 135%;
    max-width: none;
  }
}

.halo {
  content: "";
  -webkit-box-shadow: 0px 0px 34px 3px rgba(45, 255, 196, 0.43);
  -moz-box-shadow: 0px 0px 34px 3px rgba(45, 255, 196, 0.43);
  box-shadow: 0px 0px 34px 3px rgba(45, 255, 196, 0.43);
  border: 19px solid #00ffa8;
  width: 40vw;
  height: 40vw;
  border-radius: 100%;
  position: absolute;
  left: 32%;
  bottom: 8%;
  display: block;
  animation: text-flicker 3s linear infinite;
  @media (max-width: 768px) {
    box-shadow: 0px 0px 34px 3px rgba(45, 255, 196, 0.43);
    border: 2px solid #00ffa8;
    width: 80vw;
    height: 80vw;
    left: 5%;
    bottom: 9%;
  }
  &:after {
    content: "";
    -webkit-box-shadow: inset 0px 0px 34px 3px rgba(45, 255, 196, 0.43);
    -moz-box-shadow: inset 0px 0px 34px 3px rgba(45, 255, 196, 0.43);
    box-shadow: inset 0px 0px 34px 3px rgba(45, 255, 196, 0.43);
    border: 19px solid #00ffa8;
    width: 106%;
    height: 106%;
    border-radius: 100%;
    position: absolute;
    left: -3%;
    bottom: -3%;
    display: block;
    @media (max-width: 768px) {
      box-shadow: inset 0px 0px 34px 3px rgba(45, 255, 196, 0.43);
      border: 17px solid #00ffa8;
    }
  }
}

.home-description {
  position: absolute;
  bottom: 4rem;
  right: auto;
  left: 50%;
  z-index: 3;
  width: 21rem;

  @media (max-width: 768px) {
    bottom: 10%;
    right: auto;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & h1 {
    @apply uppercase;
    font-size: 51px;
    text-align: end;
    line-height: 62px;
    font-weight: 700;
    margin: 18px 0 10px;
    position: relative;
    padding-right: 37px;
    display: flex;
    flex-direction: column;
    color: var(--black);
    border-right: 9px solid var(--primary);
    left: -110%;
    top: -23rem;
    @media (max-width: 768px) {
      font-size: 35px;
      line-height: 32px;
      padding-bottom: 11px;
      padding-right: 0;
      border-bottom: 7px solid var(--primary);
      border-right: none;
      left: -20%;
      top: -23rem;
      text-align: center;
    }

    & span:first-of-type {
      color: var(--primary);
      @media (max-width: 768px) {
        font-size: 30px;
      }
    }
  }
  & p {
    color: var(--gray97);
    font-size: 12px;
    line-height: 22px;

    @media (max-width: 768px) {
      bottom: auto;
      top: -234%;
      right: 11%;
      text-align: center;
      margin: 0 auto;
    }
  }
}

.overlay:after {
  content: "";
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png");
  height: 300%;
  width: 300%;
  position: fixed;
  opacity: 0.1;
  left: 0;
  z-index: 2;
  animation: animateGrain 8s steps(10) infinite;
}

button {
  margin-top: 2rem;
}

@keyframes animateGrain {
  0%,
  100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  20% {
    transform: translate(-15%, -20%);
  }
  30% {
    transform: translate(-5%, -10%);
  }
  40% {
    transform: translate(-15%, -20%);
  }

  50% {
    transform: translate(-5%, -10%);
  }
  60% {
    transform: translate(-15%, -20%);
  }
  70% {
    transform: translate(-5%, -10%);
  }
  80% {
    transform: translate(-15%, -20%);
  }
  90% {
    transform: translate(-5%, -10%);
  }
  100% {
    transform: translate(-15%, -20%);
  }
}

@keyframes text-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }
  8% {
    opacity: 0.1;
  }
  9% {
    opacity: 1;
  }
  12% {
    opacity: 0.1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.3;
  }
  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }

  72% {
    opacity: 0.2;
  }

  77% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}

.headline-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  @media (max-width: 768px) {
    top: 35vh;
    bottom: auto;
  }
}

#text-behind,
#text-front,
#text-behind-blur {
  font-family: "Roboto", sans-serif;
  position: absolute;
  text-align: center;
  // font-size: clamp(24px, 20vw, 195px);
  font-size: 7vw;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 10px;
  line-height: 0.8;
  @media (max-width: 768px) {
    font-size: 15vw;
    text-align: left;
    line-height: 4rem;
  }
}

#text-behind {
  color: var(--black);
  z-index: 1;
}

#text-behind-blur {
  color: var(--black);
  filter: blur(7.5px);
  -webkit-filter: blur(7.5px);
  z-index: 0;
}

#text-front {
  /*  Set text-color to transparent to only show the outline  */
  color: transparent;
  text-stroke: 2px var(--black);
  -webkit-text-stroke: 2px var(--black);
  z-index: 3;
  opacity: 0.1;
}
</style>
