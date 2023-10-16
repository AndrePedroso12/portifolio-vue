<template>
  <button>
    <span>{{ props.title }}</span>
    <font-awesome-icon :icon="['fa-solid', props.icon]" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  icon?: string;
}>();
</script>

<style lang="scss" scoped>
button {
  border: 1px solid var(--primary);
  overflow: hidden;
  display: inline-block;
  line-height: 1.4;
  border-radius: 35px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  transition: all 0.25s ease-in-out;
  text-transform: uppercase;
  position: absolute;
  z-index: 1;
  padding: 16px 70px 16px 35px;
  font-size: 15px;
  font-weight: 600;
  color: var(--black);
  background-color: transparent;
  bottom: -110%;

  & :before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: all 0.3s ease-out;
    background-color: var(--primary);
  }
  &:hover {
    :before {
      transform: translateX(0);
    }
  }
  & svg {
    background-color: var(--primary);
    position: absolute;
    right: -1px;
    top: -1px;
    bottom: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
}
</style>
