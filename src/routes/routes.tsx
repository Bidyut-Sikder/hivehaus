import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "@/pages/ErrorPage";
import App from "@/App";
import Home from "@/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
