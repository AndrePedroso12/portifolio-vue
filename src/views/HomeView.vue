<template>
  <div class="flex justify-end">
    <div class="color-block"></div>
    <div
      class="picture"
      style="background-image: url(src/assets/images/img-dev.jpg)"
    ></div>
    <div class="home-description">
      <h1>Me chamo<span>André Pedroso</span> <span>Dev Front-end</span></h1>
      <p class="open-sans-font">
        Sou Desenvolvedor Front-End com mais de 8 anos de experiência,
        concentrando-me principalmente no desenvolvimento de lojas online,
        websites empresariais e landing pages.
      </p>
      <router-link to="/sobre" custom v-slot="{ navigate }">
        <button @click="navigate" role="link">
          <span>Mais sobre</span>
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </button>
      </router-link>

      <img src="src/assets/images/logo_lines.svg" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  top: 10%;
  right: auto;
  left: 42%;
  & h1 {
    @apply uppercase;
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
    margin: 15px 0 28px;
    font-size: 16px;
    line-height: 35px;
  }
  & button {
    border: 1px solid var(--primary);
    overflow: hidden;
    display: inline-block;
    line-height: 1.4;
    border-radius: 35px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    transition: all 0.25s ease-in-out;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
    padding: 16px 70px 16px 35px;
    font-size: 15px;
    font-weight: 600;
    color: var(--black);
    background-color: transparent;
    margin-bottom: 3rem;

    & :before {
      z-index: -1;
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform: translateX(100%);
      transition: all 0.3s ease-out;
      background-color: var(--primary);
    }
    &:hover {
      :before {
        transform: translateX(0);
      }
    }
    & svg {
      background-color: var(--primary);
      position: absolute;
      right: -1px;
      top: -1px;
      bottom: 0;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }
}
</style>
