// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Heading from "../Heading";
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
            ? "text-white mx-auto my-8"
            : "text-slate-600 mx-auto my-8"
        }
      >
        {t("welcome")}
        <div class="w-26 h-2 bg-gradient-to-r from-orange-100 to-transparent"></div>
      </Heading>
      <div className="flex flex-row w-full mb-12">
        <div className="flex justify-center w-1/2 ml-4 px-8 pt-8">
          <div
            className={
              theme === "dark"
                ? "bg-gradient-to-t from-navy-400 to-transparent rounded-xl border-b-4 border-b-[#bcbcbc] px-4"
                : "bg-gradient-to-t from-light-100 to-transparent rounded-xl border-b-4 border-b-[#475569] px-4"
            }
          >
            <motion.img
              variants={zoomIn(0.4, 0.6)}
              src={theme === "dark" ? aboutLogo : aboutLogoLight}
              alt="eRZet - About us"
              width={600}
              className="relative"
            />
          </div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0, 0.3)}
          className="flex flex-col font-semibold md:text-base 2xl:text-xl justify-center items-center w-1/2 mr-4 px-20 pt-8 text-justify"
        >
          <p
            className={
              theme === "dark" ? "text-white my-8" : "text-slate-600 my-8"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque nisl in interdum condimentum. Cras aliquet turpis nunc,
            eget sagittis eros efficitur eget. In interdum, nisi nec volutpat
            tincidunt, risus ex pellentesque quam, nec porttitor arcu eros vel
            ex. Curabitur viverra nibh posuere risus luctus convallis. Nunc
            malesuada eros lobortis erat facilisis sodales. Vivamus luctus arcu
            sed lacus blandit aliquam. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec scelerisque nisl in interdum condimentum.
            Cras aliquet turpis nunc, eget sagittis eros efficitur eget. In
            interdum, nisi nec volutpat tincidunt, risus ex pellentesque quam,
            nec porttitor arcu eros vel ex. Curabitur viverra nibh posuere risus
            luctus convallis. Nunc malesuada eros lobortis erat facilisis
            sodales. Vivamus luctus arcu sed lacus blandit aliquam.
          </p>
          <button className="bg-navy-700 p-4 text-white text-bold">
            Napisz do nas!
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Description;
