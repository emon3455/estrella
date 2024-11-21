"use client";
import { useGetSingleProductQuery } from "@/Redux/Features/admin/product/admin-product-slice";
import React from "react";
import ProductDetailsCard from "../../component/ProductDetailsCard";

const ProduuctDetailsComponent = ({ id }: any) => {
  const { isLoading, data, error, refetch } = useGetSingleProductQuery(id);

  return (
    <div>
      <ProductDetailsCard product={data?.product} />
    </div>
  );
};

export default ProduuctDetailsComponent;
