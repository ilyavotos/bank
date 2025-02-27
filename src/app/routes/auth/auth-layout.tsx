import { Wrapper } from "@components/ui/wrapper";
import { NavLink, Outlet } from "react-router";
import { Highlight } from "@components/ui/highlight";
import { signinNavData, signupNavData } from "./auth-data";

export const AuthLayout = () => {
  return (
    <div className="bg-grey-light flex h-screen w-screen items-center justify-center">
      <Wrapper>
        <nav className="flex gap-x-10 max-sm:gap-x-1">
          {[signinNavData, signupNavData].map(({ title, route }, index) => {
            return (
              <NavLink
                key={index}
                to={route}
                state={{ title: signinNavData.title }}
                className={({ isActive }) =>
                  `group hover:text-blue relative flex grow px-4 pb-2 ${isActive ? "text-blue [&>span]:block" : "text-grey"}`
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
