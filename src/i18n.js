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
      writeUs: "Write to us!",
      sendSuccess: "Your message has been successfully sent!",
      sendError:
        "Oops! Looks like there is a problem while sending your message! Please, try again.",
      fullName: "Full Name",
      emailAddress: "Email Address",
      subject: "Choose Subject",
      message: "Message",
      aboutDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque nisl in interdum condimentum. Cras aliquet turpis nunc, eget sagittis eros efficitur eget. In interdum, nisi nec volutpat tincidunt, risus ex pellentesque quam, nec porttitor arcu eros vel ex. Curabitur viverra nibh posuere risus luctus convallis. Nunc malesuada eros lobortis erat facilisis sodales. Vivamus luctus arcu sed lacus blandit aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque nisl in interdum condimentum. Cras aliquet turpis nunc, eget sagittis eros efficitur eget. In interdum, nisi nec volutpat tincidunt, risus ex pellentesque quam, nec porttitor arcu eros vel ex. Curabitur viverra nibh posuere risus luctus convallis. Nunc malesuada eros lobortis erat facilisis sodales. Vivamus luctus arcu sed lacus blandit aliquam.",
      projectRecOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque nisl in interdum condimentum. Cras aliquet turpis nunc, eget sagittis eros efficitur eget. In interdum, nisi nec volutpat tincidunt, risus ex pellentesque quam, nec porttitor arcu eros vel ex.",
      projectRecTwo:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      projectRecThree:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
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
      writeUs: "Napisz do nas!",
      sendSuccess: "Twoja wiadomość została wysłana",
      sendError: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie",
      fullName: "Imię i nazwisko",
      emailAddress: "Adres email",
      subject: "Wybierz temat",
      message: "Wiadomość",
      aboutDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque nisl in interdum condimentum. Cras aliquet turpis nunc, eget sagittis eros efficitur eget. In interdum, nisi nec volutpat tincidunt, risus ex pellentesque quam, nec porttitor arcu eros vel ex. Curabitur viverra nibh posuere risus luctus convallis. Nunc malesuada eros lobortis erat facilisis sodales. Vivamus luctus arcu sed lacus blandit aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque nisl in interdum condimentum. Cras aliquet turpis nunc, eget sagittis eros efficitur eget. In interdum, nisi nec volutpat tincidunt, risus ex pellentesque quam, nec porttitor arcu eros vel ex. Curabitur viverra nibh posuere risus luctus convallis. Nunc malesuada eros lobortis erat facilisis sodales. Vivamus luctus arcu sed lacus blandit aliquam.",
      projectRecOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque nisl in interdum condimentum. Cras aliquet turpis nunc, eget sagittis eros efficitur eget. In interdum, nisi nec volutpat tincidunt, risus ex pellentesque quam, nec porttitor arcu eros vel ex.",
      projectRecTwo:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      projectRecThree:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
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
