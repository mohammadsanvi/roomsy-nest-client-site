import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Singup from "../Components/Login/Signup";
import Error from "../Pages/Error";
import AddToFind from "../Pages/AddToFind/AddToFind";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: Singup,
      },
      {
        path: "find-rommate",
        element: (
          <PrivateRoute>
            <AddToFind></AddToFind>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
