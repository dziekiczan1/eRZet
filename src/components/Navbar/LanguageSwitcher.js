import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="absolute w-3/4 flex justify-end gap-8 mt-6">
      <div
        onClick={() => {
          i18n.changeLanguage("pl");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 10"
          width="48"
          height="30"
        >
          <path fill="#fff" d="M0 0h16v10H0z" />
          <path fill="#dc143c" d="M0 5h16v5H0z" />
        </svg>
      </div>
      <div
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 30"
          width="48"
          height="30"
        >
          <clipPath id="a">
            <path d="M0 0v30h60V0z" />
          </clipPath>
          <clipPath id="b">
            <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
          </clipPath>
          <g clip-path="url(#a)">
            <path d="M0 0v30h60V0z" fill="#012169" />
            <path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6" />
            <path
              d="M0 0l60 30m0-30L0 30"
              clip-path="url(#b)"
              stroke="#C8102E"
              stroke-width="4"
            />
            <path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10" />
            <path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
