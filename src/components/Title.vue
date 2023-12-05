<template>
  <div class="title-section">
    <h1>
      {{ props.title }}<span>{{ props.title_white }}</span>
    </h1>
    <span class="title-bg">{{ props.backText }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  title_white?: string;
  backText?: string;
}>();
</script>

<style lang="scss" scoped>
.title-section {
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 80px 0;
  text-align: center;
  & h1 {
    font-size: 56px;
    font-weight: 900 !important;
    color: var(--primary);
    text-transform: uppercase;
    margin: 0;
  }
  & .title-bg {
    font-size: 110px;
    left: 0;
    letter-spacing: 10px;
    line-height: 0.7;
    position: absolute;
    right: 0;
    top: 50%;
    text-transform: uppercase;
    font-weight: 800;
    transform: translateY(-50%);
    color: var(--black);
    opacity: 0.1;
    @media (max-width: 768px) {
      font-size: 16vw;
    }
  }
}
</style>
