// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";

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

import logo from "../../assets/logo.png";
import goldRec from "../../assets/goldrec.png";
import azureRec from "../../assets/azurerec.png";

const Navbar = () => {
  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-col items-center relative overflow-hidden navbar"
    >
      <motion.img
        variants={zoomIn(0.4, 1)}
        animate={{ rotate: 270 }}
        src={goldRec}
        alt=""
        className="absolute h-[18rem] 2xl:h-[24rem] bottom-10 right-0 2xl:right-16"
      />
      <motion.img
        variants={slideIn("left", "tween", 0, 0.3)}
        src={azureRec}
        alt=""
        className="absolute h-[22rem] 2xl:h-[24rem] left-6 2xl:left-16 top-0"
      />
      <motion.div
        className="flex justify-center w-full mb-8"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <div className="flex justify-between w-3/4 text-xs text-white font-bold py-4">
          <div className="flex flex-row gap-4 py-2 px-6 items-center rounded-base shadow-baseSh">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-row gap-4 py-2 px-6 items-center rounded-base shadow-baseSh">
            <Toggle />
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center relative w-1/2 mb-8 select-none">
        <motion.img
          variants={textVariant(0.5)}
          src={logo}
          alt="eRZet"
          className="z-50"
        />
      </div>
      <MainMenu menuItems={menuItems} />
    </motion.nav>
  );
};

export default Navbar;
