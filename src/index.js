import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeContract } from "./utils/near";
import {
  BrowserRouter as Router
} from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

window.nearInitPromise = initializeContract()
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
      <Router>
        <App />
        </Router>
      </React.StrictMode>,
      document.getElementById("root")
    );
  })
  .catch(console.error);

reportWebVitals();
