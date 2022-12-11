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
      {dropItems?.map((drop) => (
        <motion.div
          variants={zoomIn(0.2, 0.6)}
          key={drop.id}
          className="w-auto flex justify-center items-center"
        >
          <div
            className={
              theme === "dark"
                ? `${drop.bgColor} relative w-[400px] h-[400px] ${drop.boxShadow} ${drop.borderRadius} ${drop.boxShadowAfter} after:absolute ${drop.afterTop} ${drop.afterLeft} ${drop.afterWidth} ${drop.afterHeight} after:rounded-full after:opacity-90 ${drop.boxShadowBefore} before:absolute ${drop.beforeTop} ${drop.beforeLeft} ${drop.beforeWidth} ${drop.beforeHeight} before:rounded-full before:opacity-90 duration-500 ease-in-out hover:rounded-full`
                : `bg-light-100 relative w-[400px] h-[400px] ${drop.boxShadow} ${drop.borderRadius} ${drop.boxShadowAfter} after:absolute ${drop.afterTop} ${drop.afterLeft} ${drop.afterWidth} ${drop.afterHeight} after:rounded-full after:opacity-90 ${drop.boxShadowBefore} before:absolute ${drop.beforeTop} ${drop.beforeLeft} ${drop.beforeWidth} ${drop.beforeHeight} before:rounded-full before:opacity-90 duration-500 ease-in-out hover:rounded-full`
            }
          >
            <div className="flex justify-center items-center flex-col text-center py-10 px-6 gap-2">
              <div
                className={`w-[80px] h-[80px] rounded-full flex justify-center items-center text-2xl ${drop.logoColor} ${drop.logoBoxShadow} mt-4 mb-6`}
              >
                <svg width="34px" height="34px" viewBox="0 0 24 24">
                  <path fill="currentColor" d={drop.svgD} />
                </svg>
              </div>
              <div>
                <Heading
                  size="h3"
                  className={
                    theme === "dark" ? "text-white mb-2" : "text-black mb-2"
                  }
                >
                  {t(drop.title)}
                </Heading>
                <p
                  className={
                    theme === "dark"
                      ? "text-white text-center text-sm px-6"
                      : "text-black text-center text-sm px-6"
                  }
                >
                  {t(drop.content)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Drop;
