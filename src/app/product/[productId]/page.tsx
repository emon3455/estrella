import React from "react";
import ProduuctDetailsComponent from "./component/ProduuctDetailsComponent";

const productDetails = ({ params }: any) => {
  return (
    <div className="mx-2">
      <ProduuctDetailsComponent id={params?.productId} />
    </div>
  );
};

export default productDetails;
