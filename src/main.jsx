import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout/MainLayout.jsx";
import Services from "./Home/Home/Home/Services/Services";
import Home from "./Home/Home/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/signup",
        element:<SignUp></SignUp>,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto	">
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>

);
