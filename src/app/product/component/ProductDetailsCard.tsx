"use client";

import cToastify from "@/shared/Toastify/Toadtify";
import CButton from "@/utils/CButton/CButton";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlaneSlash, FaPlus } from "react-icons/fa";
import table from "../../../assets/table.png";
const ProductDetailsCard = ({ product }: any) => {
  const [image, setImage] = useState(product?.images[0] || '');
  const [tabs, setTab] = useState("");
  const [counter, setCounter] = useState(1);

  console.log(image)

  console.log(product)

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

  // cart related work
  const cartProduct = {
    image: product?.images[0],
    name: product?.title,
    unitPrice: product?.price,
    size: tabs,
    quantity: counter,
    id: product?._id,
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
    <div>
      <div className="flex flex-col md:flex-row justify-center gap-2 my-4">
        <div>
          <Image
            className=" w-full md:w-3/4 mx-auto"
            src={image}
            height={800}
            width={800}
            alt="image"
          />

          <div>
            
          </div>
        </div>

        {/* right side  */}
        <div className="w-full space-y-3 ">
          <h2 className="text-2xl">{product?.title}</h2>
          <h5>
            ৳{" "}
            <del className="text-lg text-gray-500 font-bold">
              {product?.prevPrice}
            </del>{" "}
            ৳ <span className="text-2xl font-bold">{product?.price}</span>
          </h5>

          <div>
            <h6 className=" text-xs font-bold">Select Size:</h6>

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

          <hr className="bg-black   h-1" />

          <p className="text-sm">
            Fabrilife Men&apos;s Premium Quality Sports t-shirts are smooth and
            comfortable. The t-shirts are made with the finest quality polyester
            fabric, perfect for casual or sports wear.
          </p>

          <div>
            <Image src={table} height={240} width={580} alt="size" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
