"use client";
import Drawer from "@/components/Drawer";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import Topbar from "@/components/Topbar";
import CInput from "@/utils/CInput/CInput";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { DemoProduct } from "@/content/DemoProduct";
import ShopProductCart from "./ShopProductCart";
import { initData } from "@/content/initData";
import CCheckRadio from "@/utils/CCheckRadio/CCheckRadio";
import CSkeleton from "@/utils/CSkelleton/CSkelleton";
import UpperNav from "@/components/UpperNav";
import COverlayLoader from "@/utils/COverlayLoader/COverlayLoader";
import Loading from "@/app/loading";
import NoProduct from "@/shared/NoProduct";
import { useFilterProductQuery } from "@/Redux/Features/admin/product/admin-product-slice";

interface FilterCriteria {
  category?: string;
  subCategory?: string[];
}
const ShopPageCompoment = () => {
  const categories = [
    { value: "Men", label: "Men" },
    { value: "Women", label: "Women" },
    { value: "Kids", label: "Kids" },
    { value: "Bulk Order", label: "Bulk Order" },
  ];

  const subcategories = {
    Men: [
      "Short sleeve t-shirt",
      "Long sleeve t-shirt",
      "Polo shirt",
      "Sports jersey",
      "Dress shirt",
      "Casual shirt",
      "Katua",
      "Panjabi",
      "Pajama",
      "Trouser",
      "Cargo pant",
      "Under wear",
      "Tank top",
      "Sweat shirt",
      "Hoodie",
    ],
    Women: ["Comfy top bottom set", "Kurti, Tunic, & Tops"],
    Kids: [
      "Top bottom set",
      "T-shirt",
      "Polo shirt",
      "Sleeve less t-shirt",
      "3quarter shorts",
      "Trouser",
    ],
    "Bulk Order": ["Bulk Order"],
  } as any;
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  );

  const handleCategoryClick = (category: string) => {
    if (selectedCategory !== category) {
      setSelectedCategory(category); // Set the new category
      setSelectedSubcategories([]); // Reset subcategories when category changes
    } else {
      setSelectedCategory(""); // Deselect category if clicked again
    }
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategories(
      (prev) =>
        prev.includes(subcategory)
          ? prev.filter((item) => item !== subcategory) // Remove if already selected
          : [...prev, subcategory] // Add if not selected
    );
  };

  const { data, isLoading, error, refetch } = useFilterProductQuery(
    {
      category: selectedCategory ?? "",
      subCategory: selectedSubcategories,
    }
    // { skip: !selectedCategory } // Skip query if no category is selected
  );
  console.log(data);

  useEffect(() => {
    if (selectedCategory) {
      refetch(); // Fetch data whenever category or subcategory changes
    }
  }, [selectedCategory, selectedSubcategories, refetch]);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log(searchValue);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <section>
        <UpperNav />
        <nav className="flex justify-between items-center p-2 bg-[#1B2966] text-white">
          <div className="flex  w-1/4 justify-around items-center">
            {/* sidebar  */}
            <div className=" lg:hidden">
              <button
                onClick={handleClick}
                className="text-xl focus:outline-none inline w-10 text-white"
              >
                {click ? "✕" : "☰"}
              </button>
            </div>
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
              <Link href={"/shop"}>
                <Topbar />
              </Link>
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
                    0
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </nav>
      </section>

      {/* big screen  */}

      <div className="flex ">
        <div className="  hidden w-[350px] lg:block text-[12px] py-4">
          <div className="  mx-4 h-screen overflow-scroll">
            <div className="p-6 w-[300px] mx-auto">
              <h1 className="text-2xl font-bold mb-4">Select Categories</h1>

              {/* Category and Subcategories */}
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.value} className="border-b pb-2">
                    {/* Category Button */}
                    <button
                      onClick={() => handleCategoryClick(category.value)}
                      className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg border transition-all duration-300 ease-in-out ${
                        selectedCategory === category.value
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      {category.label}
                      {selectedCategory === category.value ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 transition-transform duration-300 ease-in-out rotate-180"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 transition-transform duration-300 ease-in-out rotate-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>

                    {/* Subcategories */}
                    <div
                      className={`mt-2 pl-6 space-y-2 overflow-hidden transition-all duration-500 ease-in-out ${
                        selectedCategory === category.value
                          ? "max-h-[1400px] opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-2"
                      }`}
                    >
                      {subcategories[category.value]?.map(
                        (sub: any, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => handleSubcategoryClick(sub)}
                            className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg border transition-all duration-300 ease-in-out ${
                              selectedSubcategories.includes(sub)
                                ? "bg-green-500 text-white border-green-600"
                                : "bg-gray-100 text-gray-800 border-gray-300"
                            } hover:shadow-md`}
                          >
                            <span>{sub}</span>
                            {selectedSubcategories.includes(sub) ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4 transition-transform duration-300 ease-in-out transform rotate-45"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4 transition-transform duration-300 ease-in-out transform rotate-0"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                            )}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <h2 className=" w-full mx-auto">
            <Loading />
          </h2>
        ) : (
          <div className="h-screen ">
            {data?.length == 0 ? (
              <div className=" w-full mx-auto">
                <h2>
                  <NoProduct />
                </h2>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 mx-8">
                {data?.products?.map((data: any) => (
                  <ShopProductCart
                    key={data._id}
                    data={data}
                    Loading={isLoading}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* small device sidebar  */}

      <div className="block lg:hidden h-screen">
        <div
          className={` absolute bg-white w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 transition-all ease-in duration-400 ${
            click
              ? "top-[65px] opacity-100 z-30 w-4/6 md:1/3"
              : " left-[-400px] opacity-0 "
          } `}
        >
          <div className="  mx-4 h-screen overflow-scroll text-[10px]">
            <div className="p-6 max-w-lg mx-auto">
              <h1 className="text-2xl font-bold mb-4">Select Categories</h1>

              {/* Category and Subcategories */}
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.value} className="border-b pb-2">
                    {/* Category Button */}
                    <button
                      onClick={() => handleCategoryClick(category.value)}
                      className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg border transition-all duration-300 ease-in-out ${
                        selectedCategory === category.value
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      {category.label}
                      {selectedCategory === category.value ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 transition-transform duration-300 ease-in-out rotate-180"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 transition-transform duration-300 ease-in-out rotate-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>

                    {/* Subcategories */}
                    <div
                      className={`mt-2 pl-6 space-y-2 overflow-hidden transition-all duration-500 ease-in-out ${
                        selectedCategory === category.value
                          ? "max-h-[1400px] opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-2"
                      }`}
                    >
                      {subcategories[category.value]?.map(
                        (sub: any, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => handleSubcategoryClick(sub)}
                            className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg border transition-all duration-300 ease-in-out ${
                              selectedSubcategories.includes(sub)
                                ? "bg-green-500 text-white border-green-600"
                                : "bg-gray-100 text-gray-800 border-gray-300"
                            } hover:shadow-md`}
                          >
                            <span>{sub}</span>
                            {selectedSubcategories.includes(sub) ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4 transition-transform duration-300 ease-in-out transform rotate-45"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4 transition-transform duration-300 ease-in-out transform rotate-0"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                            )}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPageCompoment;
