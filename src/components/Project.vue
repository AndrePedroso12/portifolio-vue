<template>
  <div class="project">
    <figure class="project-image">
      <img
        :src="
          project.mainImage
            ? project.mainImage
            : 'https://images.unsplash.com/photo-1582754976305-9870cf0102be?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ'
        "
        alt=""
      />
    </figure>
    <h2 class="project-title">
      {{ project.title }}
      <br />
      <small>{{ project.subtitle }}</small>
    </h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  project: any;
}>();
</script>

<style scoped lang="scss">
.project {
  height: 100%;
  padding: 3vw;
  display: flex;
  align-items: flex-end;
  position: relative;
  background: black;
  &-image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 0;
    transition: all 0.6s ease-out;
    transform: scale(1.05);
    opacity: 1;
    & img {
      width: 100%;
      height: 100%;
      display: block;
      -o-object-fit: cover;
      object-fit: cover;
      object-position: bottom;
      mix-blend-mode: multiply;
      opacity: 0.4;
    }
  }
  &-title {
    font-size: 36px;
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
  &:hover .project-image {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
