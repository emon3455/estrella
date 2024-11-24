"use client";
import CCard from "@/utils/CCard/CCard";
import CSkeleton from "@/utils/CSkelleton/CSkelleton";
import ProductRowData from "./ProductRowData";
import { useGetProductQuery } from "@/Redux/Features/admin/product/admin-product-slice";

const ProductRow = () => {

  const { isLoading, isSuccess, data, isError, error: productError, refetch } = useGetProductQuery({} as any);

  return (
    // <div>This is product page</div>
    <CCard title="Products OF ESTRELLA">
      {isLoading && <CSkeleton />}

      {data && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-bold">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-bold">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-bold">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-bold">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-bold">
                  Total Sales
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-bold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((product: any, index: number) => (
                <ProductRowData
                  key={index}
                  index={index}
                  product={product}
                  refetch={refetch as any}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </CCard>
  );
};

export default ProductRow;
