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
          <div className="flex flex-row gap-4 py-2 px-6 items-center rounded-base shadow-oneSh">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-row gap-4 py-2 px-6 items-center rounded-base shadow-oneSh">
            <Toggle />
          </div>
        </div>
      </div>
      <div className="flex justify-center relative w-1/2 mb-8 select-none">
        <img src={logo} alt="eRZet" className="z-50" />
      </div>
      <MainMenu menuItems={menuItems} />
    </nav>
  );
};

export default Navbar;
