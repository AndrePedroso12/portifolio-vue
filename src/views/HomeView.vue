<script setup lang="ts"></script>
<template>
  <div class="flex justify-end">
    <div class="color-block"></div>
    <div
      class="picture"
      style="background-image: url(src/assets/images/img-dev.jpg)"
    ></div>
    <div class="home-description">
      <h1 class="text-uppercase poppins-font">
        Me chamo<span>André Pedroso</span> <span>Dev Front-end</span>
      </h1>
      <p class="open-sans-font">
        I'm a Tunisian based web designer &amp; front‑end developer focused on
        crafting clean &amp; user‑friendly experiences, I am passionate about
        building excellent software that improves the lives of those around me.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-block {
  position: fixed;
  height: 200%;
  width: 100%;
  transform: rotate(-15deg);
  left: -83%;
  top: -50%;
  background-color: var(--primary);
}
.picture {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height: calc(100vh - 80px);
  z-index: 1;
  border-radius: 30px;
  left: 40px;
  top: 40px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.9);
  position: absolute;
  flex: 0 0 auto;
  width: 33.33333333%;
}

.home-description {
  max-width: 550px;
  position: absolute;
  bottom: auto;
  top: 28%;
  & h1 {
    font-size: 51px;
    line-height: 62px;
    font-weight: 700;
    margin: 18px 0 10px;
    position: relative;
    padding-left: 37px;
    display: flex;
    flex-direction: column;
    color: var(--black);
    border-left: 9px solid var(--primary);
    & span:first-of-type {
      color: var(--primary);
    }
  }
  & p {
    color: var(--black);
  }
}
</style>
