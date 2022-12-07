import React, { useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "./Theme";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Arrow from "./components/Arrow";
import Footer from "./components/Footer";

const App = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <>
      <header className={theme === "dark" ? "bg-navy-700" : "bg-light-100"}>
        <Navbar />
      </header>
      <main className="relative flex justify-center">
        <div
          className={
            theme === "dark"
              ? "indicator bg-navy-700 border-[6px] border-navy-700 after:shadow-indicator before:shadow-indicator absolute -top-[60px]"
              : "indicator bg-light-100 border-[6px] border-light-100 after:shadow-indicatorLight before:shadow-indicatorLight absolute -top-[60px]"
          }
        ></div>
        <Arrow color={"#0adab9"} props={executeScroll} />
        <div
          className={
            theme === "dark" ? "bg-navy-500 w-full" : "bg-[#dfe3e8] w-full"
          }
        >
          <About innerRef={myRef} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
