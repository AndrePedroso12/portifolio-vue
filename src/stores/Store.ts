// Pinia store module
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    // Your initial state here
    settings: {
      darkMode: true, // Example state property
    },
  }),

  actions: {
    // Your actions here
    setDarkMode(value: boolean) {
      this.settings.darkMode = value;
    },
  },

  getters: {
    // Your getters here
    getDarkMode(): boolean {
      return this.settings.darkMode;
    },
  },
});
