import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Arrow from "./components/Arrow";

const App = () => {
  const { t } = useTranslation();

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
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default App;
