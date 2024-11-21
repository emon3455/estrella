import HelpSidenav from "./component/HelpSidenav";
import MobileView from "./component/MobileView";

const HelpLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <main className="">
      <section className="flex gap-1">
        <aside className={"hidden overflow-y-auto w-1/4 md:block"}>
          <HelpSidenav />
        </aside>

        <aside className="relative flex-1 bg-base-200 w-full overflow-y-auto">
          <div
            className="
            h-[calc(100vh-4.3rem)] 
             
          "
          >
            <div className=" absolute z-20">
              <MobileView />
            </div>
            {children}
          </div>
        </aside>
      </section>
    </main>
  );
};

export default HelpLayout;
