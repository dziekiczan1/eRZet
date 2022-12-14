import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex justify-start items-center gap-2 z-20 cursor-pointer">
      <div
        className={i18n.language === "pl" ? "order-1" : "order-3"}
        onClick={() => {
          i18n.changeLanguage("pl");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 10"
          width="24"
          height="16"
        >
          <path fill="#fff" d="M0 0h16v10H0z" />
          <path fill="#dc143c" d="M0 5h16v5H0z" />
        </svg>
      </div>
      <div className="order-2 cursor-default">
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path
            fill="#0adab9"
            d="M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z"
          />
        </svg>
      </div>
      <div
        className={i18n.language === "en" ? "order-1" : "order-3"}
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 30"
          width="24"
          height="16"
        >
          <clipPath id="a">
            <path d="M0 0v30h60V0z" />
          </clipPath>
          <clipPath id="b">
            <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
          </clipPath>
          <g clipPath="url(#a)">
            <path d="M0 0v30h60V0z" fill="#012169" />
            <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
            <path
              d="M0 0l60 30m0-30L0 30"
              clipPath="url(#b)"
              stroke="#C8102E"
              strokeWidth="4"
            />
            <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
            <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
