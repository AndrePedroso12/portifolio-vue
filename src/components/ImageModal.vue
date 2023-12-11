<template>
  <dialog id="imageModal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">{{ props.selectedImage.title }}</h3>
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <div class="artboard artboard-horizontal phone-1 artboard-demo">
        <img :src="props.selectedImage.image" alt="" />
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  selectedImage: any;
}>();
</script>

<style scoped>
.artboard {
  overflow-y: scroll;
}
</style>
