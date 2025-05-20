import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Singup from "../Components/Login/Singup";



  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'login',
          Component: Login
        },
        {
          path:'singup',
          Component: Singup
        }
      ]
    },
  ]);
  