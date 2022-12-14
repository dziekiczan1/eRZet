// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import Drop from "./Drop";
import dropItems from "./DropItems";
import { staggerContainer, zoomIn, slideIn } from "../../utils/motion";
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
      viewport={{ once: false, amount: 0.4 }}
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
      <div className="flex flex-row w-full mb-12">
        <div className="flex justify-center w-1/2 ml-4 px-8 pt-8">
          <div className="bg-gradient-to-t from-light-100 to-transparent rounded-xl border-b-4 border-b-[#475569] px-4">
            <motion.img
              variants={zoomIn(0.4, 0.6)}
              src={aboutLogo}
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
              theme === "dark" ? "text-white mb-8" : "text-slate-600 mb-8"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque nisl in interdum condimentum. Cras aliquet turpis nunc,
            eget sagittis eros efficitur eget. In interdum, nisi nec volutpat
            tincidunt, risus ex pellentesque quam, nec porttitor arcu eros vel
            ex. Curabitur viverra nibh posuere risus luctus convallis. Nunc
            malesuada eros lobortis erat facilisis sodales. Vivamus luctus arcu
            sed lacus blandit aliquam. Nunc rutrum tristique sapien sit amet
            dictum. Pellentesque sed pharetra arcu, at pharetra purus. Phasellus
            convallis mi ipsum, nec vehicula eros vestibulum a. Nunc scelerisque
            diam at tortor facilisis volutpat sed non turpis. Pellentesque at
            elit lobortis, imperdiet lacus eu, molestie massa. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed auctor dictum est at consequat. Aliquam eu ipsum
            tortor. Phasellus enim est, gravida vitae tincidunt sed, faucibus
            sed dolor. Duis odio velit, varius et posuere vitae, pellentesque
            condimentum sem.
          </p>
          <button className="bg-navy-700 p-4 text-white text-bold">
            Napisz do nas!
          </button>
        </motion.div>
      </div>
      <div className="mx-auto w-3/4 flex flex-wrap justify-center 2xl:flex-nowrap 2xl:justify-between gap-10 2xl:gap-20">
        <Drop dropItems={dropItems} />
      </div>
    </motion.div>
  );
};

export default About;
