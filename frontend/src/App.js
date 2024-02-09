import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./features/NotFound/Notfound";
import Homepages from "./Pages/Homepages";
import SignupPages from "./features/Navbar/SignupPages";
import LoginPages from "./Pages/LoginPages";
import UserdashboardPages from "./Pages/UserdashboardPages";
import AppoinmentsPages from "./Pages/AppoinmentsPages";
import DoctorsPages from "./Pages/DoctorsPages";
import MakeAppoinmentsPages from "./Pages/MakeAppoinmentsPages";
function App() {
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
      path: "/user",
      exact: true,
      element: <UserdashboardPages></UserdashboardPages>,
    },
    {
      path: "/appoinments",
      exact: true,
      element: <AppoinmentsPages></AppoinmentsPages>,
    },
    {
      path: "/makeappoinments/:id",
      exact: true,
      element: <MakeAppoinmentsPages></MakeAppoinmentsPages>,
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
