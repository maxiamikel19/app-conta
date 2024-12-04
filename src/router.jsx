import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./views/layouts/DefaultLayout";
import AuthLayout from "./views/layouts/AuthLayout";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
