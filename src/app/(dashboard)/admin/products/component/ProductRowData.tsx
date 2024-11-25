import { useDeleteProductMutation } from "@/Redux/Features/admin/product/admin-product-slice";
import cToastify from "@/shared/Toastify/Toadtify";
import { warningAlert } from "@/utils/alert-function";
import CButton from "@/utils/CButton/CButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProductRowData = ({ product, index, refetch }: any) => {

  const router = useRouter();

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

  const handleUpdate = (id: string) => {
    router.push(`/admin/products/${id}`);
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
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <CButton
            onClick={() => handleDelete(id)}
            variant="solid"
            customClass="bg-red-600 px-4 py-2 rounded text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
          </CButton>
          <CButton
            variant="solid"
            customClass="bg-green-800 px-4 py-2 rounded text-white"
            onClick={() => handleUpdate(id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-line"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/><path d="m15 5 3 3"/></svg>
          </CButton>
        </div>
      </td>
    </tr>
  );
};

export default ProductRowData;
