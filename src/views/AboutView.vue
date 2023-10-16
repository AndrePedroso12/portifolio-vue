<template>
  <div class="about">
    <Title title="Sobre " title_white="mim" back-text="currículo" />
    <section class="top-section">
      <div class="picture">
        <img src="src/assets/images/img-dev.jpg" alt="" />
      </div>
      <div class="description">
        <h1>André Pedroso <span>Dev Front-end</span></h1>
        <p class="glass-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus
          neque in maximus elementum. Fusce condimentum justo sit amet nisl
          mollis, in bibendum nisi rhoncus. Fusce sed risus eros. Donec erat
          ipsum, tempus sed cursus ac, volutpat et risus. Maecenas mattis
          commodo neque, non malesuada mauris vulputate nec. Vivamus laoreet dui
          nec dui scelerisque aliquam. Fusce turpis est, efficitur eget nulla
          quis, ultricies tincidunt massa. Proin fermentum et sem ultricies
          fermentum. Cras eu augue imperdiet, tincidunt enim a, euismod dui.
          Mauris nec euismod lorem. Quisque vitae purus condimentum, malesuada
          lacus in, blandit est.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Title from "@/components/Title.vue";
</script>

<style lang="scss" scoped>
.top-section {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  & .description {
    width: 50%;
    & .glass-text {
      border-radius: 7px;
      background: rgba(255, 255, 255, 0.01);
      box-shadow: 0px 1px 40px 0px rgba(13, 207, 172, 0.2) inset,
        0px 4px 18px 0px rgba(8, 88, 64, 0.3) inset,
        0px 98px 100px -48px rgba(0, 253, 192, 0.3) inset,
        0px -82px 68px -64px rgba(14, 114, 96, 0.3) inset,
        0px 7px 11px -4px #fff inset,
        0px 39px 56px -36px rgba(255, 255, 255, 0.5) inset;
      backdrop-filter: blur(12.5px);
      padding: 1rem;
      color: white;
    }

    & h1 {
      @apply uppercase;
      font-size: 51px;
      line-height: 62px;
      font-weight: 700;
      margin: 0 0 25px;
      padding-left: 37px;
      display: flex;
      flex-direction: column;
      color: var(--black);
      border-left: 9px solid var(--primary);

      & span:first-of-type {
        color: var(--primary);
      }
    }
  }

  & .picture {
    width: 44.4%;
    &::before,
    &::after {
      content: "";
      -webkit-box-shadow: 0px 0px 34px 3px rgba(45, 255, 196, 0.43);
      -moz-box-shadow: 0px 0px 34px 3px rgba(45, 255, 196, 0.43);
      box-shadow: 0px 0px 34px 3px rgba(45, 255, 196, 0.43);
      border: 10px solid #00ffa8;
      width: 15rem;
      height: 21rem;
      display: block;
      border-radius: 30px;
      position: absolute;
    }

    &::before {
      margin-left: 2%;
      margin-top: -10%;
    }

    &::after {
      margin-left: 25%;
      margin-top: -10%;
    }
    & img {
      width: 18rem;
      margin: 0 auto;
      position: relative;
      border-radius: 16px;
      box-shadow: 0px 0px 34px 3px rgba(45, 255, 196, 0.43);
      border: 5px solid #00ffa8;
    }
  }
}
</style>
