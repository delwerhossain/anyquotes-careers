import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AllPost from "../pages/Client/AllPost/AllPost";
import ErrorPage from "../Common/ErrorPage/ErrorPage";
import { ApplyForm } from "../pages/Client/ApplyForm/ApplyForm";
import ThankYouPage from "../pages/Client/ThankYouPage/ThankYouPage";
// import Dashboard from "../Layout/Dashboard/Dashboard";
import Login from "../Common/AuthenticationPage/Login";
import EditPost from "../pages/Dashboard/EditPost/EditPost";
import PrivateRoute from "./PrivateRoute";
import CreatePost from "../pages/Dashboard/CreatePost/CreatePost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AllPost />,
      },
      {
        path: "/admin",
        element: <AllPost />,
      },
      {
        path: "/post",
        element: (
          <PrivateRoute>
            <CreatePost />
          </PrivateRoute>
        ),
      },
      {
        path: "edit/:id",
        element: (
          <PrivateRoute>
            <EditPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/success",
        element: <ThankYouPage />,
      },
      {
        path: "/apply/:id",
        element: <ApplyForm />,
      },
    ],
  },
  // {
  //   path: "dashboard",
  //   element: <Dashboard />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "all",
  //       element: <AllPost />,
  //     },
  //   ],
  // },
]);
