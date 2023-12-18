<template>
  <div class="languages_box">
    <div class="icon_box" v-motion-pop-visible :delay="500">
      <div
        class="icon_item"
        :class="[{ active: activeLanguage === languages.name }, languages.name]"
        v-for="languages in Programings"
        @click="onIconClick(languages.name, languages.description)"
      >
        <span class="icon">
          <font-awesome-icon
            :icon="['fa-brands', languages.icon]"
            :color="languages.color"
        /></span>
        <span :style="{ color: languages.color }">{{ languages.name }}</span>
      </div>
    </div>

    <div class="description">
      <p class="title" v-if="title" v-motion-slide-right :delay="700">
        {{ title }}
      </p>

      <p
        class="LanguageDescription"
        v-if="LanguageDescription"
        v-motion-slide-right
        :delay="900"
      >
        {{ LanguageDescription }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProgramingStore } from "@/stores";

const ProgramingStore = useProgramingStore();
const Programings = ProgramingStore.$state.programing;

const title = ref(Programings[0].name);
const LanguageDescription = ref(Programings[0].description);

const activeLanguage = ref(Programings[0].name);

function onIconClick(name: string, description: string) {
  activeLanguage.value = name;
  title.value = name;
  LanguageDescription.value = description;
}
</script>

<style lang="scss" scoped>
.languages_box {
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
    flex-direction: column;
    padding: 0 2rem;
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
    cursor: pointer;
    width: 9rem;
    text-align: center;
    font-family: Open Sans;
    font-size: 17px;
    font-weight: 700;
    backdrop-filter: blur(15px);
    transition: 0.5s;
    background: #0c0b0e;
    @media (max-width: 768px) {
      width: 5rem;
      height: 5rem;
      font-size: small;
      border-radius: 14px;
    }

    &:hover {
      transform: rotate(-11deg) translate(-11px, -48px) scale(1.1, 1.1);
      animation: none;
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
    &.HTML5 {
      box-shadow: 10px 10px 15px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgba(230, 76, 24, 0.35) inset;
      &:before {
        background: linear-gradient(233deg, #ff0000 1.43%, #ff5a00 91.6%);
      }
    }
    &.CSS3 {
      box-shadow: 10px 10px 13px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgba(41, 101, 241, 0.35) inset;

      &:before {
        background: linear-gradient(64deg, #264de4 21.64%, #c0d1f9 69.31%);
      }
    }
    &.SASS {
      box-shadow: 10px 10px 13px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgb(241 41 203 / 35%) inset;

      &:before {
        background: linear-gradient(64deg, #cf649a 21.64%, #ffb4da 69.31%);
      }
    }
    &.Vue {
      box-shadow: 10px 10px 20px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgba(65, 184, 131, 0.35) inset;

      &:before {
        background: linear-gradient(64deg, #52fdd1 21.64%, #27ae60 69.31%);
      }
    }
    &.React {
      box-shadow: 10px 10px 5px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgba(74, 213, 255, 0.35) inset;
      &:before {
        background: linear-gradient(64deg, #113a46 21.64%, #4ad5ff 69.31%);
      }
    }
    &.JavaScript {
      box-shadow: 10px 10px 5px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgba(247, 223, 30, 0.35) inset;

      &:before {
        background: linear-gradient(233deg, #ff7a00 1.43%, #f7df1e 91.6%);
      }
    }
    &.Wordpress {
      box-shadow: 10px 10px 5px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgba(33, 117, 155, 0.35) inset;

      &:before {
        background: linear-gradient(233deg, #21759b 1.43%, #c3dde9 91.6%);
      }
    }
    &.Loja {
      box-shadow: 10px 10px 15px 0px rgba(255, 255, 255, 0.1) inset,
        0px -5px 25px 0px rgba(43, 196, 194, 0.35) inset;

      &:before {
        background: linear-gradient(64deg, #b5eae9 21.64%, #2bc4c2 69.31%);
      }
    }
    & .icon {
      font-size: 76px;
      text-align: center;
      height: 7rem;
      padding-top: 0.5rem;
      @media (max-width: 768px) {
        font-size: 33px;
        text-align: center;
        height: 3rem;
        padding-top: 0.5rem;
      }
    }
    & span:last-of-type {
      margin-bottom: 0.5rem;
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
