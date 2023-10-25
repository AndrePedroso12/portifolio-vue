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
