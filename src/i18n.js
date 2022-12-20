import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      erzet: "eRZet - Piotr Rzadkowolski",
      welcome: "Welcome on company site eRZet - Piotr Rzadkowolski",
      home: "Home Page",
      about: "About Us",
      portfolio: "Portfolio",
      pricelist: "Price List",
      contact: "Contact",
      punctuality: "Punctuality",
      modernity: "Modernity",
      accuracy: "Accuracy",
      punctualityContent:
        "This is one of our most important features that we can be proud of. We respect the time of our clients, which is why we always ensure efficient and timely performance of the ordered services, maintaining the highest standards.",
      modernityContent:
        "Our company always adapts its products and services to the latest trends and technology available on the market, thanks to which we can provide our customers with the best solutions to meet their expectations.",
      accuracyContent:
        "We pay attention to the smallest details, thanks to which our projects are always at the highest possible level. We approach each client individually, which translates into the best quality of services offered.",
      socialMedia: "Social Media",
      contactUs: "Contact Us!",
      values: "Our values",
    },
  },
  pl: {
    translation: {
      erzet: "eRZet - Piotr Rzadkowolski",
      welcome: "Witaj na stronie firmy eRZet - Piotr Rzadkowolski",
      home: "Strona Główna",
      about: "O nas",
      portfolio: "Realizacje",
      pricelist: "Cennik",
      contact: "Kontakt",
      punctuality: "Terminowość",
      modernity: "Nowoczesność",
      accuracy: "Dokładność",
      punctualityContent:
        "To jedna z naszych najważniejszych cech, którą możemy się poszczycić. Szanujemy czas naszych klientów, dlatego zawsze zapewniamy sprawne oraz terminowe wykonanie zleconych usług z zachowaniem najwyższych standardów.",
      modernityContent:
        "Nasza firma zawsze dostosowuje swoje produkty i usługi do najnowszych trendów oraz technologii dostępnej na rynku, dzięki czemu możemy dostarczyć naszym klientom najlepsze rozwiązania, aby sprostać ich oczekiwaniom.",
      accuracyContent:
        "Przykładamy wagę do najdrobniejszych szczegółów, dzięki czemu nasze realizacje zawsze stoją na najwyższym możliwym poziomie. Do każdego klienta podchodzimy indywidualnie, co przekłada się na najlepszą jakość oferowanych usług.",
      socialMedia: "Media społecznościowe",
      contactUs: "Skontaktuj się z nami!",
      values: "Nasze wartości",
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
