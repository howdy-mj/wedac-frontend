import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./index.scss";
import "./style/reset.scss";
import "./style/common.scss";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
