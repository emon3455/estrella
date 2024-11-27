"use client";

import cToastify from "@/shared/Toastify/Toadtify";
import CButton from "@/utils/CButton/CButton";
import CModal from "@/utils/CModal/CModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

const ShopProductCart = ({ data: product }: any) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [counter, setCounter] = useState(1);
  const [tabs, setTab] = useState("");


  const handleCounter = () => {
    if (product?.generalSize?.[tabs] > counter) {
      setCounter(counter + 1);
    } else {
      cToastify({
        type: "warn",
        message: `You selected ${tabs.toUpperCase()} size that has only ${
          product?.generalSize?.[tabs]
        } product available right now`,
      });
    }
  };

  const cartProduct = {
    image: product.images[0],
    name: product.title,
    unitPrice: product.price,
    size: tabs,
    quantity: counter,
    id: product._id,
  };

  const saveToLocalStorage = (product: any) => {
    let products = JSON.parse(localStorage.getItem("products") as any) || [];
    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));
    cToastify({
      type: "success",
      message: `Product added to Cart`,
    });
  };

  const handleCart = () => {
    saveToLocalStorage(cartProduct);
  };

  return (
    <div className="text-center shadow shadow-gray-600 p-1 d">
      <div className="relative">
        <Link href={`/product/${product._id || 0}`}>
          <Image
            className="w-full h-60"
            src={product?.images[0] || "https://ibb.co/QDxqRcP"}
            height={800}
            width={800}
            alt="image"
          />
        </Link>
        <h2 className="absolute top-0 text-xs text-white left-0 uppercase">
          <span className="bg-black flex items-center  px-1">
            {" "}
            <AiFillThunderbolt />
            Free delivary
          </span>
        </h2>
        <h2 className="absolute top-0 text-xs text-white right-0 uppercase">
          <span className="bg-red-500   px-1"> Sale</span>
        </h2>
      </div>

      <h3>{product.title}</h3>
      {product?.previousPrice ? (
        <h4 className="text-sm">
          <span className=" px-2 rounded-full bg-gray-700 text-white">
            Save TK. {product?.previousPrice - product?.price}
          </span>
        </h4>
      ) : (
        <h3 className="mt-[20px] "></h3>
      )}
      <h4 className=" font-bold text-[.6rem] md:text-sm text-center  ml-auto mr-auto  ">
        {" "}
        <span className=" bg-white px-4 rounded-t-xl     ">
          ৳ {product?.price}{" "}
          <del className="text-red-700 "> {product?.previousPrice}</del>
        </span>
      </h4>

      <CButton
        onClick={() => setOpenModal(true)}
        variant="solid"
        customClass=" flex items-center justify-center gap-2 text-sm text-white w-full  bg-black "
      >
        <FaShoppingCart /> Buy
      </CButton>

      <CModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Product Details"
        width={"w-full md:w-3/4 lg:w-1/2"}
      >
        <div className=" flex flex-col md:flex-row text-black justify-between gap-4 items-center ">
          <div>
            <Image
              src={product?.images[0] || "https://ibb.co/QDxqRcP"}
              height={800}
              width={800}
              alt="image"
            />
          </div>

          <div>
            <div>
              <h1>{product.title}</h1>
              <h6 className=" text-start text-xs font-bold">Select Size:</h6>

              {/* size  */}

              <ul className="flex gap-2 justify-start  my-2 font-semibold uppercase text-lg ">
                {product?.generalSize?.s >= counter ? (
                  <button
                    className={
                      tabs === "s"
                        ? " cursor-pointer border border-black w-12 text-center bg-black text-white "
                        : " cursor-pointer border border-black w-12 text-center hover:bg-slate-300"
                    }
                    onClick={() => setTab("s")}
                  >
                    S
                  </button>
                ) : (
                  <button
                    disabled
                    className=" border border-black w-12 bg-red-500 text-center text-white"
                  >
                    S
                  </button>
                )}
                {product?.generalSize?.m >= counter ? (
                  <button
                    className={
                      tabs === "m"
                        ? " cursor-pointer border border-black w-12 text-center bg-black text-white "
                        : " cursor-pointer border border-black w-12 text-center hover:bg-slate-300"
                    }
                    onClick={() => setTab("m")}
                  >
                    M
                  </button>
                ) : (
                  <button
                    disabled
                    className=" border border-black w-12 bg-red-500 text-center text-white"
                  >
                    M
                  </button>
                )}
                {product?.generalSize?.l >= counter ? (
                  <button
                    className={
                      tabs === "l"
                        ? " cursor-pointer border border-black w-12 text-center bg-black text-white "
                        : " cursor-pointer border border-black w-12 text-center hover:bg-slate-300"
                    }
                    onClick={() => setTab("l")}
                  >
                    L
                  </button>
                ) : (
                  <button
                    disabled
                    className=" border border-black w-12 bg-red-500 text-center text-white"
                  >
                    L
                  </button>
                )}
                {product?.generalSize?.xl >= counter ? (
                  <button
                    className={
                      tabs === "xl"
                        ? " cursor-pointer border border-black w-12 text-center bg-black text-white "
                        : " cursor-pointer border border-black w-12 text-center hover:bg-slate-300"
                    }
                    onClick={() => setTab("xl")}
                  >
                    XL
                  </button>
                ) : (
                  <button
                    disabled
                    className=" border border-black w-12 bg-red-500 text-center text-white"
                  >
                    XL
                  </button>
                )}
                {product?.generalSize?.xxl > counter ? (
                  <button
                    className={
                      tabs === "xxl"
                        ? " cursor-pointer border border-black w-12 text-center bg-black text-white "
                        : " cursor-pointer border border-black w-12 text-center hover:bg-slate-300"
                    }
                    onClick={() => setTab("xxl")}
                  >
                    2XL
                  </button>
                ) : (
                  <button
                    disabled
                    className=" border border-black w-12 bg-red-500 text-center text-white"
                  >
                    XXL
                  </button>
                )}
              </ul>
            </div>

            {/* total product  */}

            <div className="flex gap-4 ">
              <div className=" w-24 py-1 flex  items-center px-2 justify-between border border-black">
                {counter > 1 ? (
                  <button onClick={() => setCounter(counter - 1)}>
                    <FaMinus />
                  </button>
                ) : (
                  <button disabled>
                    <FaMinus />
                  </button>
                )}
                <p className="font-bold text-lg "> {counter}</p>
                <button onClick={handleCounter}>
                  <FaPlus />
                </button>
              </div>

              <CButton
                onClick={handleCart}
                variant="solid"
                customClass=" bg-gray-800 hover:bg-black text-white px-4 py-2"
              >
                {" "}
                Add to cart
              </CButton>
            </div>
          </div>
        </div>
      </CModal>
    </div>
  );
};

export default ShopProductCart;
