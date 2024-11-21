"use client";
import Drawer from "@/components/Drawer";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import Topbar from "@/components/Topbar";
import CInput from "@/utils/CInput/CInput";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { DemoProduct } from "@/content/DemoProduct";
import ShopProductCart from "./ShopProductCart";
import { initData } from "@/content/initData";
import CCheckRadio from "@/utils/CCheckRadio/CCheckRadio";
import { useFilterProductMutation } from "@/Redux/Features/admin/product/admin-product-slice";
import CSkeleton from "@/utils/CSkelleton/CSkelleton";
import UpperNav from "@/components/UpperNav";
import COverlayLoader from "@/utils/COverlayLoader/COverlayLoader";
import Loading from "@/app/loading";
import NoProduct from "@/shared/NoProduct";

const ShopPageCompoment = () => {
  const initialData = initData;

  const [info, setInfo] = useState(initialData);

  const [filteredData, setFilteredData] = useState<any>({});

  const getFilteredData = useCallback((data: any): any => {
    const result: any = {};

    for (const key in data) {
      if (typeof data[key] === "object" && !Array.isArray(data[key])) {
        const nestedResult = getFilteredData(data[key]);
        if (Object.keys(nestedResult).length > 0) {
          result[key] = nestedResult;
        }
      } else if (data[key] === true) {
        result[key] = data[key];
      }
    }

    return result;
  }, []);

  useEffect(() => {
    const filtered = getFilteredData(info);
    setFilteredData(filtered);
  }, [info, getFilteredData]);

  const [data, setData]: any = useState([]);
  // console.log(data);
  const [
    filterProduct,
    { isLoading, isSuccess, data: ProductData, isError, error: productError },
  ] = useFilterProductMutation();

  // const refetch = async () => {
  //     try {
  //         const filterData = await filterProduct(filteredData).unwrap();
  //         // console.log(filterData.products);
  //         setData(filterData.products)
  //     } catch (error) {
  //         console.error(error);
  //     }

  // }

  console.log({ filter: filteredData });

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const filterData = await filterProduct({
          filter: filteredData,
        }).unwrap();
        // console.log(filterData.products);
        setData(filterData.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFilteredProducts();
  }, [filterProduct, filteredData]);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log(searchValue);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <section>
        <UpperNav />
        <nav className="flex justify-between items-center p-2 bg-[#1B2966] text-white">
          <div className="flex  w-1/4 justify-around items-center">
            {/* sidebar  */}
            <div className=" lg:hidden">
              <button
                onClick={handleClick}
                className="text-xl focus:outline-none inline w-10 text-white"
              >
                {click ? "✕" : "☰"}
              </button>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  className="w-16"
                  src={logo}
                  height={80}
                  width={100}
                  alt="logo"
                />
              </Link>
            </div>

            <div>
              <Link href={"/shop"}>
                <Topbar />
              </Link>
            </div>
          </div>

          <div className="flex  w-3/4 justify-around items-center">
            <div className="relative Flex-1 w-2/3">
              <div>
                <CInput
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  type="text"
                  placeholder="Search By Title And Tags"
                  endIcon={
                    <span onClick={handleSearch} className="text-black">
                      <FaSearch />
                    </span>
                  }
                  className="text-black"
                />
              </div>
            </div>

            <div className="flex space-x-2 mr-4">
              <Link href="/cart" className="text-2xl">
                <p className="flex relative">
                  <FaShoppingCart />
                  <span className="bg-red-700 rounded-full px-1 text-xs absolute bottom-0 -right-2 ">
                    0
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </nav>
      </section>

      {/* big screen  */}

      <div className="flex ">
        <div className="  hidden w-[350px] lg:block text-[12px] py-4">
          <div className="  mx-4 h-screen overflow-scroll">
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, newArrival: !info.newArrival });
                }}
                type="checkbox"
                id="New Arrival"
                label="New Arrival"
              />
            </ul>
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, topSelling: !info.topSelling });
                }}
                type="checkbox"
                id="Top selling"
                label="Top selling"
              />
            </ul>
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, freeDelivary: !info.freeDelivary });
                }}
                type="checkbox"
                id="Free Delivary"
                label="Free Delivary"
              />
            </ul>

            {/* mens  */}
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, isMen: !info.isMen });
                }}
                type="checkbox"
                id="Men"
                label="Men"
              />

              {/* mens second level half shirt  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        menHalfSleeveTShirt: !info.menHalfSleeveTShirt,
                      });
                    }}
                    type="checkbox"
                    id="Half-Sleeve T-Shirt"
                    label="Half-Sleeve T-Shirt"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menHalfSleeveTShirtBlank:
                              !info.menHalfSleeveTShirtBlank,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve_T-Shirt_blank"
                        label="blank"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menHalfSleeveTShirtPrinted:
                              !info.menHalfSleeveTShirtPrinted,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve_T-Shirt_printed"
                        label="printed"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menHalfSleeveTShirtCutAndStitch:
                              !info.menHalfSleeveTShirtCutAndStitch,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve_T-Shirt_cutAndStitch"
                        label="Cut and Stitch"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menHalfSleeveTShirtRaglan:
                              !info.menHalfSleeveTShirtRaglan,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve_T-Shirt_raglan"
                        label="Raglan"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtRaglanDesigner:
                              !info.menFullSleeveTShirtRaglanDesigner,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve_T-Shirt_raglanDesigner"
                        label="Raglan (Designer)"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menHalfSleeveTShirtSports:
                              !info.menHalfSleeveTShirtSports,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve_T-Shirt_sports"
                        label="Sports"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* full tshirt  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        menFullSleeveTShirt: !info.menFullSleeveTShirt,
                      });
                    }}
                    type="checkbox"
                    id="Full-Sleeve T-Shirt"
                    label="Full-Sleeve T-Shirt"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtBlank:
                              !info.menFullSleeveTShirtBlank,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_blank"
                        label="blank"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtPrinted:
                              !info.menFullSleeveTShirtPrinted,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_blackprinted"
                        label="printed"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtRaglan:
                              !info.menFullSleeveTShirtRaglan,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_blackraglan"
                        label="raglan"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtCutAndStitch:
                              !info.menFullSleeveTShirtCutAndStitch,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_cutandStitch"
                        label="Cut and Stitch"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtCutAndStitchDesigner:
                              !info.menFullSleeveTShirtCutAndStitchDesigner,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_cutandStitchDesigner"
                        label="Cut and Stitch (Design)"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtRaglanDesigner:
                              !info.menFullSleeveTShirtRaglanDesigner,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_raglanDesigner"
                        label="Raglan (Designer)"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtSports:
                              !info.menFullSleeveTShirtSports,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_Sports"
                        label="Sports"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* men shirt  */}

              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menShirt: !info.menShirt });
                    }}
                    type="checkbox"
                    id="menShirt"
                    label="Shirt"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menCasualShirt: !info.menCasualShirt,
                          });
                        }}
                        type="checkbox"
                        id="CasualShirt"
                        label="Casual Shirt"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFormalShirt: !info.menFormalShirt,
                          });
                        }}
                        type="checkbox"
                        id="FormalShirt"
                        label="Formal Shirt"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* men polo tshirt  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menPoloTShirt: !info.menPoloTShirt });
                    }}
                    type="checkbox"
                    id="menPolo"
                    label="Polo"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menPoloTShirtClassic: !info.menPoloTShirtClassic,
                          });
                        }}
                        type="checkbox"
                        id="classicPolo"
                        label="Classic"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menPoloTShirtCutAndStitch:
                              !info.menPoloTShirtCutAndStitch,
                          });
                        }}
                        type="checkbox"
                        id="cuntandstichPolo"
                        label="Cut and Stitch"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menPoloTShirtPrinted: !info.menPoloTShirtPrinted,
                          });
                        }}
                        type="checkbox"
                        id="printedPolo"
                        label="Printed"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* men shorts  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menShorts: !info.menShorts });
                    }}
                    type="checkbox"
                    id="menShort"
                    label="Shorts"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menChinoShorts: !info.menChinoShorts,
                          });
                        }}
                        type="checkbox"
                        id="chinoShorts"
                        label="Chino Shorts"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menSportsShorts: !info.menSportsShorts,
                          });
                        }}
                        type="checkbox"
                        id="sportShorts"
                        label="Sports Shorts"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* men underweare  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menUnderwear: !info.menUnderwear });
                    }}
                    type="checkbox"
                    id="menUnderwear"
                    label="Underwear"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menBoxerBrief: !info.menBoxerBrief,
                          });
                        }}
                        type="checkbox"
                        id="boxerBrief"
                        label="Boxer Brief"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menBoxerShorts: !info.menBoxerShorts,
                          });
                        }}
                        type="checkbox"
                        id="boxerShort"
                        label="Boxer Short"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({ ...info, menTrunk: !info.menTrunk });
                        }}
                        type="checkbox"
                        id="boxerTrunk"
                        label="Trunk"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menWovenShorts: !info.menWovenShorts,
                          });
                        }}
                        type="checkbox"
                        id="wovenshorts"
                        label="Woven Shorts"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* men shocks  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menSocks: !info.menSocks });
                    }}
                    type="checkbox"
                    id="menSocks"
                    label="Socks"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menSocksClassic: !info.menSocksClassic,
                          });
                        }}
                        type="checkbox"
                        id="classicSocks"
                        label="Classic"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menSocksSports: !info.menSocksSports,
                          });
                        }}
                        type="checkbox"
                        id="SportsSocks"
                        label="Sports"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menSocksUrban: !info.menSocksUrban,
                          });
                        }}
                        type="checkbox"
                        id="UrbanSocks"
                        label="Urban"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* men accesories  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        menAccesorries: !info.menAccesorries,
                      });
                    }}
                    type="checkbox"
                    id="menAccesories"
                    label="Accessories"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({ ...info, menBelt: !info.menBelt });
                        }}
                        type="checkbox"
                        id="menBelt"
                        label="Belt"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({ ...info, menWallet: !info.menWallet });
                        }}
                        type="checkbox"
                        id="menWallet"
                        label="Wallet"
                      />
                    </ul>
                  </section>
                </ul>
              </section>
              {/* others mens  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menHoodie: !info.menHoodie });
                    }}
                    type="checkbox"
                    id="Hoodie"
                    label="Hoodie"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menJacket: !info.menJacket });
                    }}
                    type="checkbox"
                    id="Jacket"
                    label="Jacket"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menJoggers: !info.menJoggers });
                    }}
                    type="checkbox"
                    id="Jogger"
                    label="Jogger"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menJeans: !info.menJeans });
                    }}
                    type="checkbox"
                    id="jeans"
                    label="jeans"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menMaggie: !info.menMaggie });
                    }}
                    type="checkbox"
                    id="Maggie"
                    label="Maggie"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menPanjabi: !info.menPanjabi });
                    }}
                    type="checkbox"
                    id="Panjabi"
                    label="Panjabi"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menTupi: !info.menTupi });
                    }}
                    type="checkbox"
                    id="Tupi"
                    label="Tupi"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menSweatshirt: !info.menSweatshirt });
                    }}
                    type="checkbox"
                    id="SweatShirts"
                    label="Sweat Shirts"
                  />
                </ul>
              </section>
            </ul>

            {/* women  */}

            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, isWomen: !info.isWomen });
                }}
                type="checkbox"
                id="Women"
                label="Women"
              />

              {/* second level  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, womenTShirt: !info.womenTShirt });
                    }}
                    type="checkbox"
                    id="T-Shirt"
                    label="T-Shirt"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        womenComfyTrouser: !info.womenComfyTrouser,
                      });
                    }}
                    type="checkbox"
                    id="Comfy trouser"
                    label="Comfy trouser"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        womenKurtiTunicAndTops: !info.womenKurtiTunicAndTops,
                      });
                    }}
                    type="checkbox"
                    id="Kurti Tunic And Tops"
                    label="Kurti Tunic And Tops"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, womenPajamas: !info.womenPajamas });
                    }}
                    type="checkbox"
                    id="Pajamas"
                    label="Pajamas"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, womenPants: !info.womenPants });
                    }}
                    type="checkbox"
                    id="Pant"
                    label="Pant"
                  />
                </ul>
              </section>
            </ul>

            {/* kids  */}
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, isKids: !info.isKids });
                }}
                type="checkbox"
                id="Kids"
                label="Kids"
              />

              {/* second level  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        isKindsHalfSleeveTshirt: !info.isKindsHalfSleeveTshirt,
                      });
                    }}
                    type="checkbox"
                    id="kidsHalfSleeve"
                    label="Half Sleeve T-Shirt"
                  />
                </ul>

                {/* third level  */}
                <section className="ml-6">
                  <ul>
                    <CCheckRadio
                      onChange={() => {
                        setInfo({
                          ...info,
                          kidsHalfSleeveTShirtBlank:
                            !info.kidsHalfSleeveTShirtBlank,
                        });
                      }}
                      type="checkbox"
                      id="Kids_Half-Sleeve_T-Shirt_blank"
                      label="blank"
                    />
                  </ul>
                  <ul>
                    <CCheckRadio
                      onChange={() => {
                        setInfo({
                          ...info,
                          kidsHalfSleeveTShirtPrinted:
                            !info.kidsHalfSleeveTShirtPrinted,
                        });
                      }}
                      type="checkbox"
                      id="Kids_Half-Sleeve_T-Shirt_Printed"
                      label="Printed"
                    />
                  </ul>
                </section>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        isKindsHalfSleeveTshirt: !info.isKindsHalfSleeveTshirt,
                      });
                    }}
                    type="checkbox"
                    id="kidsFullSleeveTshirt"
                    label="Full Sleeve T-Shirt"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, kidsMaggie: !info.kidsMaggie });
                    }}
                    type="checkbox"
                    id="kidsMaggie"
                    label="Maggie"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        kidsPoloTShirt: !info.kidsPoloTShirt,
                      });
                    }}
                    type="checkbox"
                    id="kidsPolo"
                    label="Polo T-Shirt"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, kidsShorts: !info.kidsShorts });
                    }}
                    type="checkbox"
                    id="kidsShorts"
                    label="Shorts"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, kidsTrouser: !info.kidsTrouser });
                    }}
                    type="checkbox"
                    id="kidsTrousers"
                    label="Trouser"
                  />
                </ul>
              </section>
            </ul>
            {/* face mask  */}
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, isFaceMask: !info.isFaceMask });
                }}
                type="checkbox"
                id="FaceMask"
                label="Face Mask"
              />

              {/* second level  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        faceMaskKidsMask: !info.faceMaskKidsMask,
                      });
                    }}
                    type="checkbox"
                    id="kidsMask"
                    label="Kids Maks"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        faceMaskProfessional7LayerMask:
                          !info.faceMaskProfessional7LayerMask,
                      });
                    }}
                    type="checkbox"
                    id="professionalMask"
                    label="Professional 7 Layer Mask"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        faceMaskSportsEdition: !info.faceMaskSportsEdition,
                      });
                    }}
                    type="checkbox"
                    id="sportsEditionMask"
                    label="Sports Edition"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        faceMaskWomensDesigner: !info.faceMaskWomensDesigner,
                      });
                    }}
                    type="checkbox"
                    id="womensDesigner"
                    label="Womens Designer"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        faceMaskWomensEmbroidery:
                          !info.faceMaskWomensEmbroidery,
                      });
                    }}
                    type="checkbox"
                    id="womensEmbroidery"
                    label="Womens Embroidery"
                  />
                </ul>
              </section>
            </ul>
            {/* sports  */}
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, isSports: !info.isSports });
                }}
                type="checkbox"
                id="Sports"
                label="Sports"
              />

              {/* second level  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        sportsFootballJersey: !info.sportsFootballJersey,
                      });
                    }}
                    type="checkbox"
                    id="footballJersey"
                    label="Football Jersey"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, sportsTShirts: !info.sportsTShirts });
                    }}
                    type="checkbox"
                    id="sportsTShirts"
                    label="Sports TShirts"
                  />
                </ul>
              </section>
            </ul>

            {/* merchandise  */}
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, isMerchandise: !info.isSports });
                }}
                type="checkbox"
                id="Merchandise"
                label="Merchandise"
              />

              {/* second level  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        merchandiseAurthohin: !info.merchandiseAurthohin,
                      });
                    }}
                    type="checkbox"
                    id="aurthohin"
                    label="Aurthohin"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        merchandiseGrameenphone: !info.merchandiseGrameenphone,
                      });
                    }}
                    type="checkbox"
                    id="grameenphone"
                    label="Grameenphone"
                  />
                </ul>
              </section>
            </ul>
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({
                    ...info,
                    isWinterExclusive: !info.isWinterExclusive,
                  });
                }}
                type="checkbox"
                id="WinterExclisive"
                label="Winter Exclisive"
              />

              {/* second level  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        winterExclusiveFullSleeveTShirt:
                          !info.winterExclusiveFullSleeveTShirt,
                      });
                    }}
                    type="checkbox"
                    id="winterfullSleeveTShirt"
                    label="Full Sleeve T-Shirt"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        winterExclusiveHoodie: !info.winterExclusiveHoodie,
                      });
                    }}
                    type="checkbox"
                    id="winterhoodie"
                    label="Hoodie"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        winterExclusiveJacket: !info.winterExclusiveJacket,
                      });
                    }}
                    type="checkbox"
                    id="winterjacket"
                    label="Jacket"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        winterExclusiveJoggers: !info.winterExclusiveJoggers,
                      });
                    }}
                    type="checkbox"
                    id="winterJoggers"
                    label="Joggers"
                  />
                </ul>
              </section>
            </ul>
          </div>
        </div>

        {isLoading ? (
          <h2 className=" w-full mx-auto">
            <Loading />
          </h2>
        ) : (
          <div className="h-screen ">
            {data?.length == 0 ? (
              <div className=" w-full mx-auto">
                <h2>
                  <NoProduct />
                </h2>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 mx-8">
                {data.map((data: any, idx: number) => (
                  <ShopProductCart key={idx} data={data} Loading={isLoading} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* small device sidebar  */}

      <div className="block lg:hidden h-screen">
        <div
          className={` absolute bg-white w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 transition-all ease-in duration-400 ${
            click
              ? "top-[65px] opacity-100 z-30 w-4/6 md:1/3"
              : " left-[-400px] opacity-0 "
          } `}
        >
          <div className="  mx-4 h-screen overflow-scroll text-[10px]">
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, newArrival: !info.newArrival });
                }}
                type="checkbox"
                id="New Arrival"
                label="New Arrival"
              />
            </ul>
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, topSelling: !info.topSelling });
                }}
                type="checkbox"
                id="Top selling"
                label="Top selling"
              />
            </ul>
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, freeDelivary: !info.freeDelivary });
                }}
                type="checkbox"
                id="Free Delivary"
                label="Free Delivary"
              />
            </ul>

            {/* mens  */}
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, isMen: !info.isMen });
                }}
                type="checkbox"
                id="Men"
                label="Men"
              />

              {/* mens second level half shirt  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        menHalfSleeveTShirt: !info.menHalfSleeveTShirt,
                      });
                    }}
                    type="checkbox"
                    id="Half-Sleeve T-Shirt"
                    label="Half-Sleeve T-Shirt"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menHalfSleeveTShirtBlank:
                              !info.menHalfSleeveTShirtBlank,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve_T-Shirt_blank"
                        label="blank"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menHalfSleeveTShirtPrinted:
                              !info.menHalfSleeveTShirtPrinted,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve_T-Shirt_printed"
                        label="printed"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menHalfSleeveTShirtCutAndStitch:
                              !info.menHalfSleeveTShirtCutAndStitch,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve_T-Shirt_cutAndStitch"
                        label="Cut and Stitch"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menHalfSleeveTShirtRaglan:
                              !info.menHalfSleeveTShirtRaglan,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve_T-Shirt_raglan"
                        label="Raglan"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtRaglanDesigner:
                              !info.menFullSleeveTShirtRaglanDesigner,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve_T-Shirt_raglanDesigner"
                        label="Raglan (Designer)"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menHalfSleeveTShirtSports:
                              !info.menHalfSleeveTShirtSports,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve_T-Shirt_sports"
                        label="Sports"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* full tshirt  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        menFullSleeveTShirt: !info.menFullSleeveTShirt,
                      });
                    }}
                    type="checkbox"
                    id="Full-Sleeve T-Shirt"
                    label="Full-Sleeve T-Shirt"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtBlank:
                              !info.menFullSleeveTShirtBlank,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_blank"
                        label="blank"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtPrinted:
                              !info.menFullSleeveTShirtPrinted,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_blackprinted"
                        label="printed"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtRaglan:
                              !info.menFullSleeveTShirtRaglan,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_blackraglan"
                        label="raglan"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtCutAndStitch:
                              !info.menFullSleeveTShirtCutAndStitch,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_cutandStitch"
                        label="Cut and Stitch"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtCutAndStitchDesigner:
                              !info.menFullSleeveTShirtCutAndStitchDesigner,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_cutandStitchDesigner"
                        label="Cut and Stitch (Design)"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtRaglanDesigner:
                              !info.menFullSleeveTShirtRaglanDesigner,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_raglanDesigner"
                        label="Raglan (Designer)"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFullSleeveTShirtSports:
                              !info.menFullSleeveTShirtSports,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve_T-Shirt_Sports"
                        label="Sports"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* men shirt  */}

              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menShirt: !info.menShirt });
                    }}
                    type="checkbox"
                    id="menShirt"
                    label="Shirt"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menCasualShirt: !info.menCasualShirt,
                          });
                        }}
                        type="checkbox"
                        id="CasualShirt"
                        label="Casual Shirt"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menFormalShirt: !info.menFormalShirt,
                          });
                        }}
                        type="checkbox"
                        id="FormalShirt"
                        label="Formal Shirt"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* men polo tshirt  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menPoloTShirt: !info.menPoloTShirt });
                    }}
                    type="checkbox"
                    id="menPolo"
                    label="Polo"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menPoloTShirtClassic: !info.menPoloTShirtClassic,
                          });
                        }}
                        type="checkbox"
                        id="classicPolo"
                        label="Classic"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menPoloTShirtCutAndStitch:
                              !info.menPoloTShirtCutAndStitch,
                          });
                        }}
                        type="checkbox"
                        id="cuntandstichPolo"
                        label="Cut and Stitch"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menPoloTShirtPrinted: !info.menPoloTShirtPrinted,
                          });
                        }}
                        type="checkbox"
                        id="printedPolo"
                        label="Printed"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* men shorts  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menShorts: !info.menShorts });
                    }}
                    type="checkbox"
                    id="menShort"
                    label="Shorts"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menChinoShorts: !info.menChinoShorts,
                          });
                        }}
                        type="checkbox"
                        id="chinoShorts"
                        label="Chino Shorts"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menSportsShorts: !info.menSportsShorts,
                          });
                        }}
                        type="checkbox"
                        id="sportShorts"
                        label="Sports Shorts"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* men underweare  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menUnderwear: !info.menUnderwear });
                    }}
                    type="checkbox"
                    id="menUnderwear"
                    label="Underwear"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menBoxerBrief: !info.menBoxerBrief,
                          });
                        }}
                        type="checkbox"
                        id="boxerBrief"
                        label="Boxer Brief"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menBoxerShorts: !info.menBoxerShorts,
                          });
                        }}
                        type="checkbox"
                        id="boxerShort"
                        label="Boxer Short"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({ ...info, menTrunk: !info.menTrunk });
                        }}
                        type="checkbox"
                        id="boxerTrunk"
                        label="Trunk"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menWovenShorts: !info.menWovenShorts,
                          });
                        }}
                        type="checkbox"
                        id="wovenshorts"
                        label="Woven Shorts"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* men shocks  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menSocks: !info.menSocks });
                    }}
                    type="checkbox"
                    id="menSocks"
                    label="Socks"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menSocksClassic: !info.menSocksClassic,
                          });
                        }}
                        type="checkbox"
                        id="classicSocks"
                        label="Classic"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menSocksSports: !info.menSocksSports,
                          });
                        }}
                        type="checkbox"
                        id="SportsSocks"
                        label="Sports"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({
                            ...info,
                            menSocksUrban: !info.menSocksUrban,
                          });
                        }}
                        type="checkbox"
                        id="UrbanSocks"
                        label="Urban"
                      />
                    </ul>
                  </section>
                </ul>
              </section>

              {/* men accesories  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        menAccesorries: !info.menAccesorries,
                      });
                    }}
                    type="checkbox"
                    id="menAccesories"
                    label="Accessories"
                  />
                  {/* third level  */}
                  <section className="ml-6">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({ ...info, menBelt: !info.menBelt });
                        }}
                        type="checkbox"
                        id="menBelt"
                        label="Belt"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setInfo({ ...info, menWallet: !info.menWallet });
                        }}
                        type="checkbox"
                        id="menWallet"
                        label="Wallet"
                      />
                    </ul>
                  </section>
                </ul>
              </section>
              {/* others mens  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menHoodie: !info.menHoodie });
                    }}
                    type="checkbox"
                    id="Hoodie"
                    label="Hoodie"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menJacket: !info.menJacket });
                    }}
                    type="checkbox"
                    id="Jacket"
                    label="Jacket"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menJoggers: !info.menJoggers });
                    }}
                    type="checkbox"
                    id="Jogger"
                    label="Jogger"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menJeans: !info.menJeans });
                    }}
                    type="checkbox"
                    id="jeans"
                    label="jeans"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menMaggie: !info.menMaggie });
                    }}
                    type="checkbox"
                    id="Maggie"
                    label="Maggie"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menPanjabi: !info.menPanjabi });
                    }}
                    type="checkbox"
                    id="Panjabi"
                    label="Panjabi"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menTupi: !info.menTupi });
                    }}
                    type="checkbox"
                    id="Tupi"
                    label="Tupi"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, menSweatshirt: !info.menSweatshirt });
                    }}
                    type="checkbox"
                    id="SweatShirts"
                    label="Sweat Shirts"
                  />
                </ul>
              </section>
            </ul>

            {/* women  */}

            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, isWomen: !info.isWomen });
                }}
                type="checkbox"
                id="Women"
                label="Women"
              />

              {/* second level  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, womenTShirt: !info.womenTShirt });
                    }}
                    type="checkbox"
                    id="T-Shirt"
                    label="T-Shirt"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        womenComfyTrouser: !info.womenComfyTrouser,
                      });
                    }}
                    type="checkbox"
                    id="Comfy trouser"
                    label="Comfy trouser"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        womenKurtiTunicAndTops: !info.womenKurtiTunicAndTops,
                      });
                    }}
                    type="checkbox"
                    id="Kurti Tunic And Tops"
                    label="Kurti Tunic And Tops"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, womenPajamas: !info.womenPajamas });
                    }}
                    type="checkbox"
                    id="Pajamas"
                    label="Pajamas"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, womenPants: !info.womenPants });
                    }}
                    type="checkbox"
                    id="Pant"
                    label="Pant"
                  />
                </ul>
              </section>
            </ul>

            {/* kids  */}
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, isKids: !info.isKids });
                }}
                type="checkbox"
                id="Kids"
                label="Kids"
              />

              {/* second level  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        isKindsHalfSleeveTshirt: !info.isKindsHalfSleeveTshirt,
                      });
                    }}
                    type="checkbox"
                    id="kidsHalfSleeve"
                    label="Half Sleeve T-Shirt"
                  />
                </ul>

                {/* third level  */}
                <section className="ml-6">
                  <ul>
                    <CCheckRadio
                      onChange={() => {
                        setInfo({
                          ...info,
                          kidsHalfSleeveTShirtBlank:
                            !info.kidsHalfSleeveTShirtBlank,
                        });
                      }}
                      type="checkbox"
                      id="Kids_Half-Sleeve_T-Shirt_blank"
                      label="blank"
                    />
                  </ul>
                  <ul>
                    <CCheckRadio
                      onChange={() => {
                        setInfo({
                          ...info,
                          kidsHalfSleeveTShirtPrinted:
                            !info.kidsHalfSleeveTShirtPrinted,
                        });
                      }}
                      type="checkbox"
                      id="Kids_Half-Sleeve_T-Shirt_Printed"
                      label="Printed"
                    />
                  </ul>
                </section>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        isKindsHalfSleeveTshirt: !info.isKindsHalfSleeveTshirt,
                      });
                    }}
                    type="checkbox"
                    id="kidsFullSleeveTshirt"
                    label="Full Sleeve T-Shirt"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, kidsMaggie: !info.kidsMaggie });
                    }}
                    type="checkbox"
                    id="kidsMaggie"
                    label="Maggie"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        kidsPoloTShirt: !info.kidsPoloTShirt,
                      });
                    }}
                    type="checkbox"
                    id="kidsPolo"
                    label="Polo T-Shirt"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, kidsShorts: !info.kidsShorts });
                    }}
                    type="checkbox"
                    id="kidsShorts"
                    label="Shorts"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, kidsTrouser: !info.kidsTrouser });
                    }}
                    type="checkbox"
                    id="kidsTrousers"
                    label="Trouser"
                  />
                </ul>
              </section>
            </ul>
            {/* face mask  */}
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, isFaceMask: !info.isFaceMask });
                }}
                type="checkbox"
                id="FaceMask"
                label="Face Mask"
              />

              {/* second level  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        faceMaskKidsMask: !info.faceMaskKidsMask,
                      });
                    }}
                    type="checkbox"
                    id="kidsMask"
                    label="Kids Maks"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        faceMaskProfessional7LayerMask:
                          !info.faceMaskProfessional7LayerMask,
                      });
                    }}
                    type="checkbox"
                    id="professionalMask"
                    label="Professional 7 Layer Mask"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        faceMaskSportsEdition: !info.faceMaskSportsEdition,
                      });
                    }}
                    type="checkbox"
                    id="sportsEditionMask"
                    label="Sports Edition"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        faceMaskWomensDesigner: !info.faceMaskWomensDesigner,
                      });
                    }}
                    type="checkbox"
                    id="womensDesigner"
                    label="Womens Designer"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        faceMaskWomensEmbroidery:
                          !info.faceMaskWomensEmbroidery,
                      });
                    }}
                    type="checkbox"
                    id="womensEmbroidery"
                    label="Womens Embroidery"
                  />
                </ul>
              </section>
            </ul>
            {/* sports  */}
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, isSports: !info.isSports });
                }}
                type="checkbox"
                id="Sports"
                label="Sports"
              />

              {/* second level  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        sportsFootballJersey: !info.sportsFootballJersey,
                      });
                    }}
                    type="checkbox"
                    id="footballJersey"
                    label="Football Jersey"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({ ...info, sportsTShirts: !info.sportsTShirts });
                    }}
                    type="checkbox"
                    id="sportsTShirts"
                    label="Sports TShirts"
                  />
                </ul>
              </section>
            </ul>

            {/* merchandise  */}
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({ ...info, isMerchandise: !info.isSports });
                }}
                type="checkbox"
                id="Merchandise"
                label="Merchandise"
              />

              {/* second level  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        merchandiseAurthohin: !info.merchandiseAurthohin,
                      });
                    }}
                    type="checkbox"
                    id="aurthohin"
                    label="Aurthohin"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        merchandiseGrameenphone: !info.merchandiseGrameenphone,
                      });
                    }}
                    type="checkbox"
                    id="grameenphone"
                    label="Grameenphone"
                  />
                </ul>
              </section>
            </ul>
            <ul>
              <CCheckRadio
                onChange={() => {
                  setInfo({
                    ...info,
                    isWinterExclusive: !info.isWinterExclusive,
                  });
                }}
                type="checkbox"
                id="WinterExclisive"
                label="Winter Exclisive"
              />

              {/* second level  */}
              <section className="ml-6">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        winterExclusiveFullSleeveTShirt:
                          !info.winterExclusiveFullSleeveTShirt,
                      });
                    }}
                    type="checkbox"
                    id="winterfullSleeveTShirt"
                    label="Full Sleeve T-Shirt"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        winterExclusiveHoodie: !info.winterExclusiveHoodie,
                      });
                    }}
                    type="checkbox"
                    id="winterhoodie"
                    label="Hoodie"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        winterExclusiveJacket: !info.winterExclusiveJacket,
                      });
                    }}
                    type="checkbox"
                    id="winterjacket"
                    label="Jacket"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setInfo({
                        ...info,
                        winterExclusiveJoggers: !info.winterExclusiveJoggers,
                      });
                    }}
                    type="checkbox"
                    id="winterJoggers"
                    label="Joggers"
                  />
                </ul>
              </section>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPageCompoment;
