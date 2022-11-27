import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome on company site eRZet - Piotr Rzadkowolski",
      home: "Home Page",
      about: "About Us",
      portfolio: "Portfolio",
      pricelist: "Price List",
      contact: "Contact",
      punctuality: "Punctuality",
      modernity: "Modernity",
      accuracy: "Accuracy",
    },
  },
  pl: {
    translation: {
      welcome: "Witaj na stronie firmy eRZet - Piotr Rzadkowolski",
      home: "Strona Główna",
      about: "O nas",
      portfolio: "Realizacje",
      pricelist: "Cennik",
      contact: "Kontakt",
      punctuality: "Punktualność",
      modernity: "Nowoczesność",
      accuracy: "Dokładność",
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
