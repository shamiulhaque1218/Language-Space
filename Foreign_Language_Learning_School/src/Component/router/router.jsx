import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../Home/HomePage";
import App from "../../App";
import SignUp from "../Form/SignUp";
import Login from "../Form/Login";
import Advertisement from "../Footer/Advertisement";
import Cookie from "../Footer/Cookie";
import Address from "../Footer/Address";
import Contact from "../Footer/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App /> ,
      errorElement: <ErrorPage />,
      children:
       [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/address",
          element: <Address />,
        },
        {
          path: "/cookie",
          element: <Cookie />,
        },
        {
          path: "/advertisement",
          element: <Advertisement />,
        },
        
      ],
    },
  ]);

  export default router;