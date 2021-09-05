import React from "react";

const InputAndButton = ({ value, handleChange }) => {
  console.log("render");
  return (
    <>
      <input value={value} onChange={(e) => handleChange(e.target.value)} />
      <button onClick={() => console.log(value)}>ClickMe</button>
    </>
  );
};

export default InputAndButton;
