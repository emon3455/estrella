"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { setMenuToggle } from "@/Redux/Features/admin/Admin-slice";
import cToastify from "@/shared/Toastify/Toadtify";
import CButton from "@/utils/CButton/CButton";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";

const TopMenu = () => {
  const dispatch = useAppDispatch();
  const menuToggle = useAppSelector((state) => state.adminSlice.menuToggle);
  const [size, setSize] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (size < 768) {
      dispatch(setMenuToggle(false as any));
    } else {
      dispatch(setMenuToggle(true as any));
    }
  }, [size, dispatch]);

  const handleLogout = async () => {
    try {
      document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      router.push("/");
      cToastify({
        type: "success",
        message: "Successfully Logout",
      });
    } catch (er) {
      console.log(er);
      cToastify({
        type: "error",
        message: "Something went wrong",
      });
    }
  };

  return (
    <main className="flex justify-between items-center bg-primary p-4 border-b mb-0.5 rounded-b w-full sticky top-0 z-[9999]">
      <section className="w-56 flex justify-between">
        <span className="text-white text-xl font-semibold">Estrella</span>
        <button
          onClick={() => dispatch(setMenuToggle(!menuToggle as any))}
          className="text-xl focus:outline-none inline w-10 text-white"
        >
          {menuToggle ? "✕" : "☰"}
        </button>
      </section>
      <section className="flex justify-between items-center gap-2">
        <CButton variant="solid" onClick={handleLogout}>
          <FiLogOut className="text-white font-bold" />
        </CButton>
      </section>
    </main>
  );
};

export default TopMenu;