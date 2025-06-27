import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Singup from "../Components/Login/Signup";
import Error from "../Pages/Error";
import AddToFind from "../Pages/AddToFind/AddToFind";
import PrivateRoute from "./PrivateRoute";
import MyListings from "../Pages/MyLIstings/MyListings";
import UpdateList from "../Pages/MyLIstings/UpdateList/UpdateList";
import BrowseListing from "../Pages/BrowseListing/BrowseListing";
import ListingDetails from "../Pages/BrowseListing/ListingDetails";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import DashboardLayout from "../Layouts/Dashboard/DashboardLayout";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Support from "../Pages/Support/Support";
import Overview from "../Pages/Dashboard/OverView";
import ProfileSettings from "../Layouts/Dashboard/ProfileSettings";

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
        path:'about',
        Component:AboutUs
      },
      {
        path:'contact',
        Component:Contact
      },
      {
        path:'support',
        Component:Support
      },
      {
        path: "browse-listing",
        loader: () =>
          fetch("https://roomsy-nest-server-site.vercel.app/roommate-listings"),
        hasErrorBoundary: <LoadingSpinner></LoadingSpinner>,
        Component: BrowseListing,
      },
      {
        path: "browse-listing-details/:id",
        hasErrorBoundary: <LoadingSpinner></LoadingSpinner>,
        loader: ({ params }) =>
          fetch(
            `https://roomsy-nest-server-site.vercel.app/roommate-listings/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ListingDetails />
          </PrivateRoute>
        )
      },
      // {
      //   path: "find-rommate",
      //   hasErrorBoundary: <LoadingSpinner></LoadingSpinner>,
      //   element: (
      //     <PrivateRoute>
      //       <AddToFind></AddToFind>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "my-listing",
      //   hasErrorBoundary: <LoadingSpinner></LoadingSpinner>,
      //   element: (
      //     <PrivateRoute>
      //       <MyListings></MyListings>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "my-listing/:id",
      //   hasErrorBoundary: <LoadingSpinner></LoadingSpinner>,
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://roomsy-nest-server-site.vercel.app/roommate-listings/${params.id}`
      //     ),
      //   element: (
      //     <PrivateRoute>
      //       <UpdateList />
      //     </PrivateRoute>
      //   ),
      // },
      // 
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
        {
        path: "/dashboard/find-rommate",
        hasErrorBoundary: <LoadingSpinner></LoadingSpinner>,
        element: (
          <PrivateRoute>
            <AddToFind></AddToFind>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-listing",
        hasErrorBoundary: <LoadingSpinner></LoadingSpinner>,
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-listing/:id",
        hasErrorBoundary: <LoadingSpinner></LoadingSpinner>,
        loader: ({ params }) =>
          fetch(
            `https://roomsy-nest-server-site.vercel.app/roommate-listings/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateList />
          </PrivateRoute>
        ),
      },
       {
        path: "/dashboard/browse-listing",
        loader: () =>
          fetch("https://roomsy-nest-server-site.vercel.app/roommate-listings"),
        hasErrorBoundary: <LoadingSpinner></LoadingSpinner>,
        Component: BrowseListing,
      },
      {
        path: "browse-listing-details/:id",
        hasErrorBoundary: <LoadingSpinner></LoadingSpinner>,
        loader: ({ params }) =>
          fetch(
            `https://roomsy-nest-server-site.vercel.app/roommate-listings/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ListingDetails />
          </PrivateRoute>
        )
      },
      {
        path:"/dashboard",
        Component:Overview
      },
      {
        path:"/dashboard/profile-settings",
        Component:ProfileSettings
      }
      
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);