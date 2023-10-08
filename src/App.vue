<template>
  <div id="main" class="w-[100vw] h-[100vh]">
    <Menu />
    <Transition>
      <RouterView />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/components/Menu.vue";
import { useColor } from "./assets/color";

const colorsComposable = useColor();

onBeforeMount(() => {
  colorsComposable.init();
});
</script>

<style lang="scss" scoped>
#main {
  background-color: var(--background);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
