import React, { useState } from "react";

import "./App.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import logs from "./logs.json";
import InputAndButton from "./InputAndButton";

const LogsTable = ({ logs }) => {
  return logs.map((el) => {
    return (
      <Accordion key={el._id} className={"logrow"}>
        <AccordionSummary>
          <pre>
            <span className={el.severity}>{el.severity + " "}</span>
            {el.timestamp}
          </pre>
        </AccordionSummary>
        <AccordionDetails className={"content"}>{el.content}</AccordionDetails>
      </Accordion>
    );
  });
};

function App() {
  const [inputFilter, setinputFilter] = useState("");
  return (
    <div className="App">
      <InputAndButton value={inputFilter} handleChange={setinputFilter} />
      <LogsTable
        logs={logs.filter((el) => el.timestamp.includes(inputFilter))}
      />
    </div>
  );
}

export default App;
