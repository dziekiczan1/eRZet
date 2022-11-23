import MainMenu from "../Navbar/MainMenu";
import menuItems from "../Navbar/MenuItems";
import LanguageSwitcher from "../Navbar/LanguageSwitcher";

import logo from "../../assets/logo.png";
import circle from "../../assets/circle.png";
import goldRec from "../../assets/goldrec.png";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center py-8 relative">
      <div className="flex justify-center relative w-1/2 mb-8 select-none">
        <img src={logo} alt="eRZet" className="z-50" />
        {/* <img
          src={circle}
          alt="eRZet bg-circle"
          width={210}
          className="absolute -top-6 lg:left-[-22px] 2xl:left-[52px] rotate-[230deg] brightness-70"
        /> */}
        <img
          src={goldRec}
          className="h-[697px] absolute -top-[8em] -right-[11em] rotate-90 z-10"
          alt=""
        />
      </div>
      <LanguageSwitcher />
      <MainMenu menuItems={menuItems} />
    </nav>
  );
};

export default Navbar;
