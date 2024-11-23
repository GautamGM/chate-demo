import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterUser from "./pages/register/register.jsx";
import LoginUser from "./pages/login/login.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The main layout or wrapper component
    children: [
      {
        path: "register", // Child route for register
        element: <RegisterUser />,
      },
      {
        path: "login", // Child route for login
        element: <LoginUser />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
