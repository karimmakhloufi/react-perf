import React from "react";

const InputAndButton = ({ value, handleChange, handleClick }) => {
  console.log("render");
  return (
    <>
      <input value={value} onChange={(e) => handleChange(e.target.value)} />
      <button onClick={() => handleClick(value)}>Filter</button>
    </>
  );
};

export default InputAndButton;
