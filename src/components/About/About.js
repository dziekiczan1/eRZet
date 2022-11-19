import React from "react";
import { useTranslation } from "react-i18next";
import Heading from "../Heading";
import Drop from "./Drop";
import dropItems from "./DropItems";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full flex flex-col justify-center py-20">
      <Heading size="h1" className="mb-8">
        {t("welcome")}
      </Heading>
      <div className="mx-auto w-3/4 flex flex-wrap justify-center 2xl:flex-nowrap 2xl:justify-between gap-10 2xl:gap-20">
        <Drop dropItems={dropItems} />
      </div>
    </div>
  );
};

export default About;
