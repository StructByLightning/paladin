import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Paginator.scss";

import TextInput from "components/TextInput/TextInput.jsx";

function Paginator({
  onChange,
  value,
}) {
  const [delayedChange, setDelayedChange] = useState(null);


  return (
    <div className="paginator">

      <TextInput
        onChange={((val) => {
          onChange(val);
        })}
        value={value}
      />
    </div>


  );
}


Paginator.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number.isRequired,
};

Paginator.defaultProps = {
  onChange: () => {},
};

export default Paginator;
