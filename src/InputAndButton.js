import React, { useState } from "react";

const InputAndButton = () => {
  console.log("render");
  const [value, setValue] = useState("");
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => console.log(value)}>ClickMe</button>
    </>
  );
};

export default InputAndButton;
