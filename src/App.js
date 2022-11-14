import { useState } from "react";
import logo from "../src/logo.png";

const menuItems = [
  {
    id: "0",
    name: "home",
    svgD: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",
    fullName: "Strona Główna",
  },
  {
    id: "1",
    name: "about",
    svgD: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",
    fullName: "O nas",
  },
  {
    id: "2",
    name: "portfolio",
    svgD: "M15 8C12.79 8 11 9.79 11 12V20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V10.17L20.41 8.59L19.83 8H15M23 14V21C23 22.11 22.11 23 21 23H15C13.9 23 13 22.11 13 21V12C13 10.9 13.9 10 15 10H19L23 14M21 14.83L18.17 12H18V15H21V14.83Z",
    fullName: "Realizacje",
  },
  {
    id: "3",
    name: "pricelist",
    svgD: "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z",
    fullName: "Cennik",
  },
  {
    id: "4",
    name: "contact",
    svgD: "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",
    fullName: "Kontakt",
  },
];

const App = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <>
      <header>
        <nav className="flex flex-col items-center py-8">
          <div className="relative w-1/2 mb-8">
            <img src={logo} alt="eRZet" className="z-50" />
            {/* <img
              src={circle}
              alt="eRZet bg-circle"
              width={250}
              className="absolute top-0 left-[-50px] rotate-210 brightness-70"
            /> */}
          </div>
          <ul className="flex flex-row w-3/4 text-white z-50 gap-8 cursor-pointer">
            {menuItems?.map((item) => (
              <li
                key={item.id}
                className={
                  active === item.id
                    ? "w-1/5 flex flex-col items-center justify-center grow border-b-2 border-orange-100 font-semibold"
                    : "w-1/5 flex flex-col items-center justify-center grow border-b-2 border-gray-700 font-base"
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
                <a href="#">{item.fullName}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative flex justify-center">
        <div className="indicator absolute -top-[60px]"></div>
        <div className="h-[500px] bg-[#b1bdce] w-full">
          <h1>Main</h1>
        </div>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default App;
