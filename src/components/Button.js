import React from "react";
import { combineAppearance } from "../utils/combineAppearance";
import PropTypes from "prop-types";

function Button({ className, appearance, children }) {
  const styles = {
    base: "font-bold text-white",
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
