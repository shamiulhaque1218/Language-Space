import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../Home/HomePage";
import App from "../../App";


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
        
      ],
    },
  ]);

  export default router;