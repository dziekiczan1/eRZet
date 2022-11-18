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
        <div className="arrow bounce absolute">
          <svg width="36px" height="36px" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M10,4H14V13L17.5,9.5L19.92,11.92L12,19.84L4.08,11.92L6.5,9.5L10,13V4Z"
            />
          </svg>
        </div>
        <div className="bg-navy-500 w-full">
          <div className="h-full flex flex-col justify-center py-20">
            <h1 className="text-white text-center text-3xl font-bold mb-8">
              {t("welcome")}
            </h1>

            <div className="mx-auto w-3/4 flex justify-between gap-20">
              <div className="container flex justify-center items-center">
                <div className="drop">
                  <div className="content">
                    <h2>
                      <svg width="34px" height="34px" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
                        />
                      </svg>
                    </h2>
                    <p>
                      lorem ipsum dolor sit amet consecteu lorem ipsum dolor sit
                      amet consecteu
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="container flex justify-center items-center">
                <div className="drop">
                  <div className="content">
                    <h2>
                      <svg width="34px" height="34px" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
                        />
                      </svg>
                    </h2>
                    <p>
                      lorem ipsum dolor sit amet consecteu lorem ipsum dolor sit
                      amet consecteu
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="container flex justify-center items-center">
                <div className="drop">
                  <div className="content">
                    <h2>
                      <svg width="34px" height="34px" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
                        />
                      </svg>
                    </h2>
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
        </div>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default App;
