<template>
  <div class="darkmode" v-show="!isMobile">
    <font-awesome-icon icon="fa-solid fa-lightbulb" @click="darkMode()" />
  </div>
  <header class="header" v-show="!isMobile">
    <ul class="nav-bar">
      <li
        class="icon-box"
        v-for="menuItem in menuIcons"
        :class="{ active: isCurrentPage(menuItem.name) }"
        @click="redirectTo(menuItem.name)"
      >
        <p :v-show="isCurrentPage(menuItem.name)">{{ menuItem.name }}</p>
        <font-awesome-icon :icon="['fa-solid', menuItem.icon]" />
      </li>
    </ul>
  </header>

  <div class="drawer menu__toggle" v-show="isMobile">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer" class="btn drawer-button">
        <span class="hamburguer" :class="{ active: drawerStatus }"></span>
      </label>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>

      <ul
        class="menu p-4 min-h-full text-base-content"
        :class="{ active: !menuWidth }"
        @click="toggleMobileMenuWidth()"
      >
        <img
          class="logo"
          src="/src/assets/images/logo_full.svg"
          style="filter: brightness(0)"
        />
        <div
          class="darkmode"
          :class="{ active: !menuWidth }"
          @click="darkMode()"
        >
          <font-awesome-icon icon="fa-solid fa-lightbulb" />
          <p v-if="darkModeState" :class="{ hidden: menuWidth }">Light Mode</p>
          <p v-else :class="{ hidden: menuWidth }">Dark Mode</p>
        </div>
        <!-- Sidebar content here -->
        <li
          class="icon-box"
          v-for="menuItem in menuIcons"
          :class="{ active: isCurrentPage(menuItem.name) }"
          @click="redirectTo(menuItem.name)"
        >
          <font-awesome-icon :icon="['fa-solid', menuItem.icon]" />
          <p :class="{ hidden: menuWidth }">{{ menuItem.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { menuIcons } from "@/assets/menuIcons";
import router from "@/router";
import { useRoute } from "vue-router";
import { useColor } from "@/assets/color";
import { isMobile as mobileView } from "@/static/js/Screen";

const route = useRoute();
const colorsComposable = useColor();
const currentPage = computed(() => route.name?.toString());
const isMobile = computed(() => mobileView());
const menuWidth = ref(false);
const drawerStatus = computed(() => getStatus());

const darkModeState = ref(colorsComposable.darkModeState);

const emit = defineEmits(["isRedirecting"]);

const isCurrentPage = (itemName: string) => {
  return itemName === currentPage.value;
};

function redirectTo(page: string) {
  uncheckDrawerLabel();
  emit("isRedirecting");
  router.push({
    path: "/" + page.toLocaleLowerCase(),
    name: page,
  });
}

function darkMode() {
  colorsComposable.toggleDarkMode();
  uncheckDrawerLabel();
}

function toggleMobileMenuWidth(close?: boolean) {
  if (close) menuWidth.value = false;
  else menuWidth.value = !menuWidth.value;
}

function uncheckDrawerLabel() {
  toggleMobileMenuWidth(true);
  const input = document.querySelector("#my-drawer");
  input.checked = false;
}

function getStatus() {
  const input = document.querySelector("#my-drawer");
  if (input) return input.checked;
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  right: 30px;
  display: flex;
  align-items: center;
  top: 50%;
  opacity: 1;
  transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;
  transform: translateY(-50%);
  z-index: 10;

  & ul.nav-bar {
    margin: 0;
    padding: 0;
    border: none;
    display: block;
  }
  & .icon-box {
    @apply flex;
    width: 50px;
    height: 50px;
    list-style: none;
    position: relative;
    align-items: center;
    transition: 0.3s;
    margin: 20px 0;
    border-radius: 100%;
    justify-content: center;
    background: var(--gray79);
    cursor: pointer;
    @media (max-width: 768px) {
      margin: 0;
      width: 45px;
      height: 45px;
      background: #444;
    }
    &.active {
      background-color: var(--primary);
      color: var(--background);
    }
    & p {
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
      color: #fff;
      line-height: 50px;
      font-weight: 500;
      transition: all 0.3s;
      border-radius: 30px;
      text-transform: uppercase;
      padding: 0 25px 0 30px;
      height: 50px;
      margin: 0;
    }
    @media (min-width: 768px) {
      &:hover p {
        opacity: 1;
        right: 27px;
        margin: 0;
        text-align: center;
        border-radius: 30px 0 0 30px;
        background-color: var(--primary);
        color: var(--background);
      }
      &:hover {
        background-color: var(--primary);
        color: var(--background);
      }
    }
  }
}

.darkmode {
  background: var(--black);
  position: fixed;
  right: 30px;
  top: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  @media (max-width: 768px) {
    top: auto;
    bottom: 2rem;
    right: auto;
    left: 2rem;
    &.active {
      width: 72%;
      height: 59px;
      border-radius: 12px;
      padding: 1rem 2rem 1rem 0;
      text-align: left;
      display: flex;
      justify-content: space-between;
    }
    & p {
      color: var(--white);
    }
  }
  & svg {
    color: var(--background);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    padding: 10px;
    cursor: pointer !important;
    text-decoration: none;
  }
}

.menu__toggle {
  /* background: green; */
  position: fixed;
  bottom: -20px;
  z-index: 999;
  border-radius: 100%;
}

.drawer-content {
  display: grid;
  justify-items: center;
  justify-content: center;
}

.drawer-button {
  border-radius: 100%;
  width: 5rem;
  height: 5rem;
  background-color: var(--primary);
  border: none;
  & svg {
    fill: var(--black);
  }
  .hamburguer {
    display: block;
    width: 40px;
    height: 5px;
    border-radius: 2px;
    background: #333;
    position: relative;
    // left: 80%;
    // top: 30px;
    transition: 0.5s ease-in-out;
    display: flex;

    &:before {
      top: -10px;
    }

    &:after {
      bottom: -10px;
    }

    &:after,
    &:before {
      width: 100%;
      height: 100%;
      content: "";
      background: #333;
      position: absolute;
      transition: 0.5s ease-in-out;
    }

    &.active {
      transform: rotate(45deg) ease-in-out 0.5s;
    }
  }

  input:checked ~ [for="my-drawer"] .hamburguer:before {
    transform: rotate(90deg) ease-in-out 0.5s;
    top: 0;
  }

  input:checked ~ [for="my-drawer"] .hamburguer:after {
    transform: rotate(90deg) ease-in-out 0.5s;
    bottom: 0;
  }
}

.text-base-content {
  background: var(--primary);
  & .icon-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    color: var(--white);
    font-size: x-large;
    width: fit-content;
  }
}

.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 70vh;
  padding-bottom: 13rem;
  width: 26vw;
  transition: 0.6s;
  &.active {
    width: 58vw;
    align-items: flex-start;
  }

  li.icon-box.active {
    color: var(--black);
    background-color: var(--white);
    border-radius: 9px;
    padding: 0.5rem 0;
  }
}
</style>
