"use client";

import React, { useEffect, useMemo, useState } from "react";
import ShopProductCart from "../component/ShopProductCart";
import { MdSignalCellularNodata } from "react-icons/md";
import COverlayLoader from "@/utils/COverlayLoader/COverlayLoader";
import Loading from "@/app/loading";

import NoProduct from "../../../shared/NoProduct";
import { useFilterProductQuery } from "@/Redux/Features/admin/product/admin-product-slice";


const DynamicCategoryComponent = ({category}  : any) => {
  


  const { data, isLoading, error, refetch } = useFilterProductQuery(
    {
      category: category ?? '',
    }

  );
  console.log({ data, isLoading, error });
return (
    <div>

        <h1></h1>
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
export default DynamicCategoryComponent;


