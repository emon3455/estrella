"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { DemoProduct } from "@/content/DemoProduct";
import Image from "next/image";

const Sustain = () => {
  const demo = DemoProduct;
  // console.log(demo);
  return (
    <div className="max-w-5xl mx-auto my-6">
      <h1 className="text-base md:text-3xl text-gray-700 font-semibold text-center">
        Sustainable Custom Merchandise & Corporate Gift Solutions.
      </h1>
      <p className="text-[10px] mx-1 md:text-base text-center">
        We specialize in providing sustainable, budget-friendly, and top-tier
        custom merchandise and corporate gift solutions catering to a diverse
        clientele, spanning from dynamic startups to esteemed multinational
        corporations. Backed by a comprehensive in-house production facility, we
        guarantee a seamless production process and uphold unwavering standards
        of quality.
      </p>
      <div className="mx-4 my-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          // pagination={{
          //     clickable: true,
          // }}
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {demo.map((data: any, idx: any) => (
            <SwiperSlide key={idx}>
              <Image src={data.image} width={800} height={800} alt="image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sustain;
