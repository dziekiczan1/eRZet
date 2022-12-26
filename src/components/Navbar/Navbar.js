// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../Theme";

import {
  slideIn,
  zoomIn,
  staggerContainer,
  textVariant,
} from "../../utils/motion";
import Toggle from "../Toggle";
import MainMenu from "../Navbar/MainMenu";
import menuItems from "../Navbar/MenuItems";
import LanguageSwitcher from "../Navbar/LanguageSwitcher";

import logo from "../../assets/logo.webp";
import logoDark from "../../assets/logo_dark.webp";
import goldRec from "../../assets/goldrec.webp";
import azureRec from "../../assets/azurerec.webp";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-col items-center relative navbar overflow-hidden"
    >
      <motion.img
        variants={zoomIn(0.4, 1)}
        animate={{ rotate: 270 }}
        src={goldRec}
        alt="Header Background Image Gold"
        className="hidden lg:block absolute w-auto h-[18rem] 2xl:h-[24rem] bottom-10 right-0 2xl:right-16 select-none"
      />
      <motion.img
        variants={slideIn("left", "tween", 0, 0.3)}
        src={azureRec}
        alt="Header Background Image Azure"
        className="hidden lg:block absolute w-auto h-[22rem] 2xl:h-[24rem] left-6 2xl:left-16 top-0 select-none"
      />
      <motion.div
        className="flex justify-center w-full mb-8"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <div className="w-full flex justify-between lg:w-3/4 text-xs text-white font-bold px-2 lg:px-0 py-4">
          <div className="flex flex-row gap-4 py-2 px-6 items-center rounded-base shadow-baseSh">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-row gap-4 py-2 px-6 items-center rounded-base shadow-baseSh">
            <Toggle />
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center relative w-full px-4 lg:px-0 lg:w-1/2 mb-0 lg:mb-8 select-none">
        <motion.img
          variants={textVariant(0.5)}
          src={theme === "dark" ? logo : logoDark}
          alt="eRZet"
          className="w-auto h-auto z-50"
        />
      </div>
      <MainMenu menuItems={menuItems} />
    </motion.nav>
  );
};

export default Navbar;
