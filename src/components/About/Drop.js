import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import dropItems from "./DropItems";
import { zoomIn } from "../../utils/motion";
import { ThemeContext } from "../../Theme";

const Drop = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Heading
        size="h1"
        className={
          theme === "dark"
            ? "text-white text-center mx-auto my-4 md:my-8 px-4 md:px-0"
            : "text-slate-600 text-center mx-auto my-4 md:my-8 px-4 md:px-0"
        }
      >
        {t("values")}
        <div className="w-full h-2 bg-gradient-to-r from-orange-100 to-transparent"></div>
      </Heading>
      <div className="mx-auto w-full md:w-3/4 flex flex-col md:flex-row flex-wrap justify-center 2xl:flex-nowrap 2xl:justify-between gap-10 2xl:gap-20 pt-8 mb-8 md:mb-0">
        {dropItems?.map((drop) => (
          <motion.div
            variants={zoomIn(0.6, 0.6)}
            key={drop.id}
            className="w-auto flex justify-center items-center"
          >
            <div
              className={
                theme === "dark"
                  ? `${drop.bgColor} relative w-full md:w-[400px] md:h-[400px] ${drop.boxShadow} ${drop.borderRadius} ${drop.boxShadowAfter} after:absolute ${drop.afterTop} ${drop.afterLeft} ${drop.afterWidth} ${drop.afterHeight} after:rounded-full after:opacity-90 ${drop.boxShadowBefore} before:absolute ${drop.beforeTop} ${drop.beforeLeft} ${drop.beforeWidth} ${drop.beforeHeight} before:rounded-full before:opacity-90 duration-500 ease-in-out md:hover:rounded-full`
                  : `bg-light-100 relative w-full md:w-[400px] md:h-[400px] ${drop.boxShadow} ${drop.borderRadius} ${drop.boxShadowAfter} after:absolute ${drop.afterTop} ${drop.afterLeft} ${drop.afterWidth} ${drop.afterHeight} after:rounded-full after:opacity-90 ${drop.boxShadowBefore} before:absolute ${drop.beforeTop} ${drop.beforeLeft} ${drop.beforeWidth} ${drop.beforeHeight} before:rounded-full before:opacity-90 duration-500 ease-in-out md:hover:rounded-full`
              }
            >
              <div className="flex justify-center items-center flex-col text-center py-4 md:py-10 px-4 md:px-6 gap-2">
                <div
                  className={`w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full flex justify-center items-center text-2xl ${drop.logoColor} ${drop.logoBoxShadow} mt-0 md:mt-4 mb-4 md:mb-6`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-[25px] h-[25px] md:w-[34px] md:h-[34px]"
                  >
                    <path fill="currentColor" d={drop.svgD} />
                  </svg>
                </div>
                <div className="w-full">
                  <Heading
                    size="h2"
                    className={
                      theme === "dark" ? "text-white mb-2" : "text-black mb-2"
                    }
                  >
                    {t(drop.title)}
                  </Heading>
                  <p
                    className={
                      theme === "dark"
                        ? "text-white text-justify md:text-center text-sm px-0 md:px-6"
                        : "text-black text-justify md:text-center text-sm px-0 md:px-6"
                    }
                  >
                    {t(drop.content)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Drop;
