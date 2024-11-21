"use client"
import { getCartData } from '@/content/getCartData';
import React, { useEffect, useMemo, useState } from 'react';
import CartRow from './CartRow';
import Link from 'next/link';
import CButton from '@/utils/CButton/CButton';

const CartHome = () => {

    const [cartProduct, setCartProduct] = useState([] as any);

    // Memoize the ProductData, it will re-run when cartProduct changes
    const ProductData = useMemo(() => cartProduct, [cartProduct]);
  
    // Calculate TotalAmount based on the current cartProduct
    const TotalAmount = useMemo(
      () =>
        cartProduct.reduce(
          (total: number, item: { unitPrice: number; quantity: number }) =>
            total + item.unitPrice * item.quantity,
          0
        ),
      [cartProduct]
    );
  
    // Set the cartProduct when component mounts
    useEffect(() => {
      setCartProduct(getCartData()); // Initialize the cart products
    }, []);
  
    // Refetch cart data after deletion or other cart updates
    const refetch = () => {
      const updatedData = getCartData(); // Get updated cart data
      setCartProduct([...updatedData]); // Update state with the new data, triggering re-renders
    };

    return (
        <div className="my-10 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold text-center">Your Cart</h1>

      <table className="overflow-scroll border-collapse border border-slate-500 w-full mx-auto">
        <thead className="overflow-x-scroll text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3 border-slate-500">Image</th>
            <th className="px-6 py-3 border-slate-500">Name</th>
            <th className="px-6 py-3">Unit Price</th>
            <th className="px-6 py-3">Size</th>
            <th className="px-6 py-3">Quantity</th>
            <th className="px-6 py-3">Sub Total</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody className="overflow-x-scroll">
          {ProductData.map((data: any, idx: number) => (
            <CartRow key={idx} data={data} refetch={refetch} index={idx} />
          ))}
        </tbody>
      </table>

      {/* Total Amount */}
      <div className="text-center space-y-4 my-10">
        <h1 className="text-2xl font-semibold">
          Total Amount: <span className="text-green-700">{TotalAmount}</span>
        </h1>
        <div className="flex flex-col gap-4">
          <Link href={"/payment"}>
            <CButton
              variant="solid"
              customClass="px-4 bg-green-700 text-white rounded-full"
            >
              Place Order
            </CButton>
          </Link>

          <Link href={"/shop"}>
            <CButton
              variant="solid"
              customClass="px-4 bg-amber-600 text-white rounded-full"
            >
              Continue Shopping
            </CButton>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default CartHome;