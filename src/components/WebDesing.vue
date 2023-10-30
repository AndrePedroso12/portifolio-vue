<template>
  <div class="weddesing_box">
    <div class="description" v-motion-slide-visible-right :delay="700">
      <p class="title" v-if="title">
        {{ title }}
      </p>
      <p class="title" v-else>
        {{ initialTitle }}
      </p>
      <p class="LanguageDescription" v-if="LanguageDescription">
        {{ LanguageDescription }}
      </p>
      <p class="LanguageDescription" v-else>
        {{ initialLanguageDescription }}
      </p>
    </div>
    <div class="icon_box" v-motion-pop-visible :delay="500">
      <div
        class="icon_item"
        :class="desing.name"
        v-for="desing in Desings"
        @click="onHover(desing.name, desing.description)"
      >
        <span class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="72"
            viewBox="0 0 64 72"
            :fill="desing.color"
          >
            <path :d="desing.icon" />
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

const title = ref("");
const LanguageDescription = ref("");

const initialTitle = ref("Clique em qualquer icone ao lado para saber mais");
const initialLanguageDescription = ref(
  "Ao clicar em qualquer um dos icones ao lado, vera uma descrição e alguns projetos que trabalhei usando a linguagem / framework"
);

function onHover(name: string, description: string) {
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
  justify-items: stretch;
  align-content: center;
  padding: 4rem;
}
.icon_box {
  @apply grid grid-cols-3 gap-4 rounded-3xl;
  border: 1px solid #45474a;
  background: #212121;
  width: 43vw;
  padding: 32px 19px 32px 32px;
  align-items: flex-start;
  align-content: flex-start;
  & .icon_item {
    @apply flex flex-col rounded-3xl uppercase;
    overflow: hidden;
    width: 9rem;
    text-align: center;
    font-family: Open Sans;
    font-size: 17px;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(15px);
    transition: 0.5s;
    &:hover {
      transform: rotate(-11deg) translate(-11px, -48px) scale(1.1, 1.1);
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
    &.Figma {
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
    font-size: xxx-large;
  }
  & .LanguageDescription {
    color: var(--white);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    text-transform: uppercase;
  }
}
</style>
