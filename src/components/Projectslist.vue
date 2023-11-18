<template>
  <div>
    <div
      v-for="(group, groupIndex) in groupedItems"
      :key="groupIndex"
      class="projects"
    >
      <!-- Render each group of 4 items -->
      <div
        v-for="(project, projectIndex) in group"
        :key="projectIndex"
        class="project-item"
        @click="openProject(project)"
      >
        <Project :project="project" />
      </div>
    </div>
  </div>

  <ProjectModal :selectedProject="selectedProject" />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Project from "./Project.vue";
import ProjectModal from "./ProjectModal.vue";

import { useProjectStore } from "@/stores";

const ProjectStore = useProjectStore();
const ProjectList = ProjectStore.$state.projectsList;

const groupedItems = computed(() => {
  const result = [];
  for (let i = 0; i < ProjectList.length; i += 4) {
    result.push(ProjectList.slice(i, i + 4));
  }
  return result;
});

const selectedProject = ref({
  title: "",
  subtitle: "",
  mainImage: "",
  mobileImage: "",
  description: "",
  images: [
    {
      url: "",
      description: "",
    },
  ],
});

function openProject(project: any) {
  selectedProject.value = project;
  my_modal_3.showModal();
}
</script>

<style scoped lang="scss">
.projects {
  padding: 3vw;
  display: grid;
  grid-gap: 3vw;
  grid-template-columns: 1fr 1fr;
}

.project-item {
  height: clamp(20vh, 35vh, 40vh);
  position: relative;
  cursor: pointer;
  will-change: width, height, top, left, padding;
  overflow: hidden;
  border-radius: 6px;
  transition: filter 0.3s ease-out, opacity 0.3s ease-out;
}

.projects:nth-of-type(1) {
  & .project-item {
    &:nth-child(n + 3) {
      grid-column: span 2;
      height: clamp(30vh, 45vh, 50vh);
    }
    &:nth-child(1) {
      grid-row: 1/3;
      height: 100%;
    }

    &:nth-child(3n) {
      grid-column: 2/3;
    }
  }
}
.projects:nth-of-type(2n) {
  display: grid;

  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 20px;
  height: 100%;
  & .project-item {
    &:nth-child(1) {
      background-color: #7da999;
      grid-row-start: 1;
      grid-column-start: 1;

      grid-row-end: 2;
      grid-column-end: 3;
    }

    &:nth-child(2) {
      background-color: #5d9bd9;
      grid-row-start: 2;
      grid-column-start: 1;

      grid-row-end: 3;
      grid-column-end: 3;
    }
    &:nth-of-type(3) {
      background-color: #b8fc5a;
      grid-row-start: 1;
      grid-column-start: 3;
      grid-row-end: 3;
      grid-column-end: 5;
      height: 100%;
    }
    &:nth-child(4) {
      background-color: #8e9e5c;
      grid-row-start: 3;
      grid-column-start: 1;

      grid-row-end: 4;
      grid-column-end: 5;
    }
  }
}
</style>
