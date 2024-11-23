"use client";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const Topbar = () => {
  return (
    <div>

      <div className="relative  text-left hidden md:inline-block">
        <div className="group">
          <button type="button"
            className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white focus:outline-none focus:bg-gray-700">
            Shop
            <svg
              className="w-4 h-4 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
          </button>

          <div
            className="absolute grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-40 py-4  left-0 w-[30rem] md:w-[40rem] lg:w-[50rem]  mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div className="px-2 flex flex-col  ">
              <h1 className=" uppercase  text-black font-bold">Men</h1>
              <Link
                className=" text-black  transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop"}
              >
                Short sleeve t-shirt
              </Link>
              <Link
                className=" text-black  transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop"}
              >
               Long sleeve t-shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop"}
              >
               Polo shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop"}
              >
                Sports jersey
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop"}
              >
                Dress shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop"}
              >
                Casual shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop"}
              >
                Katua
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
                Panjabi
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop"}
              >
               Pajama
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
                Trouser
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
                Cargo pant
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
                Under wear
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
               Tank top
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
                Sweat shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
                Hoodie 
              </Link>
            </div>
      
            <div className="px-2 flex flex-col  ">
              <h1 className=" uppercase  text-black font-bold">Women</h1>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
                Comfy top bottom set
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
                Kurti, Tunic, & Tops 
              </Link>
              
            </div>
            <div className="px-2 flex flex-col  ">
              <h1 className=" uppercase  text-black font-bold">Kids</h1>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
              Top bottom set
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
                T-shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
                Polo shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
                Sleeve less t-shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
               3 Quarter shorts
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
               Trouser
              </Link>
              
            </div>
            <div className="px-2 flex flex-col  ">
              <h1 className=" uppercase  text-black font-bold">Bulk</h1>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/"}
              >
                Order Bulk Now 
              </Link>
        
              
            </div>
           
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
