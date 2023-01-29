import React from "react";

const Toggle = ({ setToggleSwitch }) => {
  return (
    <input
      type="checkbox"
      className="toggle z-10 absolute top-20 right-6"
      onClick={() => setToggleSwitch((value) => !value)}
    ></input>
  );
};

export default Toggle;
