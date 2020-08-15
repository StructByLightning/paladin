import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./TextInput.scss";

function TextInput({
  onDelayedChange,
  onChange,
  label,
  value,
  centered,
}) {
  const [delayedChange, setDelayedChange] = useState(null);

  let cssClass = "text-input";
  if (label){
    cssClass += " labeled";
  }
  if (centered){
    cssClass += " centered";
  }

  return (
    <label className={cssClass}>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          let val = e.target.value;
          onChange(val);
          if (onDelayedChange){
            clearTimeout(delayedChange);
            setDelayedChange(setTimeout(() => {
              onDelayedChange(val);
            }, 500));
          }
        }} placeholder=" "/>
      {label && <span className="label">{label}</span>}
    </label>

  );
}

TextInput.propTypes = {
  onDelayedChange: PropTypes.func,
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  centered: PropTypes.bool,
};

TextInput.defaultProps = {
  onDelayedChange: null,
  onChange: () => {},
  label: "",
  value: undefined,
  centered: false,
};

export default TextInput;
