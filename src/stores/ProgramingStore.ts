import { defineStore } from "pinia";

export const useProgramingStore = defineStore("programing", {
  state: () => ({
    programing: [
      {
        name: "HTML5",
        icon: "fa-html5",
        color: "#F36518",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo pharetra dictum. Donec maximus tellus elit. In venenatis, lorem sed congue tristique, lectus libero porttitor ex, sed tempor nibh metus id justo. Suspendisse gravida sed nunc id pellentesque. Morbi non hendrerit nisi. Praesent nec quam ac purus efficitur interdum. Nulla id leo eu est tincidunt fringilla vel sed eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum magna, gravida at luctus ac, vestibulum nec risus. Aenean semper ex at felis ultricies euismod. Nulla ullamcorper tincidunt libero, at auctor enim auctor a. Sed sit amet lacinia mi. Donec vitae luctus dolor, in efficitur metus. Fusce auctor posuere mi eget faucibus. Sed id tristique nulla.",
      },
      {
        name: "CSS3",
        icon: "fa-css3-alt",
        color: "#264DE4",
        description: "lorem ipsum",
      },
      {
        name: "Vue Js",
        icon: "fa-vuejs",
        color: "#41B883",
        description: "lorem ipsum",
      },
      {
        name: "React",
        icon: "fa-react",
        color: "#4AD5FF",
        description: "lorem ipsum",
      },
      {
        name: "JavaScript",
        icon: "fa-square-js",
        color: "#F7DF1E",
        description: "lorem ipsum",
      },
      {
        name: "Wordpress",
        icon: "fa-wordpress",
        color: "#21759B",
        description: "lorem ipsum",
      },
      {
        name: "Loja Integrada",
        icon: "fa-uikit",
        color: "#2BC4C2",
        description: "lorem ipsum",
      },
    ],
  }),

  actions: {},

  getters: {},
});

export const useWebDesingStore = defineStore("desing", {
  state: () => ({
    desing: [
      {
        name: "Figma",
        icon: "d='M62.471 1.88709L41.9299 35.3122L63.8404 70.763C63.9846 71.0077 64.0333 71.2958 63.9774 71.5733C63.9089 71.8434 63.635 71.6409 63.2242 71.7084H47.5445C46.4489 71.7084 45.6958 71.6409 45.2165 70.9656C43.7786 68.1295 42.2722 65.361 40.8344 62.5249C39.3965 59.6889 37.8217 56.9203 36.1784 54.0167C34.5351 51.1131 32.8918 48.2095 31.2485 45.2384H31.1115C29.6737 48.142 28.0988 51.0456 26.524 53.9492C24.9492 56.8528 23.3744 59.7564 21.868 62.5924C20.3617 65.4285 18.7184 68.3321 17.1436 71.1007C16.8697 71.7759 16.3219 71.8434 15.5687 71.8434H0.505239C0.231357 71.8434 0.0259455 71.9785 0.0259455 71.6409C-0.0046133 71.5145 -0.00822106 71.3832 0.0153515 71.2553C0.0389241 71.1274 0.0891638 71.0058 0.162887 70.8981L21.4572 36.4601L0.71065 1.81957C0.505239 1.54947 0.436768 1.27936 0.573709 1.14431C0.657188 1.04805 0.763095 0.973185 0.882349 0.926142C1.0016 0.879099 1.13064 0.861278 1.25841 0.87421H16.8012C17.1251 0.881161 17.4469 0.926504 17.7598 1.00926C18.0341 1.15483 18.2689 1.36325 18.4445 1.61699C19.7454 4.52058 21.2518 7.42418 22.8266 10.3278C24.4014 13.2314 26.0447 16.0674 27.7565 18.9035C29.4683 21.7396 30.9061 24.5756 32.344 27.4792H32.481C33.9188 24.5081 35.4252 21.6045 36.9315 18.7684C38.4379 15.9324 40.0127 13.0963 41.5875 10.2602C43.1623 7.42418 44.6687 4.52058 46.1751 1.75204C46.227 1.48622 46.3725 1.24706 46.5859 1.07679C46.857 0.92926 47.1724 0.881403 47.476 0.941734H61.9233C62.0042 0.923819 62.0879 0.921844 62.1696 0.935923C62.2513 0.950002 62.3294 0.979858 62.3994 1.02378C62.4694 1.06769 62.5299 1.12481 62.5774 1.19185C62.625 1.25888 62.6586 1.33452 62.6764 1.41441C62.7449 1.48194 62.608 1.75204 62.471 1.88709Z'",
        color: "#0ACF83",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo pharetra dictum. Donec maximus tellus elit. In venenatis, lorem sed congue tristique, lectus libero porttitor ex, sed tempor nibh metus id justo. Suspendisse gravida sed nunc id pellentesque. Morbi non hendrerit nisi. Praesent nec quam ac purus efficitur interdum. Nulla id leo eu est tincidunt fringilla vel sed eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum magna, gravida at luctus ac, vestibulum nec risus. Aenean semper ex at felis ultricies euismod. Nulla ullamcorper tincidunt libero, at auctor enim auctor a. Sed sit amet lacinia mi. Donec vitae luctus dolor, in efficitur metus. Fusce auctor posuere mi eget faucibus. Sed id tristique nulla.",
      },
      {
        name: "adobe xd",
        icon: "fa-css3-alt",
        color: "#FF61F6",
        description: "lorem ipsum",
      },
      {
        name: "photoshop",
        icon: "fa-vuejs",
        color: "#31A8FF",
        description: "lorem ipsum",
      },
      {
        name: "Illustrator",
        icon: "fa-react",
        color: "#DDA619",
        description: "lorem ipsum",
      },
      {
        name: "Premiere Pro",
        icon: "fa-square-js",
        color: "#8EA0FA",
        description: "lorem ipsum",
      },
      {
        name: "After Effects",
        icon: "fa-wordpress",
        color: "#8D95F2",
        description: "lorem ipsum",
      },
    ],
  }),

  actions: {},

  getters: {},
});
