import "./assets/main.css";

//Vue instance
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

//Vue router
import router from "./router";
app.use(router);

//Unhead
import { createHead } from "@unhead/vue";
const head = createHead();
app.use(head);

//Pinia
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);

//VueUseMotion
import { MotionPlugin } from "@vueuse/motion";
app.use(MotionPlugin);

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faHouse,
  faUser,
  faBriefcase,
  faComments,
  faLightbulb,
  faArrowRight,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faGithub,
  faVuejs,
  faHtml5,
  faCss3Alt,
  faReact,
  faJsSquare,
  faUikit,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faUserSecret,
  faHouse,
  faUser,
  faBriefcase,
  faComments,
  faLightbulb,
  faArrowRight,
  faEnvelope,
  faWhatsapp,
  faGithub,
  faPaperPlane,
  faVuejs,
  faHtml5,
  faCss3Alt,
  faReact,
  faJsSquare,
  faUikit,
  faWordpress
);

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
