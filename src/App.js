import logo from "../src/logo.png";
import circle from "../src/circle.png";
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <header>
        <nav className="flex flex-col items-center py-8">
          <div className="relative w-1/2 mb-8">
            <img src={logo} alt="eRZet" />
            <img
              src={circle}
              alt="eRZet bg-circle"
              width={250}
              className="absolute top-0 left-[-100px] rotate-180 brightness-70"
            />
          </div>
          <ul className="flex flex-row justify-between w-1/2 text-white">
            <li>
              <a href="#">One</a>
            </li>
            <li>
              <a href="#">Two</a>
            </li>
            <li>
              <a href="#">Three</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Main</h1>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default App;
