import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import data from "./data";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <div>
 <BrowserRouter>
  <App/>
  
  <ToastContainer/>
  </BrowserRouter>
 </div>
);
