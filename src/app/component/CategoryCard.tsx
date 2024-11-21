import Image from "next/image";
import React from "react";

import img from "@/assets/tshirt.png";
import Link from "next/link";

const CategoryCard = ({ data }: any) => {
  return (
    <>
      <Link href={`/shop/${data?.route}`}>
        <div className="relative w-full">
          <Image
            className="w-full "
            src={data?.image}
            height={800}
            width={800}
            alt="image"
          />

          <p className=" text-[.6rem] md:text-sm text-center absolute top-0 left-0 right-0 ml-auto mr-auto ">
            {" "}
            <span className=" bg-white px-4 rounded-b-xl    ">
              {data?.name}
            </span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
