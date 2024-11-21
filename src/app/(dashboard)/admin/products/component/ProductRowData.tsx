import { useDeleteProductMutation } from "@/Redux/Features/admin/product/admin-product-slice";
import cToastify from "@/shared/Toastify/Toadtify";
import { warningAlert } from "@/utils/alert-function";
import CButton from "@/utils/CButton/CButton";
import Image from "next/image";
import React, { useEffect } from "react";

const ProductRowData = ({ product, index, refetch }: any) => {
  const [
    deleteProduct,
    { isLoading, isError, isSuccess: isPrductDeleteSuccess, error },
  ] = useDeleteProductMutation();
  const id = product._id;
  console.log(id);

  useEffect(() => {
    if (isPrductDeleteSuccess) {
      cToastify({
        type: "success",
        message: "Product Deleted Successful",
      });
    }
  }, [isPrductDeleteSuccess]);

  const handleDelete = async (id: any) => {
    warningAlert({
      title: "Are you sure?",
      text: "Once Deleted, you will not be able to revert this!",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(id);

        try {
          await deleteProduct(id).unwrap();
          console.log("Product deleted successfully");

          refetch();
        } catch (err) {
          console.error("Failed to delete the product: ", err);
        }
      }
    });
  };

  return (
    <tr key={product._id} className={index % 2 !== 0 ? "bg-gray-100" : ""}>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <Image
          className="w-20"
          src={product.images[0]}
          height={800}
          width={800}
          alt="image"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {product.title}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {product.price}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        M:{product.generalSize.m}, L:{product.generalSize.l}, XL:
        {product.generalSize.xl}, XXL:{product.generalSize.xxl}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-4">
        0
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex flex-col  space-y-2 items-center">
          <CButton
            onClick={() => handleDelete(id)}
            variant="solid"
            customClass="bg-red-600 px-4 py-2 rounded text-white"
          >
            {" "}
            Delete{" "}
          </CButton>
          <CButton
            variant="solid"
            customClass="bg-green-800 px-4 py-2 rounded text-white"
          >
            {" "}
            Update{" "}
          </CButton>
        </div>
      </td>
    </tr>
  );
};

export default ProductRowData;
