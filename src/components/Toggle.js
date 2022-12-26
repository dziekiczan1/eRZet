import React from "react";
import { useState, useContext } from "react";
import { ThemeContext } from "../Theme";

const Toggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [enabled, setEnabled] = useState(theme === "dark" ? false : true);

  return (
    <div className="flex flex-row items-center gap-2">
      <svg width="16" viewBox="0 0 24 24">
        <path
          fill={theme === "dark" ? "#0adab9" : "#000000"}
          d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"
        />
      </svg>
      <div className="flex flex-row items-center justify-center overflow-hidden">
        <label
          htmlFor="switcher"
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            id="switcher"
            name="switch-input"
            placeholder="Theme color switcher"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              toggleTheme();
              setEnabled(!enabled);
            }}
            className="border border-white/50 w-10 h-4 bg-navy-700 rounded-full peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-orange-100 after:border-orange-100 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-navy-400"
          ></div>
        </label>
      </div>
      <svg width="16" viewBox="0 0 24 24">
        <path
          fill={theme === "light" ? "#0adab9" : "#ffffff"}
          d="M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z"
        />
      </svg>
    </div>
  );
};

export default Toggle;
