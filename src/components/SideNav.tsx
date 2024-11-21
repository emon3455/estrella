"use client";

import { useAppSelector } from "@/Redux/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

const SideNav = ({ sideNavLink }: any) => {
  const pathname = usePathname();
  const menuToggle = useAppSelector((state) => state.adminSlice.menuToggle);

  return (
    <>
      <div
        className={`${
          menuToggle ? "  ml-1 md:ml-0 w-60" : "w-0"
        } overflow-y-auto overflow-x-hidden shadow-lg 
        transform transition-all duration-300 ease-in-out
        fixed top-50 left-0 z-50 
        border-r
        md:relative md:translate-x-0 md:shadow-none md:border-0
        rounded
        bg-primary
        h-[calc(100vh-4.3rem)]
        space-y-2`}
      >

        <ul className="">
          {sideNavLink.map((obj: any, indx: any) => {
            return (
              <li key={indx} className="px-2 py-1">
                {obj?.nestedRoutes ? (
                  <details
                    open={obj?.nestedRoutes?.some(
                      (e: any) => e?.path === pathname
                    )}
                  >
                    <summary className="flex text-sm items-center justify-between cursor-pointer hover:bg-cyan-600 text-white transition-all duration-300 p-2 rounded bg-cyan-600/10">
                      {obj?.title}
                    </summary>
                    <ul className="ml-4">
                      {obj?.nestedRoutes.map(
                        (nestedObj: any, nestedIndex: any) => (
                          <Link
                            key={nestedIndex}
                            href={{
                              pathname: nestedObj?.path,
                            }}
                            onClick={() => {}}
                          >
                            <li
                              className={`hover:bg-cyan-600 p-2 transition-all duration-300 rounded mt-2 text-xs 
                                             bg-cyan-600/10
                                      ${
                                        pathname === nestedObj?.path
                                        ? "bg-white text-black"
                                          : "text-white"
                                      }
                                      `}
                            >
                              {nestedObj?.title}
                            </li>
                          </Link>
                        )
                      )}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={{
                      pathname: obj?.path,
                    }}
                  >
                    <span
                      className={`w-full text-sm inline-block hover:bg-cyan-600 p-2 transition-all duration-300 rounded bg-cyan-600/10
                              ${
                                pathname === obj?.path
                                  ? "bg-white text-black"
                                  : "text-white"
                              }
                              `}
                    >
                      {obj?.title}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideNav;
