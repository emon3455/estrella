import React from "react";
import AddProductForm from "./component/AddProductForm";

const AddProductPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-5">
        Add Your New Product Here
      </h2>
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;
