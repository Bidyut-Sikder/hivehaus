import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Rooms from "../pages/Rooms";
import BookRoom from "../pages/BookRoom";

import ErrorPage from "../pages/ErrorPage";
import SignupPage from "../pages/auth/Signup";
import LoginPage from "../pages/auth/Login";
import CheckOut from "../pages/CheckOut";

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
        element: <About/>,
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
      {
        path: "/booking-details",
        element: <CheckOut />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
]);
