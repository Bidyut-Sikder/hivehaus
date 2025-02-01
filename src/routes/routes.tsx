import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "@/pages/ErrorPage";
import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

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
      {
        path: "/aboutUS",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
    },
    ],
  },
]);
