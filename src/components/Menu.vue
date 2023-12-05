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
      <label for="my-drawer" class="btn drawer-button"
        ><svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </label>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>

      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <div class="darkmode">
          <font-awesome-icon icon="fa-solid fa-lightbulb" @click="darkMode()" />
        </div>
        <!-- Sidebar content here -->
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

const emit = defineEmits(["isRedirecting"]);

const isCurrentPage = (itemName: string) => {
  return itemName === currentPage.value;
};

function redirectTo(page: string) {
  emit("isRedirecting");
  router.push({
    path: "/" + page.toLocaleLowerCase(),
    name: page,
  });
}

function darkMode() {
  colorsComposable.toggleDarkMode();
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
}
</style>
