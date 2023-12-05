<template>
  <dialog id="my_modal_2" class="modal">
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
            <div
              class="artboard artboard-demo phone-1"
              :style="{
                'background-image':
                  'url(' + props.selectedProject.mobileImage + ')',
              }"
            >
              <!-- <img :src="props.selectedProject.mobileImage" alt="" /> -->
            </div>
          </div>
        </div>
        <div class="text w-3/6">
          <p class="mb-5 whitespace-pre-line">
            {{ props.selectedProject.description }}
          </p>
          <a
            v-if="props.selectedProject.website"
            :href="props.selectedProject.website"
            >Acesse o website</a
          >
        </div>
      </div>

      <div class="images">
        <div
          class="mockup-window border bg-base-300"
          v-for="image in selectedProject.images"
        >
          <div class="mockup-window-toolbar"></div>
          <div class="flex justify-center bg-base-200 relative h-full">
            <img :src="image.url" alt="" />
            <p>{{ image.description }}</p>
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
  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column-reverse;
    align-items: flex-start;
    align-content: stretch;
  }
  & .phone-1 {
    position: relative;
    background-position-y: 0;
    background-size: cover;
    animation: autoScroll-phone-mobile 15s ease-out infinite;
  }
  & .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    @media (max-width: 768px) {
      font-size: x-small;
    }
  }
  & a {
    background-color: var(--primary);
    color: black;
    font-weight: 700;
    border-radius: 30px;
    padding: 1rem;
    transition: ease-in-out 0.6s;
    :hover {
      scale: 1.1;
      background-color: white;
      outline: 1px solid white;
      outline-offset: 10px;
      box-shadow: 0 0 4px 4px #52fdd138;
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
    height: 100%;
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
    height: 20rem;
    :hover p {
      opacity: 1;
    }
    &:before {
      z-index: 4;
      position: absolute;
    }
    &-toolbar {
      background: #1d232a;
      position: absolute;
      z-index: 1;
      width: 100%;
      top: 0;
      height: 3rem;
    }
    & img {
      // animation: autoScroll-phone-desktop 30s ease-out infinite;
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 28px;
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

@keyframes autoScroll-phone-mobile {
  0%,
  20% {
    background-position-y: 0;
  }

  25% {
    background-position-y: 27%; /* -500px / 1800px */
  }
  50% {
    background-position-y: 55%; /* -1000px / 1800px */
  }
  75% {
    background-position-y: 83%; /* -1500px / 1800px */
  }
  90% {
    background-position-y: 100%; /* -1800px / 1800px */
  }
  100% {
    background-position-y: 0;
  }
}

@keyframes autoScroll-phone-desktop {
  0%,
  14.28% {
    bottom: auto;
  }
  28.56%,
  42.84% {
    bottom: -80%;
  }
  57.12%,
  71.4% {
    bottom: -50%;
  }
  85.68% {
    bottom: 0;
  }
  100% {
    bottom: auto;
  }
}
// @keyframes autoScroll-phone-desktop {
//   0% {
//     top: 48px;
//   }
//   20% {
//     top: 48px;
//   }
//   25% {
//     transform: translate(0%, -500px);
//   }
//   50% {
//     transform: translate(0%, -1000px);
//   }
//   75% {
//     transform: translate(0%, -1500px);
//   }
//   90% {
//     transform: none;
//     bottom: -300px;
//   }
//   100% {
//     top: 48px;
//   }
// }
</style>
