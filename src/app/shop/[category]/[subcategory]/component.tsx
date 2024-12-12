"use client";

import Loading from "@/app/loading";
import { useFilterProductQuery } from "@/Redux/Features/admin/product/admin-product-slice";
import NoProduct from "@/shared/NoProduct";
import React from "react";
import ShopProductCart from "../../component/ShopProductCart";

const SubcategoryComponenet = ({ subCategory = [], category }: any) => {
  function formatText(text: any) {
    return text
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char: any) => char.toUpperCase()); // Capitalize the first letter of each word
  }

  const { data, isLoading, error, refetch } = useFilterProductQuery({
    category: category ?? "",
    subCategory: subCategory ?? [],
  });
  // console.log({ data, isLoading, error });
  return (
    <div>
      <div className="flex space-x-4 p-4 bg-gray-100 rounded-lg shadow-lg">
        <div
          id="category"
          className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg  tracking-wide"
        >
          {formatText(category)}
        </div>



        <div
          id="subcategory"
          className="bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-lg capitalize"
        >
          {formatText(subCategory)}
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
            <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 mx-8">
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
  );
};

export default SubcategoryComponenet;
