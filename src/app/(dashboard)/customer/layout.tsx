import SideNav from "@/components/SideNav";
import TopMenu from "@/components/TopMenu";
import { customersideNavLink } from "@/content/SideNav";
import React from "react";

export const metadata = {
  title: "Customer Dashboard | Estrella",
  description: "The Customer Dashboar Page of the Estrella Website.",
};

const DashboardLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <main className="">
      <TopMenu />

      <section className="flex gap-1">
        <aside className="overflow-y-auto">
          <SideNav sideNavLink={customersideNavLink} />
        </aside>

        <aside className="flex-1 bg-base-200 w-full overflow-y-auto">
          <div
            className="
            h-[calc(100vh-4.3rem)] 
             
          "
          >
            {children}
          </div>
        </aside>
      </section>
    </main>
  );
};

export default DashboardLayout;
