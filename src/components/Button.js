import React from "react";
import { combineAppearance } from "../utils/combineAppearance";
import PropTypes from "prop-types";

function Button({ className, appearance, children }) {
  const styles = {
    base: "flex flex-row items-center justify-center gap-2 uppercase bg-navy-700 p-4 text-white text-bold outline-offset-4 outline outline-2 outline-orange-100",
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
