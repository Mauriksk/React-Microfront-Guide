import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Title from "./components/Title";

const App = () => (
  <>
    <Title />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
