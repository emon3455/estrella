"use client";
import { useFilterProductMutation } from "@/Redux/Features/admin/product/admin-product-slice";
import React, { useEffect, useMemo, useState } from "react";
import ShopProductCart from "../component/ShopProductCart";
import { MdSignalCellularNodata } from "react-icons/md";
import COverlayLoader from "@/utils/COverlayLoader/COverlayLoader";
import Loading from "@/app/loading";

import NoProduct from "../../../shared/NoProduct";

const DynamicCategoryPage = ({ params }: any) => {
  const formattedData = useMemo(
    () => ({
      [params?.category]: true,
    }),
    [params?.category]
  );

  const [data, setData]: any = useState([]);

  const [
    filterProduct,
    { isLoading, isSuccess, data: ProductData, isError, error: productError },
  ] = useFilterProductMutation();

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const filterData = await filterProduct({
          filter: formattedData,
        }).unwrap();
        console.log(filterData.products);
        setData(filterData.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFilteredProducts();
  }, [filterProduct, formattedData]);

  return (
    <div>
      {isLoading ? (
        <h2>
          <Loading />
        </h2>
      ) : (
        <div className="h-screen ">
          {data.length == 0 ? (
            <div>
              <h2>
                <NoProduct />
              </h2>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 mx-8">
              {data.map((data: any, idx: number) => (
                <ShopProductCart key={idx} data={data} Loading={isLoading} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DynamicCategoryPage;
