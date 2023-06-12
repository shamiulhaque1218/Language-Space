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
import MyViewClass from "../Classes/MyViewClass";
import PaymentHistory from "../User/Cart/PaymentHistory";
import MyEnrollClass from "../User/Cart/MyEnrollClass";
import Classes from "../Home/Classes";
import PopularInstractor from "../User/PopularInstractor";
import InstractorRoutes from "../PrivateRoute/InstractorRoutes";
import AdminRoute from "../PrivateRoute/AdminRoute";
import Jwt from "../JWT/Jwt";


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
          element:  <Advertisement />,
        },
        {
          path: "/addclass",
          element: <PrivateRoute> <InstractorRoutes> <AddClass /> </InstractorRoutes> </PrivateRoute> ,
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
          element: <PrivateRoute> <AdminRoute> <ViewClass /> </AdminRoute>   </PrivateRoute>,
        },
        {
          path: "/myclass",
          element: <PrivateRoute> <InstractorRoutes> <MyViewClass /> </InstractorRoutes> </PrivateRoute>,
        },
        {
          path: "/classes",
          element:  <Classes />   ,
        },
        {
          path: "/viewuser",
          element: <PrivateRoute> <AdminRoute> <ViewUser /> </AdminRoute>  </PrivateRoute>,
        },
        {
          path: "/instructor",
          element:  <PopularInstractor /> ,
        },
        {
          path: "/mycart",
          element: <PrivateRoute> <MyCart /> </PrivateRoute>,
        },
        {
          path: "/payment/:id",
          element: <PrivateRoute> <Payment /> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/cart/${params.id}`)
        },
        {
          path: "/dashboard",
          element: <PrivateRoute> <Dashboard /> </PrivateRoute>,
        },
        {
          path: "/paymenthistory",
          element: <PrivateRoute> <PaymentHistory /> </PrivateRoute>,
        },
        {
          path: "/enrollclass",
          element: <PrivateRoute> <MyEnrollClass /> </PrivateRoute>,
        },
        {
          path: "/jwt",
          element: <Jwt />,
        },
        
      ],
    },
  ]);

  export default router;