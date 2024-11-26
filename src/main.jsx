import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { Toaster } from 'sonner'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
      <BrowserRouter>
      <App />
      <Toaster richColors position="top-right"/>
      </BrowserRouter>
    </Provider>
 
);
