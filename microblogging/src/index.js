import React from "react";
import "typeface-roboto";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TweetProvider } from "./context/TweetContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TweetProvider>
    <App />
  </TweetProvider>
);
