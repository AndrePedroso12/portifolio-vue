<template>
  <div class="about">
    <section id="section1" class="fullpage">
      <Title title="Sobre " title_white="mim" back-text="currículo" />

      <h1>Section 1</h1>
    </section>
    <section id="section2" class="fullpage">
      <h1>Section 2</h1>
    </section>
    <section id="section3" class="fullpage">
      <h1>Section 3</h1>
    </section>
    <section id="section4" class="fullpage">
      <h1>Section 4</h1>
    </section>
    <section id="section5" class="fullpage">
      <h1>Section 5</h1>
    </section>
    <div class="sections-menu">
      <span
        class="menu-point"
        v-bind:class="{ active: activeSection == index }"
        v-on:click="scrollToSection(index)"
        v-for="(offset, index) in offsets"
        v-bind:key="index"
        v-title="'Go to section ' + (index + 1)"
      >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "@/components/Title.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";

const inMove = ref(false);
const inMoveDelay = 400;
const activeSection = ref(0);
const offsets = ref([]);
const touchStartY = ref(0);

// Calcaulates the absolute offsets of each section on the page and pushes it into the offsets array
const calculateSectionOffsets = () => {
  const sections = document.getElementsByTagName("section");
  const length = sections.length;

  for (let i = 0; i < length; i++) {
    const sectionOffset = sections[i].offsetTop;
    offsets.value.push(sectionOffset);
  }
};

// Handle the 'mousewheel' event for other browsers
const handleMouseWheel = (e) => {
  if (e.wheelDelta < 30 && !inMove.value) {
    moveUp();
  } else if (e.wheelDelta > 30 && !inMove.value) {
    moveDown();
  }

  e.preventDefault();
  return false;
};

// Handle the 'DOMMouseScroll' event for Firefox
const handleMouseWheelDOM = (e) => {
  if (e.detail > 0 && !inMove.value) {
    moveUp();
  } else if (e.detail < 0 && !inMove.value) {
    moveDown();
  }

  return false;
};

// Move to the previous section or the last section if you're on the first section
const moveDown = () => {
  inMove.value = true;
  activeSection.value--;

  if (activeSection.value < 0) activeSection.value = offsets.value.length - 1;

  scrollToSection(activeSection.value, true);
};

// Move to the next section or the first section if you're on the last section
const moveUp = () => {
  inMove.value = true;
  activeSection.value++;

  if (activeSection.value > offsets.value.length - 1) activeSection.value = 0;

  scrollToSection(activeSection.value, true);
};

// Scrolls to the passed section id if the section exists and the delay is over
const scrollToSection = (id, force = false) => {
  if (inMove.value && !force) return false;

  activeSection.value = id;
  inMove.value = true;

  // get section and scroll into view if it exists
  const section = document.getElementsByTagName("section")[id];
  if (section) {
    document
      .getElementsByTagName("section")
      [id].scrollIntoView({ behavior: "smooth" });
  }

  setTimeout(() => {
    inMove.value = false;
  }, inMoveDelay);
};

// Handles the 'touchstart' event on mobile devices
const touchStart = (e) => {
  e.preventDefault();
  touchStartY.value = e.touches[0].clientY;
};

// Handles the 'touchmove' event on mobile devices
const touchMove = (e) => {
  if (inMove.value) return false;
  e.preventDefault();

  const currentY = e.touches[0].clientY;

  if (touchStartY.value < currentY) {
    moveDown();
  } else {
    moveUp();
  }

  touchStartY.value = 0;
  return false;
};

// mounted() hook executes after page load and calls the section offset calculation and registers all events
onMounted(() => {
  calculateSectionOffsets();

  window.addEventListener("DOMMouseScroll", handleMouseWheelDOM); // Mozilla Firefox
  window.addEventListener("mousewheel", handleMouseWheel, { passive: false }); // Other browsers

  window.addEventListener("touchstart", touchStart, { passive: false }); // mobile devices
  window.addEventListener("touchmove", touchMove, { passive: false }); // mobile devices
});

// destroyed() hook executes on page destroy and removes all registered event listeners
onBeforeUnmount(() => {
  window.removeEventListener("DOMMouseScroll", handleMouseWheelDOM); // Mozilla Firefox
  window.removeEventListener("mousewheel", handleMouseWheel, {
    passive: false,
  }); // Other browsers

  window.removeEventListener("touchstart", touchStart); // mobile devices
  window.removeEventListener("touchmove", touchMove); // mobile devices
});
</script>

<style lang="scss" scoped>
.fullpage {
  height: 100vh;
  width: 100%;
}
#section2 {
  background-color: blue;
}

.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  & .menu-point {
    width: 10px;
    height: 10px;
    background-color: #fff;
    display: block;
    margin: 1rem 0;
    opacity: 0.6;
    transition: 0.4s ease all;
  }

  & .menu-point.active {
    opacity: 1;
    transform: scale(1.5);
  }

  & .menu-point:hover {
    opacity: 1;
    transform: scale(1.2);
  }
}
</style>
