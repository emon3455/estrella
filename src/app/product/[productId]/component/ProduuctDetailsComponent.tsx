"use client";

import React from "react";
import ProductDetailsCard from "../../component/ProductDetailsCard";
import { useGetSingleProductQuery } from "@/Redux/Features/admin/product/admin-product-slice";

const ProduuctDetailsComponent = ({ id }: any) => {
  const { isLoading, data, error, refetch } = useGetSingleProductQuery(id);

  return (
    <div>
      <ProductDetailsCard product={data} />
    </div>
  );
};

export default ProduuctDetailsComponent;
