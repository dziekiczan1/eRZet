// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import Drop from "./Drop";
import dropItems from "./DropItems";
import { staggerContainer } from "../../utils/motion";
import { ThemeContext } from "../../Theme";

const About = ({ innerRef }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="h-full flex flex-col justify-center py-20 z-20"
      ref={innerRef}
    >
      <Heading
        size="h1"
        className={
          theme === "dark"
            ? "text-white mx-auto my-8"
            : "text-slate-600 mx-auto my-8"
        }
      >
        {t("welcome")}
        <div class="w-26 h-2 bg-gradient-to-r from-orange-100 to-transparent"></div>
      </Heading>
      {/* <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg2"
          viewBox="0 0 135 135"
          version="1.0"
          width="450"
          className="relative z-30"
        >
          <g id="layer1" transform="translate(-7.0988 2.0414)">
            <path
              id="path2431"
              d="m-0.40625 0c-0.35725 37.598-0.11976 66.427 0 106.59l44.906 0.79c1.605 4.09 5.103 14.24 4.094 18-0.6 0.55-2.873 0.89-8 1.18-15.32 0.89-22.973 3.08-20.469 5.85 0.847 0.93 7.295 2.22 13.531 2.71 2.633 0.21 19.223 0.37 36.875 0.35 32.609-0.04 37.609-0.29 42.309-2.09 1.96-0.75 2.51-2.2 1.19-3.16-2.25-1.64-14.983-3.75-22.624-3.75-5.701 0-7.854-0.92-7.5-3.25 0.57-3.75 3.42-15.13 3.938-15.72l47.436-0.91-0.5-106.59h-135.19zm7.4374 6.2188h121.25v91.25h-121.25l0.0012-91.25zm59.594 94.191c1.575 0 2.844 1.15 2.844 2.59s-1.269 2.62-2.844 2.62-2.844-1.18-2.844-2.62 1.269-2.59 2.844-2.59zm51.345 1.97c0.65 0 1.19 0.46 1.19 1.06s-0.54 1.09-1.19 1.09-1.19-0.49-1.19-1.09 0.54-1.06 1.19-1.06zm3.06 0c0.65 0 1.19 0.46 1.19 1.06s-0.54 1.09-1.19 1.09-1.19-0.49-1.19-1.09 0.54-1.06 1.19-1.06zm3.09 0c0.66 0 1.16 0.46 1.16 1.06s-0.5 1.09-1.16 1.09c-0.65 0-1.18-0.49-1.18-1.09s0.53-1.06 1.18-1.06zm3.07 0c0.65 0 1.19 0.46 1.19 1.06s-0.54 1.09-1.19 1.09c-0.66 0-1.19-0.49-1.19-1.09s0.53-1.06 1.19-1.06zm-68.69 4.96l15.531 0.07c0 1.65-3.049 14.52-3.656 14.87-1.143 2.83-6.379 4.46-7.5 0.13-0.287-1.11-4.375-12.82-4.375-15.07z"
              transform="translate(7.0988 -2.0414)"
              fill="#c0c0c0"
            />
          </g>
        </svg>
        <img
          src={desktop}
          className="z-10 absolute top-5 left-5 w-[410px] h-[310px]"
        />
      </div> */}
      <div className="mx-auto w-3/4 flex flex-wrap justify-center 2xl:flex-nowrap 2xl:justify-between gap-10 2xl:gap-20">
        <Drop dropItems={dropItems} />
      </div>
    </motion.div>
  );
};

export default About;
