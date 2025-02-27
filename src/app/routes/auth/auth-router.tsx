import { Navigate, RouteObject } from "react-router";
import { SignIn, SignUp } from "@features/auth/components";
import { SIGNIN, SIGNUP, signinNavData } from "./auth-data";
import { AuthLayout } from "./auth-layout";

export const authRouter: RouteObject = {
  element: <AuthLayout />,
  children: [
    {
      element: <Navigate to={SIGNIN} replace state={{ title: signinNavData.title }} />, // default route for Setting
      index: true,
    },
    {
      element: <SignIn />,
      path: SIGNIN,
    },
    {
      element: <SignUp />,
      path: SIGNUP,
    },
  ],
};
