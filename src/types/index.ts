import { JSX } from "react";

export type NavigationItem = {
  title: string;
  icon?: JSX.Element;
  route: string;
};
