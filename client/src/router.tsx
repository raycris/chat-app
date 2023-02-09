import { createBrowserRouter, Outlet } from "react-router-dom";

import AuthProvider from "./context/AuthContext";

import { Home } from "./pages/Home";
import AuthLayout from "./pages/layout/AuthLayout";
import RootLayout from "./pages/layout/RootLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export const router = createBrowserRouter([
  {
    element: <ContextWrapper />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/channel",
            children: [{ path: "new", element: <h1>New Channel</h1> }],
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
    ],
  },
]);

function ContextWrapper() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
