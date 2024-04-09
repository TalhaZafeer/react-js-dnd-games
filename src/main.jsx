import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/index.css";
import "./assets/css/index_mobile.css";
import "./assets/fonts/Montserrat/Montserrat-Regular.ttf";
import registerServiceWorker from "./registerServiceWorker";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
registerServiceWorker();
