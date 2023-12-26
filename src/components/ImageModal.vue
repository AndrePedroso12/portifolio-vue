<template>
  <dialog id="imageModal" class="modal">
    <div class="modal-box modal-bottom">
      <div class="header">
        <h3 class="title">{{ props.selectedImage.title }}</h3>

        <form method="dialog">
          <button class="btn btn-sm btn-circle right-2 top-2 bg-white">
            ✕
          </button>
        </form>
      </div>
      <img :src="props.selectedImage.image" alt="" />
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

<style lang="scss" scoped>
.header {
  text-align: center;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: var(--modalBG);
  &:before {
    content: "";
    display: block;
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 9999px;
    opacity: 0.3;
    box-shadow: 1.4em 0, 2.8em 0, 4.2em 0;
  }
  & .title {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--black);
    @media (max-width: 768px) {
      font-size: small;
      width: 44%;
      margin-left: 3rem;
    }
  }
}
.artboard {
  & .phone-3 {
    height: 100%;
  }
}
.modal-box {
  max-width: 50vw;
  padding: 0;
  overflow-x: hidden;
  @media (max-width: 768px) {
    max-width: 84vw;
  }
}

.btn-circle {
  background: var(--black);
  color: var(--white);
  border: none;
}
</style>
