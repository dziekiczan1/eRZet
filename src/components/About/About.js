// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import Drop from "./Drop";
import dropItems from "./DropItems";
import { staggerContainer, zoomIn } from "../../utils/motion";
import { ThemeContext } from "../../Theme";
import aboutLogo from "../../assets/about-logo.svg";

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
      <div className="flex flex-row w-full mb-6">
        <div className="w-1/2 ml-4 px-8 pt-8 rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-br-xl border-b-4 border-[#b9afaf] border-r-4 border-[#b9afaf]">
          <motion.img
            variants={zoomIn(0.4, 1)}
            src={aboutLogo}
            alt="eRZet - About us"
            className=""
          />
        </div>
        <div className="w-1/2"></div>
      </div>
      <div className="mx-auto w-3/4 flex flex-wrap justify-center 2xl:flex-nowrap 2xl:justify-between gap-10 2xl:gap-20">
        <Drop dropItems={dropItems} />
      </div>
    </motion.div>
  );
};

export default About;
