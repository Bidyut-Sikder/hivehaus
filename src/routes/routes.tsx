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
import AdminProfile from "../pages/admin-pages/AdminProfile";
import PaymentSuccessPage from "../pages/payment/Success";
import PaymentFailedPage from "../pages/payment/Failed";
import AdminRoute from "./AdminRoute";
import UnauthorizedPage from "../pages/Unauthorized";

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
        path: "/aboutus",
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
        path: "/success",
        element: <PaymentSuccessPage />,
      },
      {
        path: "/failed",
        element: <PaymentFailedPage />,
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
            element: (
              <UserRoute>
                <UserBookings />
              </UserRoute>
            ),
          },
          {
            path: "/user-dashboard/profile",
            element: (
              <UserRoute>
                <UserProfile />
              </UserRoute>
            ),
          },
        ],
      },
      {
        path: "/admin-dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
        children: [
          {
            path: "/admin-dashboard/rooms",
            element: (
              <AdminRoute>
                <AdminRooms />
              </AdminRoute>
            ),
          },
          {
            path: "/admin-dashboard/bookings",
            element: (
              <AdminRoute>
                <AdminBooking />
              </AdminRoute>
            ),
          },
          {
            path: "/admin-dashboard/bookings/:id",
            element: (
              <AdminRoute>
                <AdminBookingDetails />
              </AdminRoute>
            ),
          },
          {
            path: "/admin-dashboard/add-room",
            element: (
              <AdminRoute>
                <CreateRoom />
              </AdminRoute>
            ),
          },
          {
            path: "/admin-dashboard/profile",
            element: (
              <AdminRoute>
                <AdminProfile />
              </AdminRoute>
            ),
          },
          {
            path: "/admin-dashboard/edit-room/:id",
            element: (
              <AdminRoute>
                <EditRoom />
              </AdminRoute>
            ),
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
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
]);
