import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResultContextProvider } from "./context/ResultContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
      <App />
    </ResultContextProvider>
  </React.StrictMode>
);
