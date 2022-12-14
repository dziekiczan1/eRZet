import { combineAppearance } from "../utils/combineAppearance";
import PropTypes from "prop-types";
import React from "react";

function Heading({ className, size, children }) {
  const Tag = size;

  const styles = {
    base: "font-bold text-white font-heading",
    h1: "text-2xl lg:text-3xl",
    h2: "text-xl lg:text-2xl",
    h3: "text-lg lg:text-xl",
    h4: "text-base lg:text-lg",
    h5: "text-sm",
  };

  return (
    <Tag className={`${combineAppearance(size, styles)} ${className}`}>
      {children}
    </Tag>
  );
}

Heading.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
};

Heading.defaultProps = {
  size: "h1",
  className: "",
};

export default Heading;
