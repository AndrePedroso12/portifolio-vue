<template>
  <div class="number-board" ref="board">
    <div
      class="number-item"
      v-for="(AboutNumber, index) in aboutNumbers"
      :key="index"
    >
      <span :label="AboutNumber.number" class="number">{{
        Math.round(animatedNumbers[index])
      }}</span>
      <span>{{ AboutNumber.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { aboutNumbers } from "@/assets/AboutNumbers";
import { ref, onMounted, watch, onBeforeUnmount } from "vue";
import { useAboutStore } from "@/stores";

const AboutStore = useAboutStore();
const aboutNumbers = AboutStore.$state.aboutNumbers;

const targetNumbers = ref([
  aboutNumbers[0].number,
  aboutNumbers[1].number,
  aboutNumbers[2].number,
  aboutNumbers[3].number,
]);
const animatedNumbers = ref(targetNumbers.value.map(() => 0));

const animationDuration = 2500;
const updateInterval = 20;
let animationIntervalIds: number[] = [];

const animateNumberChange = (index: number) => {
  const startNumber = animatedNumbers.value[index];
  const endNumber = targetNumbers.value[index];
  const totalSteps = animationDuration / updateInterval;
  const stepValue = (endNumber - startNumber) / totalSteps;

  animationIntervalIds[index] = setInterval(() => {
    if (animatedNumbers.value[index] + stepValue < endNumber) {
      animatedNumbers.value[index] += stepValue;
    } else {
      animatedNumbers.value[index] = endNumber;
      clearInterval(animationIntervalIds[index]);
    }
  }, updateInterval);
};

onMounted(() => {
  targetNumbers.value.forEach((_, index) => {
    animateNumberChange(index);
  });
});

watch(targetNumbers, (newTargetNumbers, oldTargetNumbers) => {
  newTargetNumbers.forEach((_, index) => {
    clearInterval(animationIntervalIds[index]);
    animateNumberChange(index);
  });
});

onBeforeUnmount(() => {
  animationIntervalIds.forEach((intervalId) => clearInterval(intervalId));
});
</script>

<style lang="scss" scoped>
.number-board {
  @apply grid grid-cols-2 gap-4 rounded-3xl p-7;
  border: 4px solid var(--white);
  & .number-item {
    @apply flex rounded-3xl p-5;
    color: var(--white);
    flex-direction: column;
    border: 4px solid var(--white);
  }
  & .number {
    font-weight: 900;
    font-size: 60px;
    margin-left: 1rem;
    &:after {
      content: "+";
      font-weight: 400;
      font-size: 35px;
      position: absolute;
    }
  }
  & span:last-of-type {
    @apply uppercase pl-24;
    text-align: left;
    width: 80%;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 10%;
      border-top: 3px solid black;
      width: 77px;
    }
  }
}
</style>