import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Gallery from "./Galerry.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
