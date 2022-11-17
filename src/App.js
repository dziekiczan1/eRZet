import Navbar from "./components/Navbar/Navbar";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="relative flex justify-center">
        <div className="indicator absolute -top-[60px]"></div>
        <div className="h-[500px] bg-navy-500 w-full">
          <div className="h-full flex justify-center pt-20">
            <h1 className="text-white text-3xl font-bold">{t("welcome")}</h1>
            <div className="container">
              <div className="drop">
                <div className="content">
                  <h2>01</h2>
                  <p>
                    lorem ipsum dolor sit amet consecteu lorem ipsum dolor sit
                    amet consecteu
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default App;
