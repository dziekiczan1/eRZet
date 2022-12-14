// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { textVariant, staggerContainer, slideIn } from "../utils/motion";

import Heading from "./Heading";
import { ThemeContext } from "../Theme";
import logo from "../assets/logo.png";
import logoDark from "../assets/logo_dark.png";
import iconFb from "../assets/footer/fb-logo.svg";
import iconIg from "../assets/footer/instagram-logo.svg";
import iconLi from "../assets/footer/linkedin-logo.svg";
import iconTw from "../assets/footer/twitter-logo.svg";
import iconEmail from "../assets/footer/email-logo.svg";
import iconPhone from "../assets/footer/phone-logo.svg";

const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className={
        theme === "dark"
          ? "flex flex-row w-full bg-navy-800 py-12 px-8"
          : "flex flex-row w-full bg-light-100 py-12 px-8"
      }
    >
      <div className="flex flex-col w-1/2">
        <div className="w-full flex flex-row gap-8">
          <div className="flex flex-col w-1/2">
            <motion.img
              variants={textVariant(0.2)}
              src={theme === "dark" ? logo : logoDark}
              alt="eRZet"
              className="z-10 w-3/4 mb-4"
            />
            <Heading
              size="h2"
              className={
                theme === "dark" ? "mb-4 text-white" : "mb-4 text-black"
              }
            >
              {t("erzet")}
            </Heading>
            <address
              className={
                theme === "dark"
                  ? "w-full text-white not-italic"
                  : "w-full text-black not-italic"
              }
            >
              <p>ul. Prowiantowa, nr 15, lok. 49</p>
              <p>15-707 Białystok</p>
              <p>NIP: 8513120222</p>
              <p>REGON: 523299221</p>
            </address>
          </div>
          <motion.div
            className="w-1/2 overflow-hidden"
            variants={slideIn("right", "tween", 0, 0.6)}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.6922176289754!2d23.12483401588338!3d53.133670398320895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc73f5083fb5%3A0xf094a0bc90dd9ff8!2sProwiantowa%2C%20Bia%C5%82ystok!5e0!3m2!1spl!2spl!4v1670157302884!5m2!1spl!2spl"
              width="400"
              height="250"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
      <div className="border-l border-orange-100/20 mx-16"></div>
      <div className="flex flex-col w-1/2">
        <div className="flex flex-col mb-8">
          <Heading
            size="h2"
            className={theme === "dark" ? "text-white mb-8" : "text-black mb-6"}
          >
            {t("contactUs")}
            <div class="w-[15rem] h-1 bg-gradient-to-r from-orange-100 to-transparent"></div>
          </Heading>
          <motion.div
            className="flex flex-row items-center gap-4 mb-4"
            variants={textVariant(0.2)}
          >
            <img src={iconPhone} alt="eRZet Phone Number" width={30} />
            <p className="text-xl">505 - 933 - 394</p>
          </motion.div>
          <motion.div
            className="flex flex-row items-center gap-4 "
            variants={textVariant(0.2)}
          >
            <img src={iconEmail} alt="eRZet Email address" width={30} />
            <p className="text-xl">p.rzadkowolski@gmail.com</p>
          </motion.div>
        </div>
        <div className="flex flex-col">
          <Heading
            size="h2"
            className={theme === "dark" ? "text-white mb-8" : "text-black mb-6"}
          >
            {t("socialMedia")}
            <div class="w-[15rem] h-1 bg-gradient-to-r from-orange-100 to-transparent"></div>
          </Heading>
          <ul className="relative cursor-pointer list-none flex gap-8">
            <li>
              <motion.img
                variants={textVariant(0.2)}
                src={iconFb}
                alt="eRZet Facebook"
                width={50}
              />
            </li>
            <li>
              <motion.img
                variants={textVariant(0.2)}
                src={iconTw}
                alt="eRZet Facebook"
                width={50}
              />
            </li>
            <li>
              <motion.img
                variants={textVariant(0.2)}
                src={iconIg}
                alt="eRZet Facebook"
                width={50}
              />
            </li>
            <li>
              <motion.img
                variants={textVariant(0.2)}
                src={iconLi}
                alt="eRZet Facebook"
                width={50}
              />
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
