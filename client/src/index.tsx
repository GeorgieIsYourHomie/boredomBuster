// * - IMPORTING -
// React
import React from "react";
// React DOM
import ReactDOM from "react-dom/client";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
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
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
