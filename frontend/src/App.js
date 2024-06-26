import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./features/NotFound/Notfound";
import Homepages from "./Pages/Homepages";
import SignupPages from "./Pages/SignupPages";
import LoginPages from "./Pages/LoginPages";
import UserdashboardPages from "./Pages/UserdashboardPages";
import AppoinmentsPages from "./Pages/AppoinmentsPages";
import DoctorsPages from "./Pages/DoctorsPages";
import MakeAppoinmentsPages from "./Pages/MakeAppoinmentsPages";
import UserProfileUpdatePage from "./Pages/UserProfileUpdatePage";
import Protectes from "./features/Auth/components/Protectes";
import AdminDashboardPages from "./Pages/AdminDashboardPages";
import ViewUsersAppoinmentPages from "./Pages/ViewUsersAppoinmentPages";
import AddBlogPages from "./Pages/AddBlogPages";
import DoctorAccountPages from "./Pages/DoctorAccountPages";
import NewLogin from "./features/Auth/components/NewLogin";
import ForgetPasswordPages from "./Pages/ForgetPasswordPages";
import ResetPasswordPages from "./Pages/ResetPasswordPages";
import { GetsAllBlogsAsync } from "./features/Userdashboard copy/adminSlice";
import { useDispatch } from "react-redux";
import ProtectedAdmin from "./features/Auth/components/ProtectedAdmin";
import { Toaster } from "react-hot-toast";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetsAllBlogsAsync());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/signup",
      exact: true,
      element: <SignupPages />,
    },

    {
      path: "/",
      exact: true,
      element: <Homepages></Homepages>,
    },
    {
      path: "/login",
      exact: true,
      element: <LoginPages></LoginPages>,
    },
    {
      path: "/api/reset-password",
      exact: true,
      element: <ResetPasswordPages></ResetPasswordPages>,
    },
    {
      path: "/user",
      exact: true,
      element: (
        <Protectes>
          <UserdashboardPages></UserdashboardPages>
        </Protectes>
      ),
    },
    {
      path: "/Forget",
      exact: true,
      element: <ForgetPasswordPages></ForgetPasswordPages>,
    },
    {
      path: "/user/update/profile",
      exact: true,
      element: (
        <Protectes>
          {" "}
          <UserProfileUpdatePage></UserProfileUpdatePage>
        </Protectes>
      ),
    },
    {
      path: "/admin/dashboard",
      exact: true,
      element: (
        <ProtectedAdmin>
          <AdminDashboardPages></AdminDashboardPages>
        </ProtectedAdmin>
      ),
    },
    {
      path: "/admin/dashboard/alluserappoinment",
      exact: true,
      element: (
        <ProtectedAdmin>
          {" "}
          <ViewUsersAppoinmentPages></ViewUsersAppoinmentPages>
        </ProtectedAdmin>
      ),
    },
    {
      path: "/admin/dashboard/addblog",
      exact: true,
      element: (
        <ProtectedAdmin>
          {" "}
          <AddBlogPages></AddBlogPages>
        </ProtectedAdmin>
      ),
    },
    {
      path: "/admin/dashboard/doctor/create/account",
      exact: true,
      element: (
        <ProtectedAdmin>
          {" "}
          <DoctorAccountPages></DoctorAccountPages>
        </ProtectedAdmin>
      ),
    },
    {
      path: "/appoinments",
      exact: true,
      element: (
        <Protectes>
          <AppoinmentsPages></AppoinmentsPages>
        </Protectes>
      ),
    },
    {
      path: "/makeappoinments/:id",
      exact: true,
      element: (
        <Protectes>
          {" "}
          <MakeAppoinmentsPages></MakeAppoinmentsPages>
        </Protectes>
      ),
    },
    {
      path: "/doctors",
      exact: true,
      element: <DoctorsPages></DoctorsPages>,
    },
    {
      path: "*",
      exact: true,
      element: <Notfound></Notfound>,
    },
    {
      path: "/new",
      exact: true,
      element: <NewLogin></NewLogin>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </>
  );
}

export default App;
