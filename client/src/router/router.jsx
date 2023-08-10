import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import ManageBooking from "../pages/Dashboard/ManageBooking/ManageBooking";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import MyBooking from "../pages/Dashboard/MyBooking/MyBooking";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'menu',
            element: <Menu />,
        },
        {
            path: 'shop',
            element: <Shop />,
        },
        {
            path: 'shop/:category',
            element: <Shop />,
        },
        {
            path: 'contact',
            element: <Contact />,
        },
        {
            path: 'login',
            element: <Login />,
        },
        {
            path: 'signUp',
            element: <SignUp />,
        },
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
        {
            path: 'user-home',
            element: <UserHome />
          },
          {
            path: 'my-cart', 
            element: <MyCart />
          },
          {
            path:'payment',
            element: <Payment />
          },
          {
            path:'reservation',
            element: <Reservation />
          },
          {
            path:'payment-history',
            element: <PaymentHistory />
          },
          {
            path:'add-review',
            element: <AddReview />
          },
          {
            path:'my-booking',
            element: <MyBooking />
          },
          // admin routes
          {
            path: 'admin-home',
            element: <AdminRoute><AdminHome /></AdminRoute>
          },
          {
            path: 'all-users', 
            element: <AdminRoute><AllUsers /></AdminRoute>
          },
          {
            path: 'add-item',
            element: <AdminRoute><AddItem /></AdminRoute>
          },
          {
            path: 'manage-items',
            element: <AdminRoute><ManageItems /></AdminRoute>
          },
          {
            path: 'manage-booking',
            element: <AdminRoute><ManageBooking /></AdminRoute>
          },
      ]
    },
  ]);