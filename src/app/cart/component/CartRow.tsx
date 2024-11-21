"use client"

import { getCartData } from "@/content/getCartData";
import CButton from "@/utils/CButton/CButton";
import Image from "next/image";
import Link from "next/link";
import { MdDeleteForever } from "react-icons/md";

const CartRow = ({ data, refetch, index }: any) => {
    // console.log(index);

    const ProductData = getCartData()

    const saveProductData = (products: any) => {
        localStorage.setItem('products', JSON.stringify(products));
    };

    const deleteProductByIndex = (index: number) => {
        const updatedProducts = [...ProductData];
        updatedProducts.splice(index, 1);
        saveProductData(updatedProducts);
        refetch()
    };

  

    // console.log(data);
    return (
        <tr>
            <td className=" px-6 py-3 border border-slate-500 ">
                <Image className="w-24" src={data?.image} height={800} width={800} alt="image" /> </td>
            <td className="border border-slate-500 text-center"><Link className=" font-semibold   text-center text-sm text-blue-800 hover:underline" href={'/product/1'}>{data?.name}</Link></td>
            <td className="px-6 py-3 text-center border border-slate-500">{data?.unitPrice            }</td>
            <td className="px-6 py-3 text-center border border-slate-500">{data?.size.toUpperCase()}</td>
            <td className="px-6 py-3 text-center border border-slate-500">{data?.quantity}</td>
            <td className="px-6 py-3 text-center border border-slate-500">{data?.quantity * data?.unitPrice  }</td>
            <td className="px-6 py-3 text-center border border-slate-500">    <CButton onClick={()=> deleteProductByIndex(index)} variant="solid" customClass="bg-red-600 py-2 px-4 text-white rounded-full"><MdDeleteForever /></CButton></td>

        </tr>
    );
};

export default CartRow;