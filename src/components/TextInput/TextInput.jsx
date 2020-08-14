import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./TextInput.scss";

function TextInput({
  onDelayedChange,
  onChange,
  label,
}) {
  const [delayedChange, setDelayedChange] = useState(null);


  return (
    <label className="text-input">
      <input type="text" onChange={(e) => {
        let value = e.target.value;
        onChange(value);
        clearTimeout(delayedChange);
        setDelayedChange(setTimeout(() => {
          onDelayedChange(value);
        }, 500));
      }} placeholder=" "/>
      <span className="label">{label}</span>
    </label>

  );
}

TextInput.propTypes = {
  onDelayedChange: PropTypes.func,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  onDelayedChange: () => {},
  onChange: () => {},
};

export default TextInput;
