import MainMenu from "../Navbar/MainMenu";
import menuItems from "../Navbar/MenuItems";
import LanguageSwitcher from "../Navbar/LanguageSwitcher";

import logo from "../../assets/logo.png";
import circle from "../../assets/circle.png";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center py-8">
      <div className="flex justify-center relative w-1/2 mb-8 select-none">
        <img src={logo} alt="eRZet" className="z-50" />
        <img
          src={circle}
          alt="eRZet bg-circle"
          width={210}
          className="absolute -top-6 left-[72px] rotate-[230deg] brightness-70"
        />
      </div>
      <LanguageSwitcher />
      <MainMenu menuItems={menuItems} />
    </nav>
  );
};

export default Navbar;
