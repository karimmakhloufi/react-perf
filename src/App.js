import React, { useState } from "react";

import "./App.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import logs from "./logs.json";

import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [inputFilter, setinputFilter] = useState("");
  const [visibleLogs, setVisibleLogs] = useState(logs.slice(0, 20));
  const fetchData = () => {
    console.log("calling fetch data");
    setVisibleLogs(
      logs
        .filter((el) => el.timestamp.includes(inputFilter))
        .slice(0, visibleLogs.length + 20)
    );
  };

  return (
    <div className="App">
      <input
        value={inputFilter}
        onChange={(e) => {
          setinputFilter(e.target.value);
          setVisibleLogs(
            logs
              .filter((el) => el.timestamp.includes(e.target.value))
              .slice(0, 20)
          );
        }}
      />
      <InfiniteScroll
        dataLength={visibleLogs.length}
        next={fetchData}
        hasMore={true}
      >
        {visibleLogs.map((el) => {
          return (
            <Accordion key={el._id} className={"logrow"}>
              <AccordionSummary>
                <pre>
                  <span className={el.severity}>{el.severity + " "}</span>
                  {el.timestamp}
                </pre>
              </AccordionSummary>
              <AccordionDetails className={"content"}>
                {el.content}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default App;
