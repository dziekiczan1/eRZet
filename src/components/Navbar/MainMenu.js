import React, { useContext } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../Theme";

const MainMenu = ({ menuItems }) => {
  const [active, setActive] = useState("0");
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <ul
      className={
        theme === "dark"
          ? "flex flex-row w-full lg:w-3/4 px-4 lg:px-0 text-white z-50 gap-4 lg:gap-8 cursor-pointer my-8 lg:my-16"
          : "flex flex-row w-full lg:w-3/4 px-4 lg:px-0 text-black z-50 gap-4 lg:gap-8 cursor-pointer my-8 lg:my-16"
      }
    >
      {menuItems?.map((item) => (
        <li
          key={item.id}
          className={
            active === item.id
              ? "w-1/5 flex flex-col items-center justify-center grow border-b-2 border-orange-100 font-semibold"
              : "hover:scale-105 transition ease-in-out delay-[50ms] w-1/5 flex flex-col items-center justify-center grow border-b-2 border-gray-700 hover:border-azure-50 font-base"
          }
          onClick={() => setActive(item.id)}
          onMouseEnter={() => setIsHovered(item.id)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a href={`#${item.link}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={30}
              className="mx-auto"
            >
              <path
                fill={
                  isHovered === item.id && item.id !== active
                    ? "#4a8787"
                    : `${active === item.id ? "#feb106" : "#4B5563"}`
                }
                d={item.svgD}
              />
            </svg>
            <span
              className={
                isHovered === item.id && item.id !== active && theme === "light"
                  ? "text-[#4a8787]"
                  : `${
                      active === item.id && theme === "light"
                        ? "text-orange-100"
                        : "#4B5563"
                    }`
              }
            >
              <p className="hidden lg:block">{t(item.name)}</p>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
