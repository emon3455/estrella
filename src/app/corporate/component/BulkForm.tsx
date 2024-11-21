"use client";

import CButton from "@/utils/CButton/CButton";
import CInput from "@/utils/CInput/CInput";
import CTextArea from "@/utils/CTextArea/CTextArea";
import Link from "next/link";
import { useState } from "react";
import { FaMailchimp, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const BulkForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    company: "",
    address: "",
    productType: "",
    quantity: "",
    description: "",
    Date: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = () => {};
  return (
    <section className="max-w-5xl mx-auto py-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="mx-2 md:w-1/2">
          <div className="text-center">
            <h1 className="text-3xl "> Share Your Needs</h1>
            <h5>We&#39;ll Make It Happen!</h5>
          </div>

          <form onSubmit={handleSubmit} className="my-2 space-y-2 p-2">
            <div>
              <CInput
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  }
                  setData({ ...data, name: e.target.value });
                }}
                id="name"
                type="name"
                label="Name*"
                placeholder="Name"
              />
            </div>
            <div>
              <CInput
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  }
                  setData({ ...data, email: e.target.value });
                }}
                id="email"
                type="email"
                label="Email*"
                placeholder="Email"
              />
            </div>
            <div>
              <CInput
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  }
                  setData({ ...data, phone: e.target.value });
                }}
                id="Phone"
                type="Phone"
                label="Phone*"
                placeholder="Phone"
              />
            </div>

            <div>
              <CInput
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  }
                  setData({ ...data, company: e.target.value });
                }}
                id="company"
                type="text"
                label="Company*"
                placeholder="Company/Organization"
              />
            </div>

            <div>
              <CInput
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  }
                  setData({ ...data, address: e.target.value });
                }}
                id="address"
                type="text"
                label="Address*"
                placeholder="Address"
              />
            </div>
            <div>
              <CInput
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  }
                  setData({ ...data, productType: e.target.value });
                }}
                id="productType"
                type="text"
                label="ProductType*"
                placeholder="Product Type"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <CInput
                  onChange={(e) => {
                    if (e.target.value) {
                      setError("");
                    }
                    setData({ ...data, Date: e.target.value });
                  }}
                  id="productType"
                  type="date"
                  label="Estimated Delivery Date*"
                  placeholder="date"
                />
              </div>

              <div>
                <CInput
                  onChange={(e) => {
                    if (e.target.value) {
                      setError("");
                    }
                    setData({ ...data, quantity: e.target.value });
                  }}
                  id="quantity"
                  type="text"
                  label="Approx. Quantity*"
                  placeholder="Approx. Quantity"
                />
              </div>
            </div>

            <div>
              <CTextArea
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  }
                  setData({ ...data, description: e.target.value });
                }}
                id="description"
                label="Description (Optional)*"
              />
            </div>

            <div>
              <CButton type="submit" variant="solid" className="w-full">
                {" "}
                Submit
              </CButton>
            </div>
          </form>
        </div>

        <div className="mx-2 md:w-1/2">
          <div className="text-center">
            <h1 className="text-3xl "> Or, we are just a call away</h1>
            <h5>Your Solutions Await!</h5>
          </div>

          <div className="text-sm my-8 space-y-4">
            <p>
              {" "}
              let&#39;s talk and make your brand stand out! We are just one call
              away. Or you can book a walk-in appointment with us.
            </p>

            <h1 className="font-bold">The Office</h1>
            <ul className="list-disc ml-8">
              <li className="">
                <span className="flex justify-start gap-1">
                  <FaLocationDot />
                  Fabrilife,
                  <br />
                  Level 9, Rupayan Latifa Shamsuddin Square (Opposite of Sony
                  Square) Plot 3, Road 1, Section 1, Mirpur, Dhaka-1216,
                  Bangladesh.
                </span>
              </li>
              <li>
                <Link
                  href={"https://api.whatsapp.com/send?phone=8801332502902"}
                >
                  <span className=" flex items-center text-blue-600 hover:underline ">
                    {" "}
                    <FaWhatsapp /> +88 01332 502 902 (Sales, Whatsapp - Global)
                  </span>
                </Link>
              </li>
              <li>
                <Link href={"https:tel:+8809677666888"}>
                  <span className=" flex items-center text-blue-600 hover:underline ">
                    {" "}
                    <FaPhone /> +8809677666888
                  </span>
                </Link>
              </li>
              <li>
                <Link href={"mailto:xxxxx"}>
                  <span className=" flex items-center text-blue-600 hover:underline ">
                    {" "}
                    <FaMailchimp /> cs@fabrilife.com
                  </span>
                </Link>
              </li>
            </ul>

            <h1 className="font-bold">Hours</h1>
            <ul className="ml-8 list-disc">
              <li>Saturday-Thursday</li>
              <li>10:00 AM - 07:00 PM (GMT+6)</li>
            </ul>
          </div>

          <div className="">
            <iframe
              className="w-[99%] h-[300px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.4484498452293!2d90.37305367410184!3d23.79079158722681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ac2cb867bf%3A0x2366b3d34127371d!2z4Ka24KeH4KaT4Kah4Ka84Ka-4Kaq4Ka-4Kah4Ka84Ka-IOCmruCnh-Cmn-CnjeCmsOCniyDgprDgp4fgprIg4Ka44KeN4Kaf4KeH4Ka24KaoIFNoZXdyYXBhcmEgTWF0cm8gUmFpbCBTdGF0aW9u!5e1!3m2!1sbn!2sbd!4v1716123613739!5m2!1sbn!2sbd"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkForm;
