import React from "react";
import { combineAppearance } from "../utils/combineAppearance";
import PropTypes from "prop-types";

function Button({ className, appearance, children }) {
  const styles = {
    base: "flex flex-row items-center justify-center gap-2 uppercase p-2 lg:p-4 text-white text-bold outline-offset-4 outline outline-2 outline-orange-100",
    baseDark:
      "bg-navy-700 hover:bg-orange-100 hover:bg-opacity-20 transition ease-in-out",
    baseLight:
      "bg-slate-600 hover:bg-navy-700 hover:bg-opacity-50 transition ease-in-out",
  };

  return (
    <button className={`${combineAppearance(appearance, styles)} ${className}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  appearance: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  appearance: "base",
  className: "",
};

export default Button;
