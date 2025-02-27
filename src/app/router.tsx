import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";
import { ErrorPage } from "@components/error";
import { settingRouter } from "./routes/setting/setting-router";
import { authRouter } from "./routes/auth/auth-router";

export const router = createBrowserRouter([
  {
    Component: Layout,
    ErrorBoundary: ErrorPage,
    path: "/",
    children: [settingRouter],
  },
  authRouter,
]);
