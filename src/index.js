import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import {FavouriteContextProvider} from './context/Favourites-Context'

ReactDOM.render(
  <FavouriteContextProvider>
  <BrowserRouter>
    <NavBar />
    <App />
    </BrowserRouter>
    </FavouriteContextProvider>,

  document.getElementById("root")
);
