"use client";
import { removeDataInCookies } from "@/Global/(cockies)/setCoockies";
import getUser from "@/hooks/useAuth";
import cToastify from "@/shared/Toastify/Toadtify";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaArrowCircleRight, FaQuestionCircle } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import { MdTrackChanges } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import CButton from "@/utils/CButton/CButton";
const UpperNav = () => {
  const [user, setUser] = useState<any>(null);
  const path = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [user?.id]);

  const handleLogout = async () => {
    try {
      document.cookie = `authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      if (path.includes("/admin") || path.includes("/customer")) {
        window.location.href = `/login?redirectUrl=${path}`;
      } else {
        window.location.href = `${path}`;
      }
      cToastify({
        type: "success",
        message: "Successfully Log out done",
      });
    } catch (error) {
      cToastify({
        type: "error",
        message: "Something Went wrong Try again!!",
      });
    }
  };
  return (
   
   
        <div className="block lg:flex justify-between bg-slate-100 ">
          <div className="bg-gray-700 hidden lg:block  ">
            <Link href={"/xxxx"}>
              <button className="flex  items-center  text-white gap-2  mx-2 py-2">
                <AiFillThunderbolt className="text-amber-500" />

                <h1 className="hover:underline font-bold">
                  EXCLUSIVE T-SHIRTS ON SALE | Limited time only{" "}
                </h1>
                <FaArrowCircleRight />
              </button>
            </Link>
          </div>
          <div className="flex  justify-between items-center  text-xs md:text-base lg:text-base">
            <Link className="hidden md:block" href={"/corporate"}>
              <button className=" hidden md:flex items-center bg-lime-500 gap-1 py-2 px-6">
                Order Bulk
                <FaTruck className="" />
              </button>
            </Link>
            <div className="flex-1">
              <Link href={"/ordertrack"}>
                <button className="flex items-center gap-1 py-2 px-2">
                  <MdTrackChanges />
                  Order Treacking
                </button>
              </Link>
            </div>

            <Link href={"/help?info=welcome"}>
              <button className="flex items-center gap-1 px-2">
                <FaQuestionCircle />
                Help
              </button>
            </Link>
            <div className="px-2 float-right">
              {user?.role ? (
                <button className="flex items-center gap-1" onClick={handleLogout}>
                  <MdOutlineLogout />
                  {"Logout"}
                </button>
              ) : (
                <div>
                  <div className="group">
                    <button className="relative flex items-center gap-1 cursor-pointer peer">
                      <MdOutlineLogin />
                      {"Login"}
                    </button>

                    <div className="absolute rounded-none top-6 right-0 z-10 w-28 lg:w-40 mt-1 origin-top-left text-white bg-slate-700 divide-y divide-gray-100  shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                      <div className="py-1">
                        <Link
                          href={"/login"}
                          className=" cursor-pointer flex items-center gap-2 p-2"
                        >
                          {" "}
                          <MdOutlineLogin /> Login
                        </Link>
                        <hr />
                        <Link
                          href={"/register"}
                          className=" cursor-pointer flex items-center gap-2 p-2"
                        >
                          {" "}
                          <IoMdLogIn /> Registration
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    

  );
};

export default UpperNav;
