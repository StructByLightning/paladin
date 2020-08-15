import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Button.scss";

function Button({
  label,
  onClick,
}) {
  return (<button className="button" onClick={onClick}>
    {label}
  </button>

  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  label: "",
  onClick: () => {},
};

export default Button;
