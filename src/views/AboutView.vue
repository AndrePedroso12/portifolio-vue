<template>
  <div class="about">
    <section id="section1" class="hero fullpage">
      <div class="video-wrap">
        <video autoplay playsinline loop muted id="video-bg">
          <source
            src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4"
            type="video/mp4"
          />
          <source
            src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="position-absolute w-100 gradient-overlay"></div>
      <div class="content position-relative text-center mb-5">
        <h1 class="hero-title blend">
          Criatividade
          <br />
          &amp; Estrategia
        </h1>
        <ScrollIcon :target="'section2'" :cornered="false" />
      </div>
    </section>
    <section id="section2" class="fullpage">
      <Lines />

      <div class="main-row">
        <div class="dev-image">
          <img
            src="/src/assets/images/sobre-mim.png"
            alt=""
            v-motion-slide-visible-once-bottom
            :delay="700"
          />
        </div>
        <div class="description" v-motion-slide-visible-right :delay="900">
          <h3>André Pedroso <span>Dev Front-end</span></h3>
          <p class="glass-text">
            Me chamo André Luiz Pedroso e comecei como Desenvolvedor Front-End
            em 2015, na área de publicidade em Jaguariúna, SP. Ao longo dos
            anos, ampliei minha atuação, colaborando atualmente com agências e
            clientes de grande e médio porte, tanto no Brasil quanto
            internacionalmente. Possuo ampla experiência em linguagens e
            frameworks como Vue, React, Bootstrap, Tailwind, Javascript, HTML5,
            CSS3, Wordpress e Loja Integrada, aliada a um sólido conhecimento em
            Design UI/UX, garantindo eficiência e uma experiência visualmente
            atraente em meus projetos.
            <br />
            <br />
            Com mais de oito anos dedicados ao desenvolvimento Front-End, minha
            abordagem versátil me permite enfrentar diversos desafios, desde a
            criação de lojas online até o design e implementação de websites
            empresariais. Meu compromisso é continuar aprimorando-me e
            explorando novas tecnologias para oferecer soluções inovadoras aos
            clientes.
          </p>
        </div>
      </div>
    </section>
    <section id="section3" class="fullpage">
      <div class="division">
        <div
          class="description"
          ref="target"
          v-motion-slide-visible-left
          :delay="700"
        >
          <p>Experiência</p>
          <NumbersAbout v-if="targetIsVisible" />
          <Button
            title="Enviar mensagem"
            icon="fa-paper-plane"
            @click="redirectTo()"
          />
        </div>

        <Video class="note-image" />
      </div>
    </section>
    <section id="section4" class="fullpage">
      <Lines :color="'var(--linesBlack)'" />
      <div class="description">
        <p v-motion-slide-visible-left>Conhecimentos em programação</p>
        <ProgramingLanguages />
      </div>
    </section>
    <section id="section5" class="fullpage">
      <div class="description">
        <p v-motion-slide-visible-left>Conhecimentos em web design</p>
        <WebDesing />
      </div>
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
import Button from "@/components/Button.vue";
import NumbersAbout from "@/components/NumbersAbout.vue";
import ProgramingLanguages from "@/components/ProgramingLanguages.vue";
import WebDesing from "@/components/WebDesing.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useElementVisibility } from "@vueuse/core";
import router from "@/router";
import Lines from "@/components/Lines.vue";
import Video from "@/components/Video.vue";
import ScrollIcon from "@/components/ScrollIcon.vue";
import { isMobile } from "@/static/js/Screen";

const emit = defineEmits(["isRedirecting"]);

function redirectTo() {
  emit("isRedirecting");
  router.push({
    path: "/Contato",
    name: "Contato",
  });
}

const target = ref(null);
const targetIsVisible = useElementVisibility(target);

const inMove = ref(false);
const inMoveDelay = 400;
const activeSection = ref(0);
const offsets = ref([]);
const touchStartY = ref(0);

const calculateSectionOffsets = () => {
  const sections = document.getElementsByTagName("section");
  const length = sections.length;

  for (let i = 0; i < length; i++) {
    const sectionOffset = sections[i].offsetTop;
    offsets.value.push(sectionOffset);
  }
};

// Handle the 'mousewheel' event for other browsers
const handleMouseWheel = (e: Event) => {
  if (e.wheelDelta < 30 && !inMove.value) {
    moveUp();
  } else if (e.wheelDelta > 30 && !inMove.value) {
    moveDown();
  }

  e.preventDefault();
  return false;
};

// Handle the 'DOMMouseScroll' event for Firefox
const handleMouseWheelDOM = (e: Event) => {
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
const scrollToSection = (id: number, force = false) => {
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
const touchStart = (e: Event) => {
  e.preventDefault();
  touchStartY.value = e.touches[0].clientY;

  if (e.target.className === "about") {
    inMove.value = true;
  }
};

// Handles the 'touchmove' event on mobile devices
const touchMove = (e: Event) => {
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
  if (!isMobile()) {
    calculateSectionOffsets();

    window.addEventListener("DOMMouseScroll", handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener("mousewheel", handleMouseWheel, { passive: false });
  }
  // Other browsers
});

// destroyed() hook executes on page destroy and removes all registered event listeners
onBeforeUnmount(() => {
  window.removeEventListener("DOMMouseScroll", handleMouseWheelDOM); // Mozilla Firefox
  window.removeEventListener("mousewheel", handleMouseWheel, {
    passive: false,
  }); // Other browsers
});
</script>

<style lang="scss" scoped>
.fullpage {
  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    height: 99vh;
    scroll-snap-align: start none;
  }
}
#section1 {
  & .hero-title {
    font-size: 8vw;
    line-height: 1em;
    font-weight: 900;
    @media (max-width: 768px) {
      font-size: 12vw;
    }
  }
  & .blend {
    mix-blend-mode: difference !important;
    color: white;
    position: relative;
    z-index: 2;
  }
  & .video-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }
  & #video-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 100%;
    background-position: center center;
    background-size: cover;
    object-fit: cover;
    transform: rotate(180deg);
  }
}

#section2 {
  position: relative;
  border-bottom-left-radius: 15vw;
  z-index: 3;
  background-color: var(--white);

  & .main-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  & .dev-image {
    & img {
      bottom: 1px;
      position: absolute;
      margin-left: 10%;
      width: 40vw;
      @media (max-width: 768px) {
        margin-left: 0;
        width: 74vw;
        z-index: 1;
        right: -12px;
      }
    }
  }

  & .description {
    width: 85%;
    margin-top: 6%;
    @media (max-width: 768px) {
      width: 81%;
    }
    & .glass-text {
      border-radius: 12px;
      position: relative;
      background: rgba(255, 255, 255, 0.01);
      padding: 3rem;
      font-size: 15px;
      color: var(--black);
      box-shadow: 0 0 0 1px transparent, 0 2px 4px transparent,
        0 12px 24px transparent;
      @media (max-width: 768px) {
        padding: 1.5rem;
        font-size: x-small;
      }
      &::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        padding: 1px;
        background: radial-gradient(
          75% 75% at 25% 15%,
          #fff 0,
          rgba(255, 255, 255, 0.3) 100%
        );
        -webkit-mask: linear-gradient(#000, #000) content-box,
          linear-gradient(#000, #000);
        mask: linear-gradient(#000, #000) content-box,
          linear-gradient(#000, #000);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0.5;
        pointer-events: none;
      }
    }

    & h3 {
      @apply uppercase;
      font-size: 51px;
      line-height: 62px;
      font-weight: 700;
      margin: 0 0 25px;
      padding-left: 37px;
      display: flex;
      flex-direction: column;
      color: var(--black);
      border-left: 9px solid var(--primary);
      @media (max-width: 768px) {
        font-size: 34px;
        line-height: 40px;
        padding-left: 20px;
      }

      & span:first-of-type {
        color: var(--primary);
      }
    }
  }
}

#section3 {
  background-color: var(--primary);
  position: relative;
  border-bottom-right-radius: 15vw;
  z-index: 2;
  &:before {
    content: "";
    background-color: var(--primary);
    position: absolute;
    top: -50vh;
    z-index: -1;
    left: 0;
    width: 100vw;
    height: 35vw;
    @media (max-width: 768px) {
      top: -11vh;
    }
  }
  & div {
    margin: auto;
    margin-top: 10%;
    @media (max-width: 768px) {
      margin-top: 0;
    }
  }
  & .division {
    padding-top: 2%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
  & .description {
    margin: auto;
    & p {
      @apply uppercase;
      font-size: 51px;
      line-height: 62px;
      font-weight: 700;
      margin: 0 0 25px;
      padding-left: 37px;
      color: var(--white);
      border-left: 9px solid var(--white);
    }

    & button {
      margin-top: 3rem;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  & .note-image {
    max-width: 49rem;
    animation: float 6s ease-in-out infinite;
    max-height: 100vh;
    position: sticky;
    top: 0;
    margin: 0 auto auto -40%;
    z-index: -1;
    @media (max-width: 768px) {
      right: 0;
      margin: -7px auto auto -29%;
    }
    & video {
      @media (max-width: 768px) {
        height: 48vh;
      }
    }
  }
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}

#section4 {
  background-color: var(--black);
  position: relative;
  border-bottom-left-radius: 15vw;
  z-index: 1;
  &:before {
    content: "";
    background-color: var(--black);
    position: absolute;
    top: -32vh;
    z-index: 0;
    right: 0;
    width: 100vw;
    height: 22vw;
    @media (max-width: 768px) {
      top: -9vh;
    }
  }
  & .description {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    height: 100%;
    @media (max-width: 768px) {
      justify-content: space-evenly;
    }
    & p {
      @apply uppercase;
      font-size: 51px;
      line-height: 62px;
      font-weight: 700;
      margin: 3rem 0 0px;
      text-align: center;
      color: var(--white);
      @media (max-width: 768px) {
        font-size: 31px;
        line-height: 1;
        margin: 0 auto;
      }
    }
  }
}

#section5 {
  background-color: var(--primary);
  position: relative;
  border-bottom-right-radius: 15vw;
  z-index: 0;
  &:before {
    content: "";
    background-color: var(--primary);
    position: absolute;
    top: -32vh;
    z-index: 0;
    left: 0;
    width: 100vw;
    height: 30vw;
    @media (max-width: 768px) {
      top: -11vh;
    }
  }
  & .description {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    height: 100%;
    @media (max-width: 768px) {
      justify-content: space-evenly;
    }

    & p {
      @apply uppercase;
      font-size: 51px;
      line-height: 62px;
      font-weight: 700;
      margin: 0 auto;
      text-align: center;
      color: var(--white);
      @media (max-width: 768px) {
        font-size: 31px;
        line-height: 1;
        margin: 0 auto;
      }
    }
  }
}

.sections-menu {
  position: fixed;
  left: 3rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  @media (max-width: 768px) {
    display: none;
  }

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
