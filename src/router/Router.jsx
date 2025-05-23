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
        path: "browse-listing",
        loader: () =>
          fetch("https://roomsy-nest-server-site.vercel.app/roommate-listings"),
         hasErrorBoundary:<LoadingSpinner></LoadingSpinner>,
        Component: BrowseListing,
      },
      {
        path: "find-rommate",
         hasErrorBoundary:<LoadingSpinner></LoadingSpinner>,
        element: (
          <PrivateRoute>
            <AddToFind></AddToFind>
          </PrivateRoute>
        ),
      },
      {
        path: "my-listing",
         hasErrorBoundary:<LoadingSpinner></LoadingSpinner>,
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },
      {
        path: "my-listing/:id",
         hasErrorBoundary:<LoadingSpinner></LoadingSpinner>,
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
        path: "browse-listing-details/:id",
         hasErrorBoundary:<LoadingSpinner></LoadingSpinner>,
        loader: ({ params }) =>
          fetch(
            `https://roomsy-nest-server-site.vercel.app/roommate-listings/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ListingDetails />
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