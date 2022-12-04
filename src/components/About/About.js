// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Heading from "../Heading";
import Drop from "./Drop";
import dropItems from "./DropItems";
import { staggerContainer } from "../../utils/motion";

const About = ({ innerRef }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="h-full flex flex-col justify-center py-20 z-20"
      ref={innerRef}
    >
      <Heading size="h1" className="mb-8">
        {t("welcome")}
      </Heading>
      <div className="mx-auto w-3/4 flex flex-wrap justify-center 2xl:flex-nowrap 2xl:justify-between gap-10 2xl:gap-20">
        <Drop dropItems={dropItems} />
      </div>
    </motion.div>
  );
};

export default About;
