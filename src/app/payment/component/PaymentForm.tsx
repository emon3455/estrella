"use client";

import { getCartData } from "@/content/getCartData";
import { useEffect, useState, useMemo } from "react";

// List of Bangladesh Zillas (Districts)
const zillas = [
  "Dhaka",
  "Faridpur",
  "Gazipur",
  "Gopalganj",
  "Kishoreganj",
  "Madaripur",
  "Manikganj",
  "Munshiganj",
  "Narayanganj",
  "Narsingdi",
  "Rajbari",
  "Shariatpur",
  "Tangail",
  "Bagerhat",
  "Chuadanga",
  "Jashore",
  "Jhenaidah",
  "Khulna",
  "Kushtia",
  "Magura",
  "Meherpur",
  "Narail",
  "Satkhira",
  "Bogra",
  "Joypurhat",
  "Naogaon",
  "Natore",
  "Chapai Nawabganj",
  "Pabna",
  "Rajshahi",
  "Sirajganj",
  "Dinajpur",
  "Gaibandha",
  "Kurigram",
  "Lalmonirhat",
  "Nilphamari",
  "Panchagarh",
  "Rangpur",
  "Thakurgaon",
  "Habiganj",
  "Moulvibazar",
  "Sunamganj",
  "Sylhet",
  "Barguna",
  "Barisal",
  "Bhola",
  "Jhalokathi",
  "Patuakhali",
  "Pirojpur",
  "Bandarban",
  "Brahmanbaria",
  "Chandpur",
  "Chattogram",
  "Cox's Bazar",
  "Cumilla",
  "Feni",
  "Khagrachari",
  "Lakshmipur",
  "Noakhali",
  "Rangamati",
  "Mymensingh",
  "Jamalpur",
  "Netrokona",
  "Sherpur",
];

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    altPhone: "",
    note: "",
  });

  const [cartProduct, setCartProduct] = useState([] as any[]);

  // Memoize the product data to prevent unnecessary recalculation
  const ProductData = useMemo(() => getCartData(), []);

  // Calculate total amount only if cartProduct changes
  const TotalAmount = useMemo(() => {
    return cartProduct.reduce(
      (total: number, item: { unitPrice: number; quantity: number }) =>
        total + item.unitPrice * item.quantity,
      0
    );
  }, [cartProduct]);

  // Set cart products only when ProductData is first fetched
  useEffect(() => {
    setCartProduct(ProductData);
  }, [ProductData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">Contact Info</h2>

      <div className="flex flex-col md:flex-row gap-2">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Select City
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-[7px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a City</option>
            {zillas.map((zilla) => (
              <option key={zilla} value={zilla}>
                {zilla}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Detailed Address
        </label>
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Note for FabriLife (Optional)
        </label>
        <input
          name="note"
          value={formData.note}
          onChange={handleChange}
          className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="bg-slate-100 w-full p-4 my-2">
        <div className="text-lg font-semibold  text-center mb-4">
          Your total payable amount is: <br />
          <span className="text-green-600 text-4xl">
            ৳{TotalAmount + 60}
          </span>{" "}
          <br /> Breakdown
        </div>

        <table className="text-center w-full  border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 py-2 px-4">Purpose</th>
              <th className="border border-gray-300 py-2 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Total</td>
              <td className="border border-gray-300 py-2 px-4">
                ৳{TotalAmount}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-2 px-4">Shipping</td>
              <td className="border border-gray-300 py-2 px-4">৳60</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-1 rounded-lg hover:bg-green-600 transition duration-300"
      >
        Submit
      </button>

      <p className="text-center text-gray-500 mt-4">
        You will get the delivery within 2-3 Days after confirmation.
      </p>
    </form>
  );
};

export default PaymentForm;
