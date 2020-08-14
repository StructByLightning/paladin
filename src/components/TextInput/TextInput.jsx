import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./TextInput.scss";

function TextInput({
  onChange,
  label,
}) {
  return (
    <label className="text-input">
      <input type="text" onChange={onChange} placeholder=" "/>
      <span className="label">{label}</span>
    </label>

  );
}

TextInput.propTypes = {
  onChange: PropTypes.func,
};

export default TextInput;
