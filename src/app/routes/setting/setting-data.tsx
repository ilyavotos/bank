import { NavigationItem } from "types";
import Setting from "@assets/nav/setting.svg?react";

export const SETTING_PATH = "setting" as const;
export const SETTING_CHILD_PATHS = {
  PROFILE: "profile",
  PREFERENCES: "preferences",
  SECURITY: "security",
} as const;

export const settingNavData: NavigationItem = {
  title: "Setting",
  route: `/${SETTING_PATH}`,
  icon: <Setting />,
};

export const settingChildNavData: NavigationItem[] = [
  {
    title: "Profile",
    route: `/${SETTING_PATH}/${SETTING_CHILD_PATHS.PROFILE}`,
  },
  {
    title: "Preferences",
    route: `/${SETTING_PATH}/${SETTING_CHILD_PATHS.PREFERENCES}`,
  },
  {
    title: "Security",
    route: `/${SETTING_PATH}/${SETTING_CHILD_PATHS.SECURITY}`,
  },
];
