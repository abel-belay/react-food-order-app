import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ShowCartContextProvider } from "./store/ShowCartContext";
import { CartContextProvider } from "./store/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <ShowCartContextProvider>
        <App />
      </ShowCartContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
