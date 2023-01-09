import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import { Router } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <Router> */}
    {/* <div className="bg-app"> */}
    <App />
    {/* </div> */}
    {/* </Router> */}
  </Provider>
  // </React.StrictMode>
);
