<template>
  <div class="flex justify-end">
    <div class="overlay"></div>
    <div class="home-description">
      <h1>André Pedroso <span>Dev Front-end</span></h1>
      <p class="open-sans-font">
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
        />
      </router-link>
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
  border-radius: 30px;
  left: 38%;
  bottom: 0;
  position: absolute;
  flex: 0 0 auto;
  width: 33.33333333%;
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
  }
}

.home-description {
  max-width: 550px;
  position: absolute;
  bottom: auto;
  top: 58%;
  right: auto;
  left: 42%;
  z-index: 3;
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

    & span:first-of-type {
      color: var(--primary);
    }
  }
  & p {
    color: var(--black);
    margin: 15px 0 28px;
    font-size: 12px;
    line-height: 22px;
    width: 21rem;
    position: absolute;
    right: -27%;
    bottom: -84%;
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
</style>
