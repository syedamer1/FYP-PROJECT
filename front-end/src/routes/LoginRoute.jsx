//import
import { lazy } from "react";
import LoginLayout from "../layout/LoginLayout";
//pages
const Login = lazy(() => import("../pages/login"));

const LoginRoute={
  path: "/",
  element: <LoginLayout />,
  children: [
    {
      path: "login",
      element: <Login />
    }
  ]
}

export default LoginRoute;