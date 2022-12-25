// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";

import Description from "./Description";
import Drop from "./Drop";
import dropItems from "./DropItems";
import { staggerContainer } from "../../utils/motion";

const About = ({ innerRef }) => {
  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={
        isMobile ? { once: false, amount: 0.1 } : { once: false, amount: 0.4 }
      }
      className="h-full flex flex-col justify-center pt-20 pb-0 lg:pb-12 z-20 overflow-hidden"
      ref={innerRef}
    >
      <Description />
      <Drop dropItems={dropItems} />
    </motion.div>
  );
};

export default About;
