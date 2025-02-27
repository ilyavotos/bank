import { Wrapper } from "@components/ui/wrapper";
import { NavLink, Outlet } from "react-router";
import { settingChildNavData } from "./setting-data";
import { Highlight } from "@components/ui/highlight";
import { settingNavData } from "./setting-data";

export const SettingLayout = () => {
  return (
    <div className="mx-auto">
      <Wrapper>
        <nav className="flex gap-x-10 max-sm:gap-x-1">
          {settingChildNavData.map(({ title, route }, index) => {
            return (
              <NavLink
                key={index}
                to={route}
                state={{ title: settingNavData.title }}
                className={({ isActive }) =>
                  `group hover:text-blue relative flex px-4 pb-2 max-sm:grow ${isActive ? "text-blue [&>span]:block" : "text-grey"}`
                }
              >
                <Highlight type="bottom" />
                <div className="flex grow items-center justify-center text-lg font-medium">{title}</div>
              </NavLink>
            );
          })}
        </nav>
        <span className="border-white-blue mb-13 block border-b-1"></span>
        <Outlet />
      </Wrapper>
    </div>
  );
};
