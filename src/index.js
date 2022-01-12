import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
