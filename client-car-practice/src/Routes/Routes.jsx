import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Cheackout from "../Pages/CheackOut/Cheackout";
import Bookings from "../Pages/CheackOut/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "/signup",
              element: <SignUp />,
            },
            {
              path: "/checkout/:id",
              element: <PrivateRoutes><Cheackout /></PrivateRoutes>,
              loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
          },
          {
            path: "/bookings",
            element: <PrivateRoutes><Bookings /></PrivateRoutes> ,
        },
        ],
    },
]);

export default router;