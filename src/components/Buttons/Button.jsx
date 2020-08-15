import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Button.scss";

function Button({
  label,
  onClick,
  disabled,
}) {
  let className = "button";
  if (disabled){
    className += " disabled";
  }
  return (<button className={className} onClick={onClick}>
    {label}
  </button>

  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  label: "",
  onClick: () => {},
  disabled: false,
};

export default Button;
