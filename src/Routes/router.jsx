import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home/Home";
import MainLayout from "../Layout/MainLayout/MainLayout";
import SignUp from "../Pages/Login/SignUp/SignUp";
import Login from "../Pages/Login/Login";

import Cheakout from "../Pages/Login/Cheakout/Cheakout";
import Bookings from "../Pages/Login/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute/PrivetRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
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
          path: "/bookings",
          element: <PrivetRoute><Bookings /></PrivetRoute>,
        },
        {
          path: "/cheakout/:id",
          element:<PrivetRoute><Cheakout></Cheakout></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
      ],
    },
  ]);

export default router;