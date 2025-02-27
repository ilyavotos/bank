import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";
import { ErrorPage } from "@components/error";
import { settingRouter } from "./routes/setting/setting-router";

export const router = createBrowserRouter([
  {
    Component: Layout,
    ErrorBoundary: ErrorPage,
    path: "/",
    children: [settingRouter],
  },
]);
