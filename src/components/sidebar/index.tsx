import Logo from "@assets/logo.svg?react";
import { NavLink } from "react-router";
import { NavigationItem } from "types";
import { Highlight } from "@components/ui/highlight";

type Props = {
  navData: NavigationItem[];
};

export const Sidebar = ({ navData }: Props) => {
  return (
    <aside className="w-sidebar border-white-blue fixed top-0 h-full border-r-[1px] bg-white max-sm:hidden max-sm:w-full">
      <Logo className="h-header m-auto flex items-center justify-center" />
      <nav className="h-main overflow-auto py-3.5">
        {navData.map(({ title, icon, route }, index) => {
          return (
            <NavLink
              key={index}
              to={route}
              state={{ title }}
              className={({ isActive }) =>
                `group hover:text-blue relative flex py-4 ${isActive ? "text-blue [&>span]:block" : "text-grey"}`
              }
            >
              <Highlight type="left" />
              <div className="flex items-center gap-x-6 pl-11 text-lg font-medium">
                {icon}
                {title}
              </div>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};
