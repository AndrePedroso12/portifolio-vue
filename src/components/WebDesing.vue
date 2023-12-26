<template>
  <div class="weddesing_box">
    <div class="description" v-motion-slide-visible-right :delay="700">
      <p class="title" v-if="title">
        {{ title }}
      </p>

      <p class="LanguageDescription" v-if="LanguageDescription">
        {{ LanguageDescription }}
      </p>
    </div>
    <div class="icon_box" v-motion-pop-visible :delay="500">
      <div
        class="icon_item"
        :class="[{ active: activeLanguage === desing.name }, desing.name]"
        v-for="desing in Desings"
        @click="onIconClick(desing.name, desing.description)"
      >
        <span class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :width="desing.width"
            :height="desing.height"
            :viewBox="desing.viewBox"
          >
            <path v-for="path in desing.icon" :d="path" :fill="desing.color" />
          </svg>
        </span>
        <span :style="{ color: desing.color }">{{ desing.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWebDesingStore } from "@/stores";

const DesingStore = useWebDesingStore();
const Desings = DesingStore.$state.desing;

const title = ref(Desings[0].name);
const LanguageDescription = ref(Desings[0].description);

const activeLanguage = ref(Desings[0].name);

function onIconClick(name: string, description: string) {
  activeLanguage.value = name;
  title.value = name;
  LanguageDescription.value = description;
}
</script>

<style lang="scss" scoped>
.weddesing_box {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  display: grid;
  align-items: start;
  justify-content: space-between;
  justify-items: center;
  align-content: center;
  padding: 4rem 6rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0 2rem;
    margin-top: -4rem;
  }
}
.icon_box {
  @apply grid grid-cols-3 gap-4 rounded-3xl;
  align-items: center;
  align-content: flex-start;
  justify-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }

  & .icon_item {
    @apply flex flex-col rounded-3xl uppercase;
    overflow: hidden;
    width: 9rem;
    cursor: pointer;
    text-align: center;
    font-family: Open Sans;
    font-size: 17px;
    font-weight: 700;
    background: #0c0b0e;
    backdrop-filter: blur(15px);
    transition: 0.5s;
    @media (max-width: 768px) {
      width: 5rem;
      height: 5.5rem;
      font-size: small;
      border-radius: 14px;
    }
    &:hover {
      transform: rotate(-11deg) translate(-11px, -48px) scale(1.1, 1.1);
      animation: none;
      @media (max-width: 768px) {
        transform: translateY(-22px) scale(1.3, 1.3);
      }
    }
    &:before {
      content: "";
      filter: blur(25px);
      width: 3rem;
      height: 3rem;
      position: absolute;
      z-index: -2;
      right: auto;
      left: 35%;
      bottom: -2rem;
    }
    &.active {
      animation: 1s jump ease infinite alternate;
    }

    &.figma {
      box-shadow: 10px 10px 15px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px #ff7262 inset;

      &:before {
        background: linear-gradient(64deg, #a259ff 21.64%, #1abcfe 69.31%);
      }
    }
    &.xd {
      box-shadow: 10px 10px 13px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgba(71, 1, 55, 0.35) inset;

      &:before {
        background: linear-gradient(64deg, #e074ef 21.64%, #470137 69.31%);
      }
    }
    &.photoshop {
      box-shadow: 10px 10px 20px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgba(38, 77, 228, 0.35) inset;

      &:before {
        background: linear-gradient(64deg, #264de4 21.64%, #99f 69.31%);
      }
    }
    &.illustrator {
      box-shadow: 10px 10px 5px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgba(223, 167, 24, 0.35) inset;

      &:before {
        background: linear-gradient(64deg, #300 21.64%, #d8a91e 69.31%);
      }
    }
    &.premiere {
      box-shadow: 10px 10px 5px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgba(205, 4, 255, 0.35) inset;

      &:before {
        background: linear-gradient(64deg, #e4e4e4 21.64%, #e021ff 69.31%);
      }
    }
    &.effects {
      box-shadow: 10px 10px 5px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgba(16, 16, 220, 0.35) inset;

      &:before {
        background: linear-gradient(87deg, #9598f9 9.63%, #5201ff 85.76%);
      }
    }

    & .icon {
      height: 7rem;
      padding-top: 1.5rem;
      @media (max-width: 768px) {
        text-align: center;
        height: 3rem;
        padding-top: 0;
      }
      & svg {
        margin: auto;
        width: 5rem;
        @media (max-width: 768px) {
          width: 2rem;
        }
      }
    }
    & span:last-of-type {
      margin-bottom: 0.5rem;
      @media (max-width: 768px) {
        font-size: xx-small;
        padding-top: 0.8rem;
      }
    }
    &:last-of-type .icon svg {
      width: 6rem;
      @media (max-width: 768px) {
        width: 2.5rem;
      }
    }
  }
}

.description {
  & .title {
    text-transform: uppercase;
    color: var(--white);
    font-weight: 700;
    font-size: xx-large;
  }
  & .LanguageDescription {
    color: var(--white);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    white-space-collapse: preserve-breaks;
    @media (max-width: 768px) {
      font-size: x-small;
      line-height: 14px;
    }
  }
}

@keyframes jump {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.05;
  }
}
</style>
