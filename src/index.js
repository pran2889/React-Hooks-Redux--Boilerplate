import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from "./context/store/storeContext";
import "./i18next";

ReactDOM.render(
  //dont put strictmode here It will generate error for theme switcher as Material ui dont support it till now.
  <StoreProvider>
      <App />
  </StoreProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
