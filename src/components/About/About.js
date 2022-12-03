// @ts-nocheck
import React from "react";
import { useTranslation } from "react-i18next";
import Heading from "../Heading";
import Drop from "./Drop";
import dropItems from "./DropItems";

const About = ({ innerRef }) => {
  const { t } = useTranslation();

  return (
    <div
      className="h-full flex flex-col justify-center py-20 z-20"
      ref={innerRef}
    >
      <Heading size="h1" className="mb-8">
        {t("welcome")}
      </Heading>
      <div className="mx-auto w-3/4 flex flex-wrap justify-center 2xl:flex-nowrap 2xl:justify-between gap-10 2xl:gap-20">
        <Drop dropItems={dropItems} />
      </div>
      <ul className="relative jestemUl">
        <li className="relative jestemLi">
          <a className="jestemA" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
