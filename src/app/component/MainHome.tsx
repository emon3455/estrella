"use client";

import { useFilterProductMutation } from "@/Redux/Features/admin/product/admin-product-slice";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import Link from "next/link";
import TopCategoryCard from "./TopCategoryCard";
import CategoryProductCard from "./CategoryProductCard";
import ViewMoreCard from "./ViewMoreCard";
import Image from "next/image";
import homeImage from "@/assets/home.png";
import { TopCategory } from "@/content/TopCategory";
import Footer from "@/components/Footer";
import { category } from "@/content/category";
import CategoryCard from "./CategoryCard";

const MainHome = () => {
  const men = {
    name: "Mens Full Sleeve T-shirt",
    image: "https://i.ibb.co/C9LD8jW/Mens-Full-sleeve-T-shirt.jpg",
    route: "/menFullSleeveTShirt",
  };
  const menJacket = {
    name: "Mens Jacket",
    image: "https://i.ibb.co/Mg6TyQB/mens-jacket.jpg",
    route: "/menJacket",
  };

  const mensShort = {
    name: "Mens Short",
    image: "https://i.ibb.co/kBw9T4q/mens-short.jpg",
    route: "/menShorts",
  };
  const sportsTshirt = {
    name: "Sports T-Shirt",
    image: "https://i.ibb.co/njvQ4vw/sport-tshirt.jpg",
    route: "/menHalfSleeveTShirtSports",
  };
  const mask = {
    name: "Cirtified Face Mask",
    image: "https://i.ibb.co/74PYLf0/certified-face-mask.jpg",
    route: "/isFaceMask",
  };

  const [data, setData] = useState<any[]>([]);
  const [menFull, setMenFull] = useState<any[]>([]);
  const [mensJacket, setMenJacket] = useState<any[]>([]);
  const [menShort, setMenShort] = useState<any[]>([]);
  const [menSports, setMenSports] = useState<any[]>([]);
  const [menMask, setMenMask] = useState<any[]>([]);

  // const [filterProduct] = useFilterProductMutation();

  // useEffect(() => {
  //   const fetchFilteredProducts = async () => {
  //     try {
  //       const filterData = await filterProduct({}).unwrap();
  //       setData(filterData.products);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchFilteredProducts();
  // }, [filterProduct]);

  useEffect(() => {
    const menFull1 = data.filter((item) => item?.menFullSleeveTShirtBlank);
    const mensJacket1 = data.filter((item) => item?.menJacket);
    const menShort1 = data.filter((item) => item?.menSportsShorts);
    const menSports1 = data.filter((item) => item?.menHalfSleeveTShirtSports);
    const menMask1 = data.filter((item) => item?.isFaceMask);

    setMenFull(menFull1);
    setMenJacket(mensJacket1);
    setMenShort(menShort1);
    setMenSports(menSports1);
    setMenMask(menMask1);
  }, [data]);

  return (
    <main className=" ">
      <Banner />
      <div className=" bg-zinc-300 flex justify-around gap-10 items-center p-4 text-xs md:text-base">
        <Link href={`/shop`}>
          {" "}
          <p>SHOP NOW</p>
        </Link>
        <Link href={`/shop/isMen`}>
          <p>MEN</p>
        </Link>
        <Link href={"/shop/isWomen"}>
          {" "}
          <p>WOMEN</p>
        </Link>
        <Link href={"/shop/isKids"}>
          {" "}
          <p>KIDS</p>
        </Link>
      </div>

      <div className="my-4">
        <h1 className="text-3xl font-bold bg-orange-100 uppercase text-center p-4 text-amber-700 ">
          New Arrival
        </h1>

        <div className="max-w-6xl  grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-8 mx-4 lg:mx-auto">
          {category?.map((item: any, idx: number) => (
            <CategoryCard key={idx} data={item} />
          ))}
        </div>
      </div>

      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-4 my-8">
          {TopCategory.slice(0, 3).map((item: any, idx: number) => (
            <TopCategoryCard key={idx} data={item} />
          ))}
        </div>

        <div className="flex flex-col items-center md:flex-row m-4 gap-4 ">
          <div className="w-full md:w-1/3 ">
            <TopCategoryCard data={men} />
          </div>

          <div className="w-full md:w-2/3 ">
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {menFull.slice(0, 7).map((item, idx) => (
                <CategoryProductCard key={idx} data={item} />
              ))}
              <ViewMoreCard image={men.image} data={"men"} />
            </div>
          </div>
        </div>

        {/* tag line section  */}

        <div className="flex flex-col-reverse lg:flex-row mx-4 gap-4 my-8 ">
          <div className="w-full lg:w-2/3 flex-1">
            <h1 className="text-4xl">ESTRELLA </h1>
            <h3 className=" text-xl lg:text-2xl">
              Because comfort and confidence go hand in hand.
            </h3>
            <p className="w-lg">
              We focus on carefully selecting the best clothing that is
              comfortable, looks great, and makes you confident. Apart from the
              fabric, design and fit, we go through strict quality control
              parameters to give you what you truly deserve. The power of a good
              outfit is how it can influence your perception of yourself.
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <Image src={homeImage} height={800} width={800} alt="image" />
          </div>
        </div>

        {/* mens jacket category  */}

        <div className="flex flex-col items-center md:flex-row m-4 gap-4 ">
          <div className="w-full md:w-1/3 ">
            <TopCategoryCard data={menJacket} />
          </div>

          <div className="w-full md:w-2/3 ">
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {mensJacket.slice(0, 7).map((item, idx) => (
                <CategoryProductCard key={idx} data={item} />
              ))}
              <ViewMoreCard image={menJacket.image} data={"menjacket"} />
            </div>
          </div>
        </div>

        {/* second three category  */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-4 my-8">
          {TopCategory.slice(3, 6).map((item: any, idx: number) => (
            <TopCategoryCard key={idx} data={item} />
          ))}
        </div>

        {/* mens full sleeve category  */}

        <div className="flex flex-col items-center md:flex-row m-4 gap-4 ">
          <div className="w-full md:w-1/3 ">
            <TopCategoryCard data={mensShort} />
          </div>

          <div className="w-full md:w-2/3 ">
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {menShort.slice(0, 7).map((item, idx) => (
                <CategoryProductCard key={idx} data={item} />
              ))}
              <ViewMoreCard image={mensShort.image} data={"menshort"} />
            </div>
          </div>
        </div>

        {/* third three category  */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-4 my-8">
          {TopCategory.slice(6, 9).map((item: any, idx: number) => (
            <TopCategoryCard key={idx} data={item} />
          ))}
        </div>

        {/* sports tshirt category  */}

        <div className="flex flex-col items-center md:flex-row m-4 gap-4 ">
          <div className="w-full md:w-1/3 ">
            <TopCategoryCard data={sportsTshirt} />
          </div>

          <div className="w-full md:w-2/3 ">
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {menSports.slice(0, 7).map((item, idx) => (
                <CategoryProductCard key={idx} data={item} />
              ))}
              <ViewMoreCard image={men.image} data={"sports_tshirt"} />
            </div>
          </div>
        </div>

        {/* face mask category  */}

        <div className="flex items-center flex-col md:flex-row m-4 gap-4 ">
          <div className="w-full md:w-1/3 ">
            <TopCategoryCard data={mask} />
          </div>

          <div className="w-full md:w-2/3 ">
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {menMask.slice(0, 5).map((item, idx) => (
                <CategoryProductCard key={idx} data={item} />
              ))}
              <ViewMoreCard image={men.image} data={"sports_tshirt"} />
            </div>
          </div>
        </div>

        {/* premium section  */}

        <div>
          <div className="bg-[#CCF7F1] uppercase text-center py-4 my-4 text-[#009688]">
            <h4 className="text-xs font-semibold">
              The Best Quality Socks you can find in Bangladesh
            </h4>
            <h1 className=" text-2xl font-bold">Premium Antibacterial Socks</h1>
            <h4 className="text-xs font-semibold">Visit Store </h4>
          </div>

          <div className=" mx-4 mb-8">
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {menFull.slice(0, 15).map((item, idx) => (
                <CategoryProductCard key={idx} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default MainHome;
