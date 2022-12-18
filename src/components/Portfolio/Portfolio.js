import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { slideIn, staggerContainer } from "../../utils/motion";
import Heading from "../Heading";
import { ThemeContext } from "../../Theme";
import { PortfolioData } from "./PortfolioData";

const Portfolio = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const [current, setCurrent] = useState(0);
  const length = PortfolioData.length;

  const delay = 7000;
  const timeOutRef = useRef();

  function resetTimeout() {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeOutRef.current = setTimeout(
      () => setCurrent((current) => (current === length - 1 ? 0 : current + 1)),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="portfolio relative flex flex-col justify-center pt-10 pb-16"
    >
      <Heading
        size="h1"
        className={
          theme === "dark"
            ? "text-white mx-auto mt-8 my-16"
            : "text-slate-600 mx-auto mt-8 my-16"
        }
      >
        Nasze realizacje
        <div className="w-26 h-2 bg-gradient-to-r from-orange-100 to-transparent"></div>
      </Heading>
      <div className="mx-auto w-4/5 h-[400px] md:h-[500px] relative mb-2">
        {PortfolioData.map((slide, index) => {
          return (
            <div className="w-full" key={index}>
              {index === current && (
                <motion.div
                  animate={{ opacity: [0, 1], x: [100, 0] }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="flex justify-center"
                >
                  <div
                    className={
                      theme === "dark"
                        ? "flex justify-center min-h-[500px] w-full bg-navy-400/40 rounded-2xl"
                        : "flex justify-center min-h-[500px] w-full bg-[#dfe3e8] rounded-2xl"
                    }
                  >
                    <Heading
                      size="h2"
                      className={
                        theme === "dark" ? "text-white" : "text-slate-600"
                      }
                    >
                      {slide.title}
                    </Heading>
                  </div>
                  <div className="z-10 w-[400px] absolute -top-10 -left-10 rounded-xl overflow-hidden">
                    <img src={slide.src} />
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
        <div
          className="absolute top-1/2 cursor-pointer left-6 md:left-1/5"
          onClick={prevSlide}
        >
          <svg
            width="16"
            height="26"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.20711 0.792891C7.59763 1.18342 7.59763 1.81658 7.20711 2.20711L2.91418 6.50001L7.20711 10.7929C7.59763 11.1834 7.59763 11.8166 7.20711 12.2071C6.81658 12.5976 6.1834 12.5976 5.79289 12.2071L0.792876 7.20711C0.402375 6.81661 0.402375 6.18341 0.792876 5.79291L5.79289 0.792891C6.1834 0.40237 6.81658 0.40237 7.20711 0.792891Z"
              fill={theme === "dark" ? "#FFFFFF" : "#000000"}
            />
          </svg>
        </div>
        <div
          className="absolute top-1/2 cursor-pointer right-6 md:right-1/5"
          onClick={nextSlide}
        >
          <svg
            width="16"
            height="26"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.792891 0.792891C0.40237 1.18342 0.40237 1.81658 0.792891 2.20711L5.08582 6.50001L0.792891 10.7929C0.40237 11.1834 0.40237 11.8166 0.792891 12.2071C1.18342 12.5976 1.8166 12.5976 2.20711 12.2071L7.20712 7.20711C7.59763 6.81661 7.59763 6.18341 7.20712 5.79291L2.20711 0.792891C1.8166 0.40237 1.18342 0.40237 0.792891 0.792891Z"
              fill={theme === "dark" ? "#FFFFFF" : "#000000"}
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
