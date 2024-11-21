"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavigationEvents({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Define patterns for routes where you want to hide the header and footer
  const hiddenRoutePatterns = [
    /^\/admin\/.*/,
    /^\/customer\/.*/,
    // "/login",
    // "/signup",
    "/admin",
    "/customer",
    "/shop",
    // "/teacher/**",
    // "/admin/teachers",
    // "/admin/teachers/**",
    // "/admin/students",
    // "/admin/addStudents",
    // "/admin/multipleTeachersAdd",
  ];

  // Check if the current pathname matches any of the patterns
  const hideNavigationBar = hiddenRoutePatterns.some((pattern) =>
    typeof pattern === "string" ? pathname === pattern : pattern.test(pathname)
  );

  // console.log(hideNavigationBar);
  return (
    <>
      {!hideNavigationBar && <Navbar />}
      {children}
      {/* {!hideNavigationBar && <Footer />} */}
    </>
  );
}
