import { useState } from "react";
import { useTranslation } from "react-i18next";

const MainMenu = ({ menuItems }) => {
  const [active, setActive] = useState("0");
  const { t } = useTranslation();

  return (
    <ul className="flex flex-row w-3/4 text-white z-50 gap-8 cursor-pointer">
      {menuItems?.map((item) => (
        <li
          key={item.id}
          className={
            active === item.id
              ? "w-1/5 flex flex-col items-center justify-center grow border-b-2 border-orange-100 font-semibold"
              : "hover:scale-105 transition ease-in-out delay-[50ms] w-1/5 flex flex-col items-center justify-center grow border-b-2 border-gray-700 hover:border-orange-50 font-base"
          }
          onClick={() => setActive(item.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={30}
          >
            <path
              fill={active === item.id ? "#feb106" : "#4B5563"}
              d={item.svgD}
            />
          </svg>
          <a href="#">{t(item.name)}</a>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
