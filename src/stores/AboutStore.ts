import { defineStore } from "pinia";

export const useAboutStore = defineStore("aboutNumbers", {
  state: () => ({
    aboutNumbers: [
      {
        name: "Anos de Experiencia",
        number: 8,
      },
      {
        name: "Sites Publicados",
        number: 54,
      },
      { name: "Clientes Atendidos", number: 36 },
      { name: "Linhas de Codigo", number: 200 },
    ],
  }),

  actions: {},

  getters: {},
});
