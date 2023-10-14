// * - IMPORTING -
// React
import React from "react";
import ReactDOM from "react-dom/client";
// Tailwind compiled file
import "../src/output.css";
// CSS
import "./index.css";
// Components
import App from "./components/App/App";

// * Connects root html to React
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
