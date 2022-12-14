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
      home: "Strona G????wna",
      about: "O nas",
      portfolio: "Realizacje",
      pricelist: "Cennik",
      contact: "Kontakt",
      punctuality: "Terminowo????",
      modernity: "Nowoczesno????",
      accuracy: "Dok??adno????",
      punctualityContent:
        "To jedna z naszych najwa??niejszych cech, kt??r?? mo??emy si?? poszczyci??. Szanujemy czas naszych klient??w, dlatego zawsze zapewniamy sprawne oraz terminowe wykonanie zleconych us??ug z zachowaniem najwy??szych standard??w.",
      modernityContent:
        "Nasza firma zawsze dostosowuje swoje produkty i us??ugi do najnowszych trend??w oraz technologii dost??pnej na rynku, dzi??ki czemu mo??emy dostarczy?? naszym klientom najlepsze rozwi??zania, aby sprosta?? ich oczekiwaniom.",
      accuracyContent:
        "Przyk??adamy wag?? do najdrobniejszych szczeg??????w, dzi??ki czemu nasze realizacje zawsze stoj?? na najwy??szym mo??liwym poziomie. Do ka??dego klienta podchodzimy indywidualnie, co przek??ada si?? na najlepsz?? jako???? oferowanych us??ug.",
      socialMedia: "Media spo??eczno??ciowe",
      contactUs: "Skontaktuj si?? z nami!",
      values: "Nasze warto??ci",
      writeUs: "Napisz do nas!",
      sendSuccess: "Twoja wiadomo???? zosta??a wys??ana",
      sendError: "Wyst??pi?? b????d podczas wysy??ania wiadomo??ci. Spr??buj ponownie",
      fullName: "Imi?? i nazwisko",
      emailAddress: "Adres email",
      subject: "Wybierz temat",
      message: "Wiadomo????",
      aboutDescriptionOne:
        "eRZet to firma zajmuj??ca si?? projektowaniem i tworzeniem stron internetowych dla r????nych bran??. Od pocz??tku naszej dzia??alno??ci skupiamy si?? na ??wiadczeniu najwy??szej jako??ci us??ug, dostosowanych do indywidualnych potrzeb naszych klient??w. Nasz zesp???? sk??ada si?? z do??wiadczonych specjalist??w, kt??rzy posiadaj?? ogromn?? wiedz?? z zakresu tworzenia stron internetowych. Dzi??ki ich zaanga??owaniu i profesjonalizmowi jeste??my w stanie zapewni?? naszym klientom najlepsze rozwi??zania.",
      aboutDescriptionTwo:
        "Nasz?? misj?? jest dostarczanie stron internetowych, kt??re spe??niaj?? wymagania naszych klient??w i pomagaj?? im w rozwoju ich biznesu. Wierzymy, ??e dobra strona internetowa to podstawa sukcesu w dzisiejszym ??wiecie. Dlatego te?? do ka??dego zlecenia podchodzimy indywidualnie i staramy si?? zapewni?? naszym klientom najlepsze rozwi??zania.",
      projectRecOne:
        "eRZet to wyj??tkowa firma, kt??ra oferuje niezwykle profesjonalne us??ugi. Jestem pod wra??eniem ich wiedzy, do??wiadczenia i zaanga??owania w ka??de zlecenie. Zesp???? eRZet zawsze stara si?? zrozumie?? potrzeby swoich klient??w i dostosowa?? si?? do ich oczekiwa??.",
      projectRecTwo:
        "Chcia??bym poleci?? eRZet jako wyj??tkow?? firm??, kt??ra oferuje niezwykle profesjonalne us??ugi. Zesp???? eRZet jest bardzo do??wiadczony i posiada ogromn?? wiedz?? w swojej dziedzinie. Zawsze ch??tnie s??u???? pomoc?? i doradzaj?? najlepsze rozwi??zania dla swoich klient??w.",
      projectRecThree:
        "Jestem bardzo zadowolona z us??ug ??wiadczonych przez eRZet. Zesp???? eRZet jest niezwykle profesjonalny i rzetelny, a ich praca zawsze spe??nia moje oczekiwania. Gor??co polecam eRZet dla ka??dego, kto szuka najlepszych us??ug w swojej bran??y.",
      pricingContent:
        "W naszej firmie cenimy indywidualne potrzeby naszych klient??w i dlatego ka??d?? ofert?? rozpatrujemy osobno, staraj??c si?? dobra?? optymalne rozwi??zania dopasowane do ich indywidualnych potrzeb. Dzi??ki temu mo??emy zaproponowa?? naszym klientom najlepsze mo??liwe warunki wsp????pracy. Jeste??my otwarci na rozmowy i ch??tnie s??u??ymy pomoc?? w doborze odpowiednich rozwi??za??. Zach??camy do kontaktu i zapraszamy do wsp????pracy.",
      singlePageAppWithDesign: "Pojedyncza strona z projektem graficznym",
      multiPageAppWithDesign: "Multi strona z projektem graficznym",
      singlePageApp: "Pojedyncza strona z w??asn?? grafik??",
      multiPageApp: "Multi strona z w??asn?? grafik??",
      eCommerce: "e-Sklep",
      blogWebsite: "Strona Bloga",
      other: "Inne",
      pricingInfo:
        "Zapraszamy do kontaktu w celu ustalenia szczeg??????w dotycz??cych projektowania stron internetowych. Cen?? ustalamy indywidualnie dla ka??dego klienta, bior??c pod uwag?? jego potrzeby i oczekiwania. Ch??tnie odpowiemy na wszelkie pytania i pomo??emy w doborze najlepszej opcji dla Pa??stwa firmy.",
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
