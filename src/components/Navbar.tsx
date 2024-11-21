"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import CInput from "@/utils/CInput/CInput";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import UpperNav from "./UpperNav";
import Topbar from "./Topbar";
import Drawer from "./Drawer";
import { getCartData } from "@/content/getCartData";
import { cartData } from "@/content/cart";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log(searchValue);
  };

  const cartProduct = getCartData()

  return (
    <div>
      <UpperNav />
      <nav className="flex justify-between items-center p-2 bg-[#1B2966] text-white">
        <div className="flex  w-1/4 justify-around items-center">
          <Drawer />
          <div>
            <Link href={"/"}>
              <Image
                className="w-16"
                src={logo}
                height={80}
                width={100}
                alt="logo"
              />
            </Link>
          </div>

          <div>
            <Link href={'/shop'}><Topbar /></Link>
          </div>
        </div>

        <div className="flex  w-3/4 justify-around items-center">
          <div className="relative Flex-1 w-2/3">
            <div>
              <CInput
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                type="text"
                placeholder="Search By Title And Tags"
                endIcon={
                  <span onClick={handleSearch} className="text-black">
                    <FaSearch />
                  </span>
                }
                className="text-black"
              />
            </div>
          </div>

          <div className="flex space-x-2 mr-4">
            <Link href="/cart" className="text-2xl">
              <p className="flex relative">
                <FaShoppingCart />
                <span className="bg-red-700 rounded-full px-1 text-xs absolute bottom-0 -right-2 ">
                  {cartProduct.length}
                </span>
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
