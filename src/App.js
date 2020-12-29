import React from "react";
import "./styles.css";
import "./basics.js";
import App1 from "./promises";
import App2 from "./react-basic-01";
import App3 from "./react-hooks";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <App2 />
      <App3 />
    </div>
  );
}
