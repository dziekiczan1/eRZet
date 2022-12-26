// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import Button from "../Button";
import { zoomIn, slideIn } from "../../utils/motion";
import { ThemeContext } from "../../Theme";
import aboutLogo from "../../assets/about-logo.svg";
import aboutLogoLight from "../../assets/about-logo-light.svg";

const Description = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Heading
        size="h1"
        className={
          theme === "dark"
            ? "text-white text-center mx-auto my-4 lg:my-8 px-4 lg:px-0"
            : "text-slate-600 text-center mx-auto my-4 lg:my-8 px-4 lg:px-0"
        }
      >
        {t("welcome")}
        <div className="w-full h-2 bg-gradient-to-r from-orange-100 to-transparent px-4 lg:px-0"></div>
      </Heading>
      <div className="flex flex-col lg:flex-row w-full mb-8 lg:mb-12">
        <div className="flex justify-center w-full lg:w-1/2 ml-0 lg:ml-4 px-4 lg:px-8 pt-8">
          <div
            className={
              theme === "dark"
                ? "bg-gradient-to-t from-navy-400 to-transparent rounded-xl border-b-4 border-b-[#bcbcbc]"
                : "bg-gradient-to-t from-light-100 to-transparent rounded-xl border-b-4 border-b-[#475569]"
            }
          >
            <motion.img
              variants={zoomIn(0.4, 0.6)}
              src={theme === "dark" ? aboutLogo : aboutLogoLight}
              alt="eRZet - About us"
              width={600}
              height={600}
              className="relative"
            />
          </div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0, 0.3)}
          className="flex flex-col font-semibold lg:text-base 2xl:text-xl justify-center items-center w-full lg:w-1/2 mr-4 px-4 lg:px-20 pt-2 lg:pt-8 text-justify"
        >
          <div
            className={
              theme === "dark"
                ? "flex flex-col gap-4 text-white mt-6 mb-8 lg:mt-8"
                : "flex flex-col gap-4 text-slate-600 mt-6 mb-8 lg:mt-8"
            }
          >
            <p>{t("aboutDescriptionOne")}</p>
            <p>{t("aboutDescriptionTwo")}</p>
          </div>
          <Button appearance={theme === "dark" ? "base" : "baseLight"}>
            <svg width={24} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19.7 12.9L14 18.6H11.7V16.3L17.4 10.6L19.7 12.9M23.1 12.1C23.1 12.4 22.8 12.7 22.5 13L20 15.5L19.1 14.6L21.7 12L21.1 11.4L20.4 12.1L18.1 9.8L20.3 7.7C20.5 7.5 20.9 7.5 21.2 7.7L22.6 9.1C22.8 9.3 22.8 9.7 22.6 10C22.4 10.2 22.2 10.4 22.2 10.6C22.2 10.8 22.4 11 22.6 11.2C22.9 11.5 23.2 11.8 23.1 12.1M3 20V4H10V9H15V10.5L17 8.5V8L11 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H15C16.1 22 17 21.1 17 20H3M11 17.1C10.8 17.1 10.6 17.2 10.5 17.2L10 15H8.5L6.4 16.7L7 14H5.5L4.5 19H6L8.9 16.4L9.5 18.7H10.5L11 18.6V17.1Z"
              />
            </svg>
            <p>{t("writeUs")}</p>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default Description;
