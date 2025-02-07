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
import UserDashboard from "../pages/user-pages/UserDashboard";
import UserBookings from "../pages/user-pages/UserBookings";
import UserProfile from "../pages/user-pages/UserProfile";
import UserRoute from "./UserRoute";
import AdminDashboard from "../pages/admin-pages/AdminDashboard";
import AdminRooms from "../pages/admin-pages/AdminRooms";
import AdminBooking from "../pages/admin-pages/AdminBooking";
import CreateRoom from "../pages/admin-pages/CreateRooms";
import AdminBookingDetails from "../pages/admin-pages/BookingDetail";
import EditRoom from "../pages/admin-pages/EditRoom";

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
      {
        path: "/booking-details",
        element: <CheckOut />,
      },
      {
        path: "/user-dashboard",
        element: (
          <UserRoute>
            <UserDashboard />
          </UserRoute>
        ),
        children: [
          {
            path: "/user-dashboard/bookings",
            element: <UserBookings />,
          },
          {
            path: "/user-dashboard/profile",
            element: <UserProfile />,
          },
        ],
      },
      {
        path: "/admin-dashboard",
        element: <AdminDashboard />,
        children: [
          {
            path: "/admin-dashboard/rooms",
            element: <AdminRooms />,
          },
          {
            path: "/admin-dashboard/bookings",
            element: <AdminBooking />,
          },
          {
            path: "/admin-dashboard/bookings/:id",
            element: <AdminBookingDetails />,
          },
          {
            path: "/admin-dashboard/add-room",
            element: <CreateRoom />,
          },
          {
            path: "/admin-dashboard/edit-room/:id",
            element: <EditRoom />,
          },
        ],
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
    element: <LoginPage />,
  },
  {
    path: "/success",
    element: <h1>payment success</h1>,
  },
]);
