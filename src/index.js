import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Gallery from "./Gallery.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
