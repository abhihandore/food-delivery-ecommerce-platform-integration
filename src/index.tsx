import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./context/ThemeProvider";
import CartContextProvider from "./context/CartContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
