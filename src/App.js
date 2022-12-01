import React, { useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "./Theme";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Arrow from "./components/Arrow";

const App = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="relative flex justify-center">
        <div className="indicator absolute -top-[60px]"></div>
        <Arrow color={"#0adab9"} props={executeScroll} />
        <div className="bg-navy-500 w-full">
          <About innerRef={myRef} />
        </div>
        {theme === "dark" ? "moj theme jest czorny" : "moj theme jest biały"}
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default App;
