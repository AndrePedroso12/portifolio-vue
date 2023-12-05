<template>
  <span
    class="line-01"
    :style="{
      backgroundColor: props.color,
    }"
  ></span>
  <span
    class="line-02"
    :style="{
      backgroundColor: props.color,
    }"
  ></span>
  <span
    class="line-03"
    :style="{
      backgroundColor: props.color,
    }"
  ></span>
</template>

<script lang="ts" setup>
import { useColor } from "@/assets/color";
const colorsComposable = useColor();
const props = defineProps<{
  color?: string;
}>();
</script>

<style lang="scss" scoped>
.line-01 {
  position: absolute;
  top: 0;
  left: 17.4rem;
  z-index: 2;
}

.line-02 {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
}

.line-03 {
  position: absolute;
  top: 0;
  right: 17.4rem;
  z-index: 1;
}

.line-01,
.line-02,
.line-03 {
  display: inline-block;
  height: 100%;
  width: 1px;
  background-color: rgba(196, 196, 196, 0.1);
}

@media (max-width: 768px) {
  .line-01 {
    left: 23.4rem;
  }

  .line-03 {
    right: 23.4rem;
  }
}
</style>
