<template>
  <div id="main" class="w-[100vw] h-[100vh]">
    <Menu @is-redirecting="handleTransition()" />
    <Transition name="slide">
      <div v-if="isTransitioning" class="transition-block"></div>
    </Transition>
    <Transition mode="out-in">
      <RouterView />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/components/Menu.vue";
import { useColor } from "./assets/color";

const colorsComposable = useColor();
const isTransitioning = ref(false);

function handleTransition() {
  isTransitioning.value = true;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 50);
}
onBeforeMount(() => {
  colorsComposable.init();
});
</script>

<style lang="scss" scoped>
#main {
  background-color: var(--background);
  overflow: hidden;
  position: relative;
}

.transition-block {
  position: absolute;
  height: 200%;
  width: 100%;
  transform: translateX(-120%) rotate(-15deg);
  top: -50%;
  background-color: var(--primary);
  z-index: 999;
}

.slide-enter-active,
.slide-leave-active {
  transform: translateX(200%) rotate(-15deg);
  transition: all 0.7s;
}
.v-enter-from,
.v-leave-to {
  transform: translateX(-120%) rotate(-15deg);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}
.v-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
