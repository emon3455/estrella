"use client";
import { useAddProductMutation } from "@/Redux/Features/admin/product/admin-product-slice";
import cToastify from "@/shared/Toastify/Toadtify";
import CButton from "@/utils/CButton/CButton";
import CCheckRadio from "@/utils/CCheckRadio/CCheckRadio";
import CFileInput from "@/utils/CFileinput/CFileinput";
import CInput from "@/utils/CInput/CInput";
import React, { useEffect, useState } from "react";

const initialData = {
  title: "",
  isTopSelling: false,
  isFreeDelivery: false,
  price: 0,
  previousPrice: 0,
  generalSize: {
    s: 0,
    m: 0,
    l: 0,
    xl: 0,
    xxl: 0,
    xxxl: 0,
  },

  tags: "mens",
  fabrics: "cotton",

  isMen: false,
  isWomen: false,
  isKids: false,
  isFaceMask: false,
  isSports: false,
  isMerchandise: false,
  isWinterExclusive: false,
  menHalfSleeveTShirt: false,
  menFullSleeveTShirt: false,
  isKindsHalfSleeveTshirt: false,
  menShirt: false,
  menPoloTShirt: false,
  menShorts: false,
  menUnderwear: false,
  menSocks: false,
  menAccesorries: false,
  winterExclusiveJoggers: false,
  winterExclusiveFullSleeveTShirt: false,
  winterExclusiveHoodie: false,
  winterExclusiveJacket: false,
  menHalfSleeveTShirtBlank: false,
  menHalfSleeveTShirtCutAndStitch: false,
  menHalfSleeveTShirtPrinted: false,
  menHalfSleeveTShirtRaglan: false,
  menHalfSleeveTShirtRaglanDesigner: false,
  menHalfSleeveTShirtSports: false,
  menFullSleeveTShirtBlank: false,
  menFullSleeveTShirtCutAndStitch: false,
  menFullSleeveTShirtCutAndStitchDesigner: false,
  menFullSleeveTShirtPrinted: false,
  menFullSleeveTShirtRaglan: false,
  menFullSleeveTShirtRaglanDesigner: false,
  menFullSleeveTShirtSports: false,
  menMaggie: false,
  menCasualShirt: false,
  menFormalShirt: false,
  menPoloTShirtClassic: false,
  menPoloTShirtCutAndStitch: false,
  menPoloTShirtPrinted: false,
  menHoodie: false,
  menJacket: false,
  menJoggers: false,
  menSweatshirt: false,
  menComfyTrouser: false,
  menSportsTrouser: false,
  menChinoShorts: false,
  menSportsShorts: false,
  menBoxerBrief: false,
  menBoxerShorts: false,
  menTrunk: false,
  menWovenShorts: false,
  menSocksClassic: false,
  menSocksSports: false,
  menSocksUrban: false,
  menPanjabi: false,
  menTupi: false,
  menJeans: false,
  menBelt: false,
  menWallet: false,
  menChinoPants: false,
  womenTShirt: false,
  womenComfyTrouser: false,
  womenKurtiTunicAndTops: false,
  womenPajamas: false,
  womenPants: false,
  kidsPoloTShirt: false,
  kidsHalfSleeveTShirtBlank: false,
  kidsHalfSleeveTShirtPrinted: false,
  kidsMaggie: false,
  kidsFullSleeveTShirt: false,
  kidsShorts: false,
  kidsTrouser: false,
  faceMaskProfessional7LayerMask: false,
  faceMaskSportsEdition: false,
  faceMaskWomensDesigner: false,
  faceMaskWomensEmbroidery: false,
  faceMaskKidsMask: false,
  sportsTShirts: false,
  sportsFootballJersey: false,
  merchandiseAurthohin: false,
  merchandiseGrameenphone: false,
};

const AddProductForm = () => {
  const [data, setData] = useState(initialData);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const imageHostingToken = "3fbf0c0e3d8b4bed768a636369b91f87";
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

  const [addProduct, { isError, error: productError }] =
    useAddProductMutation();

  useEffect(() => {
    if (isError) {
      cToastify({
        type: "error",
        message: productError?.message,
      });
    }
  }, [isError, productError]);

  const handleImageChange = (e: any) => {
    const selectedFile = e.target.files;
    if (selectedFile.length !== 0) {
      setImages(e.target.files as any);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      let imageUrls = [];

      for (let i = 0; i < images.length; i++) {
        const formData = new FormData();
        formData.append("image", images[i]);

        const response = await fetch(imageHostingURL, {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (result.success) {
          imageUrls.push(result.data.display_url);
        } else {
          throw new Error("Image upload failed");
        }
      }

      const productDataWithImages = { ...data, images: imageUrls };

      const res = await addProduct(productDataWithImages)?.unwrap();

      if (res.product._id) {
        cToastify({
          type: "success",
          message: "Product Added Successfully",
        });
      }

      setData(initialData);
      setImages([]);
    } catch (err: any) {
      cToastify({
        type: "error",
        message: err?.data?.error || "Something Went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectChange = (e: any) => {
    setData({
      ...data,
      tags: e.target.value,
    });
  };
  return (
    <div className=" max-w-lg mx-auto">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="bg-[#2f3c79] te px-10 py-5 rounded-xl text-white">
              <h1>Title*</h1>
              <CInput
                onChange={(e) => {
                  setData({ ...initialData, title: e.target.value });
                }}
                id="title"
                type="text"
                placeholder="Title"
                className="rounded-md  placeholder:text-gray-400"
                style={{
                  backgroundColor: "white",
                  borderColor: "white",
                  color: "black",
                }}
              />
              <div className="flex flex-col md:flex-row gap-4 ">
                <div>
                  <h1>Price*</h1>
                  <CInput
                    onChange={(e) => {
                      const price = parseFloat(e.target.value);
                      setData({ ...data, price: isNaN(price) ? 0 : price });
                    }}
                    id="price"
                    type="number"
                    min={0}
                    placeholder="Price"
                    className="rounded-md  placeholder:text-gray-400"
                    style={{
                      backgroundColor: "white",
                      borderColor: "white",
                      color: "black",
                    }}
                  />
                </div>
                <div>
                  <h1>Previous Price*</h1>
                  <CInput
                    onChange={(e) => {
                      const price = parseFloat(e.target.value);
                      setData({
                        ...data,
                        previousPrice: isNaN(price) ? 0 : price,
                      });
                    }}
                    id="Previousprice"
                    type="number"
                    min={0}
                    placeholder="Previous Price"
                    className="rounded-md  placeholder:text-gray-400"
                    style={{
                      backgroundColor: "white",
                      borderColor: "white",
                      color: "black",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#2f3c79] px-5 py-5 mt-6 rounded-xl text-white">
              <div className="flex flex-col md:flex-row gap-2 text-black px-5 py-4 font-bold items-center justify-between my-2 bg-[#1B2966] p-5 rounded-full ">
                <ul className="text-white">
                  <CCheckRadio
                    onChange={() => {
                      setData({
                        ...data,
                        isFreeDelivery: !data.isFreeDelivery,
                      });
                    }}
                    type="checkbox"
                    id="freeDelivary"
                    label="Free Delivary"
                    className="text-white"
                  />
                </ul>
                <div className="flex gap-1 text-white ">
                  <h2>Tags:</h2>
                  <select
                    value={data.tags}
                    onChange={handleSelectChange}
                    className="bg-[#2f3c79] rounded-full p-1"
                  >
                    <option>Select</option>
                    <option value="mens">Mens</option>
                    <option value="womens">Womens</option>
                    <option value="kids">Kids</option>
                    <option value="sports">Sports</option>
                    <option value="merchandise">Merchandise</option>
                    <option value="winterExclusive">Winter Exclusive</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <div className="bg-[#1B2966] p-5 rounded-2xl">
                <h2 className="bg-[#2f3c79] px-4 py-2 rounded-full text-center my-1  mb-2">
                  Assign Stock*
                </h2>
                <div className="flex gap-4 ">
                  <div>
                    <h1>S</h1>
                    <CInput
                      onChange={(e) => {
                        const value = parseFloat(e.target.value); // Convert the input value to an integer
                        setData({
                          ...data,
                          generalSize: {
                            ...data.generalSize,
                            s: isNaN(value) ? 0 : value, // If the value is NaN (not a 0), set it to 0
                          },
                        });
                      }}
                      id="generalsize-s"
                      type="number"
                      min={0}
                      placeholder="S"
                      className="placeholder:text-center text-center placeholder:text-gray-400"
                      style={{
                        backgroundColor: "white",
                        borderColor: "white",
                        color: "black",
                      }}
                    />
                  </div>
                  <div>
                    <h1>M</h1>
                    <CInput
                      onChange={(e) => {
                        const value = parseFloat(e.target.value); // Convert the input value to an integer
                        setData({
                          ...data,
                          generalSize: {
                            ...data.generalSize,
                            m: isNaN(value) ? 0 : value, // If the value is NaN (not a 0), set it to 0
                          },
                        });
                      }}
                      id="generalsize-m"
                      type="number"
                      min={0}
                      placeholder="M"
                      className="placeholder:text-center text-center placeholder:text-gray-400"
                      style={{
                        backgroundColor: "white",
                        borderColor: "white",
                        color: "black",
                      }}
                    />
                  </div>
                  <div>
                    <h1>L</h1>
                    <CInput
                      onChange={(e) => {
                        const value = parseFloat(e.target.value); // Convert the input value to an integer
                        setData({
                          ...data,
                          generalSize: {
                            ...data.generalSize,
                            l: isNaN(value) ? 0 : value, // If the value is NaN (not a 0), set it to 0
                          },
                        });
                      }}
                      id="generalsize-l"
                      type="number"
                      min={0}
                      placeholder="L"
                      className="placeholder:text-center text-center placeholder:text-gray-400"
                      style={{
                        backgroundColor: "white",
                        borderColor: "white",
                        color: "black",
                      }}
                    />
                  </div>
                  <div>
                    <h1>XL</h1>
                    <CInput
                      onChange={(e) => {
                        const value = parseFloat(e.target.value); // Convert the input value to an integer
                        setData({
                          ...data,
                          generalSize: {
                            ...data.generalSize,
                            xl: isNaN(value) ? 0 : value, // If the value is NaN (not a 0), set it to 0
                          },
                        });
                      }}
                      id="generalsize-xl"
                      type="number"
                      min={0}
                      placeholder="XL"
                      className="placeholder:text-center text-center placeholder:text-gray-400"
                      style={{
                        backgroundColor: "white",
                        borderColor: "white",
                        color: "black",
                      }}
                    />
                  </div>
                  <div>
                    <h1>XXL</h1>
                    <CInput
                      onChange={(e) => {
                        const value = parseFloat(e.target.value); // Convert the input value to an integer
                        setData({
                          ...data,
                          generalSize: {
                            ...data.generalSize,
                            xxl: isNaN(value) ? 0 : value, // If the value is NaN (not a 0), set it to 0
                          },
                        });
                      }}
                      id="generalsize-xl"
                      type="number"
                      min={0}
                      className="placeholder:text-center  text-center placeholder:text-gray-400"
                      style={{
                        backgroundColor: "white",
                        borderColor: "white",
                        color: "black",
                      }}
                      placeholder="XXL"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2f3c79] text-white px-10 py-5 my-5 rounded-2xl">
              <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full">
                Select Category*
              </h1>
              <div className="flex flex-wrap gap-2 text-white px-5 py-2 font-semibold bg-[#1B2966] rounded-xl">
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setData({ ...data, isMen: !data.isMen });
                    }}
                    type="checkbox"
                    id="Men"
                    label="Mens"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setData({ ...data, isWomen: !data.isWomen });
                    }}
                    type="checkbox"
                    id="Women"
                    label="Womens"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setData({ ...data, isKids: !data.isKids });
                    }}
                    type="checkbox"
                    id="kids"
                    label="Kids"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setData({ ...data, isFaceMask: !data.isFaceMask });
                    }}
                    type="checkbox"
                    id="faceMask"
                    label="Face Mask"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setData({ ...data, isSports: !data.isSports });
                    }}
                    type="checkbox"
                    id="sports"
                    label="Sports"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setData({ ...data, isMerchandise: !data.isMerchandise });
                    }}
                    type="checkbox"
                    id="merchandise"
                    label="Merchandise"
                  />
                </ul>
                <ul>
                  <CCheckRadio
                    onChange={() => {
                      setData({
                        ...data,
                        isWinterExclusive: !data.isWinterExclusive,
                      });
                    }}
                    type="checkbox"
                    id="winterEx"
                    label="Winter Exclusive"
                  />
                </ul>
              </div>

              {/* if mens  */}
              {data.isMen && (
                <div>
                  <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                    Sub-Category of Mens
                  </h1>
                  <div className="flex flex-wrap gap-3 text-white px-5 py-2 font-bold bg-[#1B2966] rounded-xl">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            menHalfSleeveTShirt: !data.menHalfSleeveTShirt,
                          });
                        }}
                        type="checkbox"
                        id="Half-Sleeve T-Shirt"
                        label="Half-Sleeve T-Shirt"
                      />
                    </ul>

                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            menFullSleeveTShirt: !data.menFullSleeveTShirt,
                          });
                        }}
                        type="checkbox"
                        id="Full-Sleeve T-Shirt"
                        label="Full-Sleeve T-Shirt"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            menPoloTShirt: !data.menPoloTShirt,
                          });
                        }}
                        type="checkbox"
                        id="Polo T-Shirt"
                        label="Polo T-Shirt"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, menShirt: !data.menShirt });
                        }}
                        type="checkbox"
                        id="Shirt"
                        label="Shirt"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, menShorts: !data.menShorts });
                        }}
                        type="checkbox"
                        id="Shorts"
                        label="Shorts"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, menSocks: !data.menSocks });
                        }}
                        type="checkbox"
                        id="Socks"
                        label="Socks"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            menUnderwear: !data.menUnderwear,
                          });
                        }}
                        type="checkbox"
                        id="underwear"
                        label="underwear"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            menAccesorries: !data.menAccesorries,
                          });
                        }}
                        type="checkbox"
                        id="Accesorries"
                        label="Accesorries"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, menHoodie: !data.menHoodie });
                        }}
                        type="checkbox"
                        id="menshoodie"
                        label="Hoodie"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, menMaggie: !data.menMaggie });
                        }}
                        type="checkbox"
                        id="mensMaggie"
                        label="Maggie"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, menJacket: !data.menJacket });
                        }}
                        type="checkbox"
                        id="mensJacket"
                        label="Jacket"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, menJoggers: !data.menJoggers });
                        }}
                        type="checkbox"
                        id="mensJoggers"
                        label="Joggers"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            menSweatshirt: !data.menSweatshirt,
                          });
                        }}
                        type="checkbox"
                        id="mensSweatshirt"
                        label="Sweatshirt"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, menJeans: !data.menJeans });
                        }}
                        type="checkbox"
                        id="mensJeans"
                        label="Jeans"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            menComfyTrouser: !data.menComfyTrouser,
                          });
                        }}
                        type="checkbox"
                        id="mensComfyTrouser"
                        label="Comfy Trouser"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            menSportsTrouser: !data.menSportsTrouser,
                          });
                        }}
                        type="checkbox"
                        id="mensSportsTrouser"
                        label="Sports Trouser"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, menPanjabi: !data.menPanjabi });
                        }}
                        type="checkbox"
                        id="mensPanjabi"
                        label="Panjabi"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, menTupi: !data.menTupi });
                        }}
                        type="checkbox"
                        id="menstupi"
                        label="Tupi"
                      />
                    </ul>
                  </div>

                  {/* if mens half sleeve t shirt  */}

                  {data.menHalfSleeveTShirt && (
                    <div>
                      <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                        Sub-Category of Mens Half Sleeve T-shirt
                      </h1>
                      <div className="flex flex-wrap gap-3 text-white px-5 py-2 font-bold bg-[#1B2966] rounded-xl">
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menHalfSleeveTShirtBlank:
                                  !data.menHalfSleeveTShirtBlank,
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
                              setData({
                                ...data,
                                menHalfSleeveTShirtCutAndStitch:
                                  !data.menHalfSleeveTShirtCutAndStitch,
                              });
                            }}
                            type="checkbox"
                            id="Half-Sleeve_T-Shirt_cutandstitch"
                            label="Cut and Stitch"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menHalfSleeveTShirtPrinted:
                                  !data.menHalfSleeveTShirtPrinted,
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
                              setData({
                                ...data,
                                menHalfSleeveTShirtRaglan:
                                  !data.menHalfSleeveTShirtRaglan,
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
                              setData({
                                ...data,
                                menHalfSleeveTShirtRaglanDesigner:
                                  !data.menHalfSleeveTShirtRaglanDesigner,
                              });
                            }}
                            type="checkbox"
                            id="Half-Sleeve_T-Shirt_raglan_designer"
                            label="Raglan (Designer)"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menHalfSleeveTShirtSports:
                                  !data.menHalfSleeveTShirtSports,
                              });
                            }}
                            type="checkbox"
                            id="Half-Sleeve_T-Shirt_sports"
                            label="Sports"
                          />
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* if mens full sleeve t shirt  */}

                  {data.menFullSleeveTShirt && (
                    <div>
                      <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                        Sub-Category of Mens Full Sleeve T-shirt
                      </h1>
                      <div className="flex flex-wrap gap-3 text-white px-5 py-2 font-bold bg-[#1B2966] rounded-xl">
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menFullSleeveTShirtBlank:
                                  !data.menFullSleeveTShirtBlank,
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
                              setData({
                                ...data,
                                menFullSleeveTShirtCutAndStitch:
                                  !data.menFullSleeveTShirtCutAndStitch,
                              });
                            }}
                            type="checkbox"
                            id="Full-Sleeve_T-Shirt_cutandstitch"
                            label="Cut and Stitch"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menFullSleeveTShirtCutAndStitchDesigner:
                                  !data.menFullSleeveTShirtCutAndStitchDesigner,
                              });
                            }}
                            type="checkbox"
                            id="Full-Sleeve_T-Shirt_cutAndStitchDesigner"
                            label="Cut and Stitch (Designer)"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menFullSleeveTShirtPrinted:
                                  !data.menFullSleeveTShirtPrinted,
                              });
                            }}
                            type="checkbox"
                            id="Full-Sleeve_T-Shirt_printed"
                            label="printed"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menFullSleeveTShirtRaglan:
                                  !data.menFullSleeveTShirtRaglan,
                              });
                            }}
                            type="checkbox"
                            id="Full-Sleeve_T-Shirt_raglan"
                            label="Raglan"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menFullSleeveTShirtRaglanDesigner:
                                  !data.menTupi,
                              });
                            }}
                            type="checkbox"
                            id="Full-Sleeve_T-Shirt_raglan_designer"
                            label="Raglan (Designer)"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menFullSleeveTShirtSports:
                                  !data.menFullSleeveTShirtSports,
                              });
                            }}
                            type="checkbox"
                            id="Full-Sleeve_T-Shirt_sports"
                            label="Sports"
                          />
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* if mens Shirt  */}

                  {data.menShirt && (
                    <div>
                      <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                        Sub-Category of Mens Shirts
                      </h1>
                      <div className="flex flex-wrap gap-3 text-white px-5 py-2 font-bold bg-[#1B2966] rounded-xl">
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menCasualShirt: !data.menCasualShirt,
                              });
                            }}
                            type="checkbox"
                            id="menCasualShirt"
                            label="Casual Shirt"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menFormalShirt: !data.menFormalShirt,
                              });
                            }}
                            type="checkbox"
                            id="menFormalShirt"
                            label="Formal Shirt"
                          />
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* if mens polo t shirts  */}

                  {data.menPoloTShirt && (
                    <div>
                      <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                        Sub-Category of Mens Polo T-shirts
                      </h1>
                      <div className="flex flex-wrap gap-3 text-white px-5 py-2 font-bold bg-[#1B2966] rounded-xl">
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menPoloTShirtClassic:
                                  !data.menPoloTShirtClassic,
                              });
                            }}
                            type="checkbox"
                            id="menpoloClassic"
                            label="Classic"
                          />
                        </ul>

                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menPoloTShirtCutAndStitch:
                                  !data.menPoloTShirtCutAndStitch,
                              });
                            }}
                            type="checkbox"
                            id="menpoloCutandSritch"
                            label="Cut and Sritch"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menPoloTShirtPrinted:
                                  !data.menPoloTShirtPrinted,
                              });
                            }}
                            type="checkbox"
                            id="menpoloPrinted"
                            label="Printed"
                          />
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* if mens  Shorts  */}

                  {data.menShorts && (
                    <div>
                      <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                        Sub-Category of Mens Shorts
                      </h1>
                      <div className="flex flex-wrap gap-3 text-white px-5 py-2 font-bold bg-[#1B2966] rounded-xl">
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menChinoShorts: !data.menChinoShorts,
                              });
                            }}
                            type="checkbox"
                            id="menchinoShorts"
                            label="Chino Shorts"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menSportsShorts: !data.menSportsShorts,
                              });
                            }}
                            type="checkbox"
                            id="menSportsShorts"
                            label="Sports Shorts"
                          />
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* if mens  socks  */}

                  {data.menSocks && (
                    <div>
                      <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                        Sub-Category of Mens Socks
                      </h1>
                      <div className="flex flex-wrap gap-3 text-white px-5 py-2 font-bold bg-[#1B2966] rounded-xl">
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menSocksClassic: !data.menSocksClassic,
                              });
                            }}
                            type="checkbox"
                            id="menSocksClassic"
                            label="Classic"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menSocksSports: !data.menSocksSports,
                              });
                            }}
                            type="checkbox"
                            id="menSocksSports"
                            label="Sports"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menSocksUrban: !data.menSocksUrban,
                              });
                            }}
                            type="checkbox"
                            id="menSocksUrban"
                            label="Urban"
                          />
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* if mens  underwear  */}

                  {data.menUnderwear && (
                    <div>
                      <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                        Sub-Category of Mens Underwear
                      </h1>
                      <div className="flex flex-wrap gap-3 text-white px-5 py-2 font-bold bg-[#1B2966] rounded-xl">
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menBoxerBrief: !data.menBoxerBrief,
                              });
                            }}
                            type="checkbox"
                            id="menUnderwearBoxerBrief"
                            label="Boxer Brief"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menBoxerShorts: !data.menBoxerShorts,
                              });
                            }}
                            type="checkbox"
                            id="menUnderwearboxerShorts"
                            label="Boxer Shorts"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({ ...data, menTrunk: !data.menTrunk });
                            }}
                            type="checkbox"
                            id="menUnderweartrunk"
                            label="Trunk"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                menWovenShorts: !data.menWovenShorts,
                              });
                            }}
                            type="checkbox"
                            id="menUnderwearwovenShorts"
                            label="Woven Shorts"
                          />
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* if mens  accesorries  */}

                  {data.menAccesorries && (
                    <div>
                      <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                        Sub-Category of Mens Accessorries
                      </h1>
                      <div className="flex flex-wrap gap-3 text-white px-5 py-2 font-bold bg-[#1B2966] rounded-xl">
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({ ...data, menBelt: !data.menBelt });
                            }}
                            type="checkbox"
                            id="menAccessorriesbelt"
                            label="Belt"
                          />
                        </ul>
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({ ...data, menWallet: !data.menWallet });
                            }}
                            type="checkbox"
                            id="menAccessorrieswallet"
                            label="wallet"
                          />
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* if women  */}

              {data.isWomen && (
                <div>
                  <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                    Sub-Category of Womens
                  </h1>

                  <div className="flex flex-wrap gap-2 text-white px-5 py-2 font-semibold bg-[#1B2966] rounded-xl">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, womenTShirt: !data.womenTShirt });
                        }}
                        type="checkbox"
                        id="Women_T-Shirt"
                        label="T-Shirt"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            womenComfyTrouser: !data.womenComfyTrouser,
                          });
                        }}
                        type="checkbox"
                        id="Women_Comfy trouser"
                        label="Comfy trouser"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            womenKurtiTunicAndTops:
                              !data.womenKurtiTunicAndTops,
                          });
                        }}
                        type="checkbox"
                        id="Women_Kurti Tunic And Tops"
                        label="Kurti Tunic And Tops"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            womenPajamas: !data.womenPajamas,
                          });
                        }}
                        type="checkbox"
                        id="Women_Pajamas"
                        label="Pajamas"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, womenPants: !data.womenPants });
                        }}
                        type="checkbox"
                        id="Women_Pant"
                        label="Pant"
                      />
                    </ul>
                  </div>
                </div>
              )}

              {/* if kids  */}
              {data.isKids && (
                <div>
                  <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                    Sub-Category of Kids
                  </h1>
                  <div className="flex flex-wrap gap-3 text-white px-5 py-2 font-bold bg-[#1B2966] rounded-xl">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            isKindsHalfSleeveTshirt:
                              !data.isKindsHalfSleeveTshirt,
                          });
                        }}
                        type="checkbox"
                        id="kids_Half-Sleeve T-Shirt"
                        label="Half-Sleeve T-Shirt"
                      />
                    </ul>

                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            kidsPoloTShirt: !data.kidsPoloTShirt,
                          });
                        }}
                        type="checkbox"
                        id="kidsPoloTShirt"
                        label="Polo T-Shirt"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            isKindsHalfSleeveTshirt:
                              !data.isKindsHalfSleeveTshirt,
                          });
                        }}
                        type="checkbox"
                        id="kidsfullSleeveTShirt"
                        label="Full Sleeve T-Shirt"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, kidsMaggie: !data.kidsMaggie });
                        }}
                        type="checkbox"
                        id="kidsmaggie"
                        label="Maggie"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, kidsShorts: !data.kidsShorts });
                        }}
                        type="checkbox"
                        id="kidsshorts"
                        label="Shorts"
                      />
                    </ul>
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({ ...data, kidsTrouser: !data.kidsTrouser });
                        }}
                        type="checkbox"
                        id="kidstrouser"
                        label="Trouser"
                      />
                    </ul>
                  </div>

                  {/* if kids half sleeve t shirt  */}

                  {data.isKindsHalfSleeveTshirt && (
                    <div>
                      <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                        Sub-Category of Kids Half Sleev T-shirt
                      </h1>
                      <div className="flex flex-wrap gap-3 text-white px-5 py-2 font-bold bg-[#1B2966] rounded-xl">
                        <ul>
                          <CCheckRadio
                            onChange={() => {
                              setData({
                                ...data,
                                kidsHalfSleeveTShirtBlank:
                                  !data.kidsHalfSleeveTShirtBlank,
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
                              setData({
                                ...data,
                                kidsHalfSleeveTShirtPrinted:
                                  !data.kidsHalfSleeveTShirtPrinted,
                              });
                            }}
                            type="checkbox"
                            id="kids_Half-Sleeve_T-Shirt_printed"
                            label="Printed"
                          />
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* if Face Mask  */}

              {data.isFaceMask && (
                <div>
                  <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                    Sub-Category of Face Mask
                  </h1>

                  <div className="flex flex-wrap gap-2 text-white px-5 py-2 font-semibold bg-[#1B2966] rounded-xl">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            faceMaskProfessional7LayerMask:
                              !data.faceMaskProfessional7LayerMask,
                          });
                        }}
                        type="checkbox"
                        id="professional7LayerMask"
                        label="Professional 7 Layer Mask"
                      />
                    </ul>

                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            faceMaskKidsMask: !data.faceMaskKidsMask,
                          });
                        }}
                        type="checkbox"
                        id="kidsMask"
                        label="Kids Mask"
                      />
                    </ul>

                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            faceMaskSportsEdition: !data.faceMaskSportsEdition,
                          });
                        }}
                        type="checkbox"
                        id="sportsEdition"
                        label="Sports Edition"
                      />
                    </ul>

                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            faceMaskWomensDesigner:
                              !data.faceMaskWomensDesigner,
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
                          setData({
                            ...data,
                            faceMaskWomensEmbroidery:
                              !data.faceMaskWomensEmbroidery,
                          });
                        }}
                        type="checkbox"
                        id="womensEmbroidery"
                        label="Womens Embroidery"
                      />
                    </ul>
                  </div>
                </div>
              )}
              {/* if Sports  */}

              {data.isSports && (
                <div>
                  <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                    Sub-Category of Sports
                  </h1>

                  <div className="flex flex-wrap gap-2 text-white px-5 py-2 font-semibold bg-[#1B2966] rounded-xl">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            sportsFootballJersey: !data.sportsFootballJersey,
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
                          setData({
                            ...data,
                            sportsTShirts: !data.sportsTShirts,
                          });
                        }}
                        type="checkbox"
                        id="sportsTShirts"
                        label="Sports T-Shirts"
                      />
                    </ul>
                  </div>
                </div>
              )}

              {data.isMerchandise && (
                <div>
                  <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                    Sub-Category of Merchandise
                  </h1>

                  <div className="flex flex-wrap gap-2 text-white px-5 py-2 font-semibold bg-[#1B2966] rounded-xl">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            merchandiseAurthohin: !data.merchandiseAurthohin,
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
                          setData({
                            ...data,
                            merchandiseGrameenphone:
                              !data.merchandiseGrameenphone,
                          });
                        }}
                        type="checkbox"
                        id="grameenphone"
                        label="Grameenphone"
                      />
                    </ul>
                  </div>
                </div>
              )}
              {data.isWinterExclusive && (
                <div>
                  <h1 className="bg-white text-center text-black py-2 font-bold my-2 rounded-full mt-8">
                    Sub-Category of Winter Exclusive
                  </h1>

                  <div className="flex flex-wrap gap-2 text-white px-5 py-2 font-semibold bg-[#1B2966] rounded-xl">
                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            winterExclusiveFullSleeveTShirt:
                              !data.winterExclusiveFullSleeveTShirt,
                          });
                        }}
                        type="checkbox"
                        id="fullSleeveTShirt"
                        label="Full Sleeve T-Shirt"
                      />
                    </ul>

                    <ul>
                      <CCheckRadio
                        onChange={() => {
                          setData({
                            ...data,
                            winterExclusiveHoodie: !data.winterExclusiveHoodie,
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
                          setData({
                            ...data,
                            winterExclusiveJacket: !data.winterExclusiveJacket,
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
                          setData({
                            ...data,
                            winterExclusiveJoggers:
                              !data.winterExclusiveJoggers,
                          });
                        }}
                        type="checkbox"
                        id="winterjoggers"
                        label="Joggers"
                      />
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="">
            <CFileInput
              label="Select Image"
              accept="image/*"
              onChange={handleImageChange}
              files={images as any}
              multiple={true}
              name="file"
              type="file"
            />
          </div>
          <div className="my-4">
            <CButton variant="solid" type="submit" loading={isLoading}>
              Add Product
            </CButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
