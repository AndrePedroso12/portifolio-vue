<template>
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <div
        class="hero min-h-screen"
        :style="{
          'background-image': 'url(' + props.selectedProject.mainImage + ')',
        }"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="title">
          <p class="project-title">
            {{ props.selectedProject.title }} <br />
            <small>{{ props.selectedProject.subtitle }}</small>
          </p>
        </div>
      </div>

      <div class="description">
        <div class="mockup-phone">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard artboard-demo phone-1">
              <img :src="props.selectedProject.mainImage" alt="" />
            </div>
          </div>
        </div>
        <p class="mb-5 w-3/6">
          {{ props.selectedProject.description }}
        </p>
      </div>

      <div class="images">
        <div class="mockup-window border bg-base-300">
          <div class="flex justify-center bg-base-200">
            <img :src="props.selectedProject.mainImage" alt="" />
            <p>descrição</p>
          </div>
        </div>
        <div class="mockup-window border bg-base-300">
          <div class="flex justify-center bg-base-200">
            <img :src="props.selectedProject.mainImage" alt="" />
            <p>descrição</p>
          </div>
        </div>
        <div class="mockup-window border bg-base-300">
          <div class="flex justify-center bg-base-200">
            <img :src="props.selectedProject.mainImage" alt="" />
            <p>descrição</p>
          </div>
        </div>
        <div class="mockup-window border bg-base-300">
          <div class="flex justify-center bg-base-200">
            <img :src="props.selectedProject.mainImage" alt="" />
            <p>descrição</p>
          </div>
        </div>
        <div class="mockup-window border bg-base-300">
          <div class="flex justify-center bg-base-200">
            <img :src="props.selectedProject.mainImage" alt="" />
            <p>descrição</p>
          </div>
        </div>
        <div class="mockup-window border bg-base-300">
          <div class="flex justify-center bg-base-200">
            <img :src="props.selectedProject.mainImage" alt="" />
            <p>descrição</p>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  selectedProject: any;
}>();
</script>

<style scoped lang="scss">
.modal-box {
  padding: 0;
  max-width: none;
  max-height: none;
}
button.btn {
  z-index: 9999;
  border: 1px solid white;
}

.title {
  padding: 5vw 4vw;
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
}

.project-title {
  font-size: 45px;
  text-align: left;
  line-height: 1;
  color: white;
  position: relative;
  transition: opacity 0.3s ease-out;
  margin-bottom: 15px;
  z-index: 1;
  font-weight: 900;
  text-transform: uppercase;
  & small {
    font-weight: normal;
    font-size: 0.65em;
  }
}

.description {
  padding: 5rem;
  display: flex;
  flex-direction: row;
  & .phone-1 {
    & img {
      object-fit: fill;
      height: 100%;
    }
  }
}

.images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  padding: 1rem;
  & p {
    position: absolute;
    width: 100%;
    height: 84%;
    background-color: #00000085;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    opacity: 0;
    transition: 0.3s;
  }
  & .mockup-window {
    :hover p {
      opacity: 1;
    }
  }
}

.modal[open] .modal-box {
  animation: appear 1.5s ease !important;
  position: absolute;
  height: 100%;
}

@keyframes appear {
  0% {
    top: 78%;
  }

  50% {
    top: 78%;
  }

  70% {
    top: 98%;
  }
  90% {
    top: 98%;
  }
  100% {
    top: 0;
  }
}
</style>
