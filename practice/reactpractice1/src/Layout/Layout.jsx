import AppSidebar from "@/components/AppSidebar";
import Topbar from "@/components/Topbar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layoutUnderRoot ">
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
    </div>
  );
};

export default Layout;

// for thinking about the size of page, component or layout then think that to which layout, page/layout or defalut layout repectively these belongs to.
