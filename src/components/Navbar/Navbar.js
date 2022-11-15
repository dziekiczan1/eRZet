import MainMenu from "../Navbar/MainMenu";
import menuItems from "../Navbar/MenuItems";

import logo from "../../assets/logo.png";
import circle from "../../assets/circle.png";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center py-8">
      <div className="relative w-1/2 mb-8">
        <img src={logo} alt="eRZet" className="z-50" />
        <img
          src={circle}
          alt="eRZet bg-circle"
          width={230}
          className="absolute -top-10 left-[-5px] rotate-[230deg] brightness-70"
        />
      </div>
      <MainMenu menuItems={menuItems} />
    </nav>
  );
};

export default Navbar;
