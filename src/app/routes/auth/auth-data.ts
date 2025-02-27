import { NavigationItem } from "types";

export const SIGNIN = "signin" as const;
export const SIGNUP = "signup" as const;

export const signinNavData: NavigationItem = {
  title: "Signin",
  route: `/${SIGNIN}`,
};

export const signupNavData: NavigationItem = {
  title: "Signup",
  route: `/${SIGNUP}`,
};
