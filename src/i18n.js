import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome on company site eRZet - Piotr Rzadkowolski",
    },
  },
  pl: {
    translation: {
      welcome: "Witaj na stronie firmy eRZet - Piotr Rzadkowolski",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
