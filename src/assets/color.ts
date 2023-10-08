import _ from "lodash";
import { nextTick, ref } from "vue";
import { colors } from "@/static/js/colors.js";
import { useStore } from "@/stores/Store";
import { useStorage } from "./storage";

const changing = ref(false);

export const useColor = () => {
  const store = useStore();
  const storageComposable = useStorage();

  function init() {
    const darkMode = !!storageComposable.get("darkMode");
    setDarkMode(darkMode);
    setColors();
  }

  function setColors() {
    changing.value = true;
    _.forEach(colors, (list, type) => {
      if (type == "dark" && !store.getDarkMode) return;
      const el = document.querySelector(":root") as any;
      _.forEach(list, (hex, name) => {
        el.style.setProperty(`--${name}`, hex);
      });
    });
    nextTick(() => (changing.value = false));
  }

  function getByName(colorName: string) {
    if (!colorName || changing.value) return "";
    return (
      getComputedStyle(document.documentElement).getPropertyValue(
        `--${colorName}`
      ) || colorName
    );
  }

  function setDarkMode(value: boolean) {
    store.setDarkMode(value);
    storageComposable.set("darkMode", value);
  }

  function toggleDarkMode() {
    const value = !store.getDarkMode;
    setDarkMode(value);
    setColors();
  }

  return { init, getByName, toggleDarkMode };
};
