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
            className="absolute grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 z-40 py-4  left-0 w-[30rem] md:w-[40rem] lg:w-[65rem]  mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div className="px-2 flex flex-col  ">
              <h1 className=" uppercase  text-black font-bold">Men</h1>
              <Link
                className=" text-black  transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/ menHalfSleeveTShirt"}
              >
                T-shirt
              </Link>
              <Link
                className=" text-black  transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menHalfSleeveTShirtRaglan"}
              >
                T-shirt (Raglan)
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menHalfSleeveTShirtCutAndStitch"}
              >
                T-shirt (Cut & Stitch)
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menHalfSleeveTShirtSports"}
              >
                T-shirt (Sports Edition)
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menHalfSleeveTShirtBlank"}
              >
                T-shirt (Blanks)
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menFullSleeveTShirt"}
              >
                Full Sleeve T-shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menFullSleeveTShirtRaglan"}
              >
                Full Sleeve (Raglan)
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menFullSleeveTShirtCutAndStitch"}
              >
                Full Sleeve (Cut & Stitch)
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menFullSleeveTShirtBlank"}
              >
                Full Sleeve (Blanks)
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menWallet"}
              >
                Wallet
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menBelt"}
              >
                Belt
              </Link>
            </div>
            <div className="px-2 flex flex-col  ">
              <h1 className=" uppercase  text-black font-bold">Men</h1>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menPanjabi"}
              >
                Panjabi
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menShirt"}
              >
                Shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menPoloTShirt"}
              >
                Polo T-shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menHoodie"}
              >
                Hoodie
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menJacket"}
              >
                Jacket
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menJeans"}
              >
                Denim Jeans
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menComfyTrouser"}
              >
                Comfy Trouser
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menSportsTrouser"}
              >
                Sports Trouser
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menJoggers"}
              >
                Joggers
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menShorts"}
              >
                Shorts
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menUnderwear"}
              >
                Underwear
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/menSocks"}
              >
                Socks
              </Link>
            </div>
            <div className="px-2 flex flex-col  ">
              <h1 className=" uppercase  text-black font-bold">women</h1>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/womenKurtiTunicAndTops"}
              >
                Kurti, Tunic & Tops
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/womenTShirt"}
              >
                T-Shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/womenComfyTrouser"}
              >
                Comfy Trouser
              </Link>
            </div>

            <div className="px-2 flex flex-col  ">
              <h1 className=" uppercase  text-black font-bold">kids</h1>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/isKindsHalfSleeveTshirt"}
              >
                T-shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/kidsMaggie"}
              >
                Maggie
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/kidsHalfSleeveTShirtBlank"}
              >
                Plain T-shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/kidsFullSleeveTShirt"}
              >
                Full Sleeve T-shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/kidsPoloTShirt"}
              >
                Polo T-shirt
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/kidsShorts"}
              >
                Shorts
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/kidsTrouser"}
              >
                Trouser
              </Link>
            </div>
            <div className="px-2 flex flex-col  ">
              <h1 className=" uppercase  text-black font-bold">FACE MASK</h1>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/faceMaskProfessional7LayerMask"}
              >
                Professional 7 Layer Mask
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/faceMaskSportsEdition"}
              >
                Sports Edition
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/faceMaskWomensDesigner"}
              >
                Womens Designer Edition
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/faceMaskWomensEmbroidery"}
              >
                Womens Embroidery Edition
              </Link>
              <Link
                className=" text-black transform duration-300 hover:text-sky-500 hover:font-semibold"
                href={"/shop/faceMaskKidsMask"}
              >
                Kids Face Mask
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
