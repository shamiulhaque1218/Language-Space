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
import AddClass from "../Classes/addClass";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateClass from "../Classes/UpdateClass";
import ViewClass from "../Classes/ViewClass";
import Feedback from "../Classes/Feedback";
import ViewUser from "../User/ViewUser";
import MyCart from "../User/Cart/MyCart";
import Payment from "../User/Cart/Payment";
import Dashboard from "../Dashboard/Dashboard";


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
        {
          path: "/addclass",
          element: <PrivateRoute> <AddClass /> </PrivateRoute> ,
        },
        {
          path: "/update/:id",
          element: <UpdateClass />,
          loader: ({params}) => fetch(`http://localhost:5000/class/${params.id}`),
        },
        {
          path: "/feedback/:id",
          element: <Feedback />,
          loader: ({params}) => fetch(`http://localhost:5000/class/${params.id}`),
        },
        {
          path: "/viewclass",
          element: <PrivateRoute> <ViewClass /> </PrivateRoute>,
        },
        {
          path: "/viewuser",
          element: <PrivateRoute> <ViewUser /> </PrivateRoute>,
        },
        {
          path: "/mycart",
          element: <PrivateRoute> <MyCart /> </PrivateRoute>,
        },
        {
          path: "/payment",
          element: <PrivateRoute> <Payment /> </PrivateRoute>,
        },
        {
          path: "/dashboard",
          element: <PrivateRoute> <Dashboard /> </PrivateRoute>,
        },
        
      ],
    },
  ]);

  export default router;