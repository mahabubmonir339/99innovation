import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: '',
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
      ],
    },
  ]);