// @ts-nocheck
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Description from "./Description";
import Drop from "./Drop";
import dropItems from "./DropItems";
import { staggerContainer } from "../../utils/motion";
import { ThemeContext } from "../../Theme";

const About = ({ innerRef }) => {
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
      <Description />
      <Drop dropItems={dropItems} />
    </motion.div>
  );
};

export default About;
