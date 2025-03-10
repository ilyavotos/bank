import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";
import { ErrorPage } from "@components/error";
import { settingRouter } from "./routes/setting/setting-router";
import { authRouter } from "./routes/auth/auth-router";
import { authCheck } from "@features/auth/api";

export const router = createBrowserRouter([
  {
    Component: Layout,
    ErrorBoundary: ErrorPage,
    path: "/",
    HydrateFallback: ErrorPage,
    loader: authCheck,
    children: [settingRouter],
  },
  authRouter,
]);
