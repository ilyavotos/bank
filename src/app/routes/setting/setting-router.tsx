import { Navigate, RouteObject } from "react-router";
import { SettingLayout } from "./setting-layout";
import { Profile } from "@features/setting/profile/components";
import { SETTING_PATH, SETTING_CHILD_PATHS, settingNavData } from "./setting-data";

const { PROFILE, PREFERENCES, SECURITY } = SETTING_CHILD_PATHS;

export const settingRouter: RouteObject = {
  element: <SettingLayout />,
  path: SETTING_PATH,
  children: [
    {
      element: <Navigate to={PROFILE} replace state={{ title: settingNavData.title }} />, // default route for Setting
      index: true,
    },
    {
      element: <Profile />,
      path: PROFILE,
    },
    {
      element: <Profile />,
      path: PREFERENCES,
    },
    {
      element: <Profile />,
      path: SECURITY,
    },
  ],
};
