import React, { useState } from "react";

import "./App.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import logs from "./logs.json";

const LogsTable = React.memo(() => {
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
});

function App() {
  const [inputValue, setInputvalue] = useState("");
  return (
    <div className="App">
      <input
        value={inputValue}
        onChange={(e) => setInputvalue(e.target.value)}
      />
      <LogsTable />
    </div>
  );
}

export default App;
