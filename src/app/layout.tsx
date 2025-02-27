import { Sidebar } from "@components/sidebar";
import { Header } from "@components/header";
import { Outlet } from "react-router";
import { sidebarNavData } from "./data";

export const Layout = () => {
  return (
    <>
      <Sidebar navData={sidebarNavData} />
      <div className="ml-sidebar flex h-full flex-col max-sm:ml-0">
        <Header />
        <main className="bg-grey-light h-main overflow-auto px-10 py-7.5">
          <Outlet />
        </main>
      </div>
    </>
  );
};
