import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "@/pages/ErrorPage";
import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Rooms from "@/pages/Rooms";
import BookRoom from "@/pages/user-pages/BookRoom";
import Signup from "@/pages/auth/Signup";
import LoginPage from "@/pages/auth/Login";


export const router = createBrowserRouter([
  {
    path: "/",

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
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/rooms/:id",
        element: <BookRoom />,
      },

    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
