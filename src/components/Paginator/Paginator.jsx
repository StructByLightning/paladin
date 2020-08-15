import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Paginator.scss";

import TextInput from "components/TextInput/TextInput.jsx";
import Button from "components/Buttons/Button.jsx";


function Paginator({
  onChange,
  value,
  onDecrement,
  onIncrement,
}) {
  return (
    <div className="paginator">
      <Button label="◄" onClick={onDecrement} disabled={value <= 1}/>
      <TextInput
        onChange={((val) => {
          onChange(val);
        })}
        value={value}
        centered
      />
      <Button label="►" onClick={onIncrement}/>
    </div>
  );
}


Paginator.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number.isRequired,
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
};

Paginator.defaultProps = {
  onChange: () => {},
  onIncrement: () => {},
  onDecrement: () => {},
};

export default Paginator;
