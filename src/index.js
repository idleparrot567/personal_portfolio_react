import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from "react-router";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
    <App />
  </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
