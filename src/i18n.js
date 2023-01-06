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
      pricelist: "Pricing",
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
      aboutDescriptionOne:
        "eRZet is a company that designs and creates websites for various industries. From the beginning of our activity, we have focused on providing the highest quality services, tailored to the individual needs of our clients. Our team consists of experienced specialists who have extensive knowledge in the field of website development. Thanks to their commitment and professionalism, we are able to provide our clients with the best solutions.",
      aboutDescriptionTwo:
        "Our mission is to provide websites that meet the requirements of our clients and help them develop their business. We believe that a good website is the basis for success in today's world. Therefore, we approach each order individually and try to provide our clients with the best solutions.",
      projectRecOne:
        "eRZet is a unique company that offers extremely professional services. I am impressed by their knowledge, experience and commitment to each order. The eRZet team always tries to understand the needs of its customers and adapt to their expectations.",
      projectRecTwo:
        "I would like to recommend eRZet as a unique company that offers extremely professional services. The eRZet team is very experienced and knowledgeable in their field. They are always willing to help and advise the best solutions for their clients.",
      projectRecThree:
        "I am very satisfied with the services provided by eRZet. The eRZet team is extremely professional and reliable, and their work always meets my expectations. I highly recommend eRZet for anyone looking for the best services in their industry.",
      singlePageAppWithDesign: "Single Page Application + design",
      multiPageAppWithDesign: "Multi Page Application + design",
      singlePageApp: "Single Page Application",
      multiPageApp: "Multi Page Application",
      eCommerce: "E-commerce",
      blogWebsite: "Blog Website",
      other: "Other",
      pricingInfo:
        "Feel free to contact us to arrange details regarding website design. We set the price individually for each client, taking into account their needs and expectations. We will be happy to answer any questions and help you choose the best option for your company.",
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
      aboutDescriptionOne:
        "eRZet to firma zajmująca się projektowaniem i tworzeniem stron internetowych dla różnych branż. Od początku naszej działalności skupiamy się na świadczeniu najwyższej jakości usług, dostosowanych do indywidualnych potrzeb naszych klientów. Nasz zespół składa się z doświadczonych specjalistów, którzy posiadają ogromną wiedzę z zakresu tworzenia stron internetowych. Dzięki ich zaangażowaniu i profesjonalizmowi jesteśmy w stanie zapewnić naszym klientom najlepsze rozwiązania.",
      aboutDescriptionTwo:
        "Naszą misją jest dostarczanie stron internetowych, które spełniają wymagania naszych klientów i pomagają im w rozwoju ich biznesu. Wierzymy, że dobra strona internetowa to podstawa sukcesu w dzisiejszym świecie. Dlatego też do każdego zlecenia podchodzimy indywidualnie i staramy się zapewnić naszym klientom najlepsze rozwiązania.",
      projectRecOne:
        "eRZet to wyjątkowa firma, która oferuje niezwykle profesjonalne usługi. Jestem pod wrażeniem ich wiedzy, doświadczenia i zaangażowania w każde zlecenie. Zespół eRZet zawsze stara się zrozumieć potrzeby swoich klientów i dostosować się do ich oczekiwań.",
      projectRecTwo:
        "Chciałbym polecić eRZet jako wyjątkową firmę, która oferuje niezwykle profesjonalne usługi. Zespół eRZet jest bardzo doświadczony i posiada ogromną wiedzę w swojej dziedzinie. Zawsze chętnie służą pomocą i doradzają najlepsze rozwiązania dla swoich klientów.",
      projectRecThree:
        "Jestem bardzo zadowolona z usług świadczonych przez eRZet. Zespół eRZet jest niezwykle profesjonalny i rzetelny, a ich praca zawsze spełnia moje oczekiwania. Gorąco polecam eRZet dla każdego, kto szuka najlepszych usług w swojej branży.",
      pricingContent:
        "W naszej firmie cenimy indywidualne potrzeby naszych klientów i dlatego każdą ofertę rozpatrujemy osobno, starając się dobrać optymalne rozwiązania dopasowane do ich indywidualnych potrzeb. Dzięki temu możemy zaproponować naszym klientom najlepsze możliwe warunki współpracy. Jesteśmy otwarci na rozmowy i chętnie służymy pomocą w doborze odpowiednich rozwiązań. Zachęcamy do kontaktu i zapraszamy do współpracy.",
      singlePageAppWithDesign: "Pojedyncza strona z projektem graficznym",
      multiPageAppWithDesign: "Multi strona z projektem graficznym",
      singlePageApp: "Pojedyncza strona z własną grafiką",
      multiPageApp: "Multi strona z własną grafiką",
      eCommerce: "e-Sklep",
      blogWebsite: "Strona Bloga",
      other: "Inne",
      pricingInfo:
        "Zapraszamy do kontaktu w celu ustalenia szczegółów dotyczących projektowania stron internetowych. Cenę ustalamy indywidualnie dla każdego klienta, biorąc pod uwagę jego potrzeby i oczekiwania. Chętnie odpowiemy na wszelkie pytania i pomożemy w doborze najlepszej opcji dla Państwa firmy.",
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
