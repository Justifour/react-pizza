import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {App, store} from "./app";
import "./assets/css/index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
