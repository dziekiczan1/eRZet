import React from "react";

import Toggle from "../Toggle";
import MainMenu from "../Navbar/MainMenu";
import menuItems from "../Navbar/MenuItems";
import LanguageSwitcher from "../Navbar/LanguageSwitcher";

import logo from "../../assets/logo.png";
import goldRec from "../../assets/goldrec.png";
import azureRec from "../../assets/azurerec.png";
import azureCircle from "../../assets/azurecircle.png";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center relative">
      <div className="flex justify-center w-full mb-8">
        <div className="flex justify-between w-3/4 text-xs text-white font-bold py-4">
          <div className="flex flex-row gap-4 py-6 px-4 2xl:px-8 items-center rounded-threeRd shadow-fiveSh">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-row gap-4 py-6 px-4 2xl:px-8 items-center rounded-threeRd shadow-fourSh">
            <Toggle />
          </div>
        </div>
      </div>
      <div className="flex justify-center relative w-1/2 mb-8 select-none">
        <img src={logo} alt="eRZet" className="z-50" />
        {/* <img
          src={circle}
          alt="eRZet bg-circle"
          width={210}
          className="absolute -top-6 lg:left-[-22px] 2xl:left-[52px] rotate-[230deg] brightness-70"
        /> */}
        {/* <img
          src={goldRec}
          className="h-[697px] absolute -top-[8em] -right-[11em] rotate-90 z-10"
          alt=""
        /> */}
        <img
          src={azureCircle}
          className="w-[180px] absolute rotate-[-90deg] opacity-25"
          alt=""
        />
      </div>
      <MainMenu menuItems={menuItems} />
    </nav>
  );
};

export default Navbar;
