import React, { useRef } from "react";

import "./App.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import logs from "./logs.json";

const LogsTable = () => {
  return logs.map((el) => (
    <Accordion key={el._id} className={"logrow"}>
      <AccordionSummary>
        <pre>
          <span className={el.severity}>{el.severity + " "}</span>
          {el.timestamp}
        </pre>
      </AccordionSummary>
      <AccordionDetails className={"content"}>{el.content}</AccordionDetails>
    </Accordion>
  ));
};

function App() {
  const inputEl = useRef(null);
  return (
    <div className="App">
      <input ref={inputEl} />
      <button onClick={() => console.log("input value", inputEl.current.value)}>
        Click Me
      </button>
      <LogsTable />
    </div>
  );
}

export default App;
