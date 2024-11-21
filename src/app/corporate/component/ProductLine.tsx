import Image from "next/image";

const ProductLine = () => {
  const productLinup = [
    {
      name: "T-shirt",
      image: "https://img.icons8.com/ios/50/t-shirt--v1.png",
    },
    {
      name: "Polo T-shirt",
      image: "https://img.icons8.com/ios/50/polo-shirt.png",
    },
    {
      name: "Hoodie/Sweatshirt",
      image: "https://img.icons8.com/carbon-copy/100/mens-hoodie--v2.png",
    },
    {
      name: "Sports T-shirt",
      image:
        "https://img.icons8.com/external-icons-smashing-stocks/68/external-Sports-Shirt-fitness-icons-icons-smashing-stocks.png",
    },
    {
      name: "Jacket",
      image: "https://img.icons8.com/ultraviolet/40/jacket.png",
    },
    {
      name: "Shirt",
      image: "https://img.icons8.com/doodle/48/shirt.png",
    },
    {
      name: "Cap",
      image: "https://img.icons8.com/pastel-glyph/64/cap--v2.png",
    },
    {
      name: "Mask",
      image: "https://img.icons8.com/office/16/protection-mask.png",
    },
    {
      name: "Water bottle",
      image:
        "https://img.icons8.com/external-stickers-smashing-stocks/70/external-Water-Bottle-football-stickers-smashing-stocks.png",
    },
    {
      name: "Pant",
      image:
        "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/external-pant-summertime-xnimrodx-lineal-color-xnimrodx.png",
    },
    {
      name: "Walet",
      image: "https://img.icons8.com/color/48/wallet--v1.png",
    },
    {
      name: "Socks",
      image: "https://img.icons8.com/flat-round/64/socks.png",
    },
  ];

  const details = [
    {
      image: "https://img.icons8.com/color/48/checked-2--v1.png",
      headline: "Quality Craftsmanship",
      pera: "Our unwavering commitment to meticulous attention to detail ensures that our products not only boast a visually appealing aesthetic but also stand the test of time.",
    },
    {
      image: "https://img.icons8.com/color/48/recycle-sign.png",
      headline: "Sustainability Focus",
      pera: "Through our embrace of recycled plastics and 100% organic materials, we seamlessly translate eco-conscious choices into premium fabrics.",
    },
    {
      image: "https://img.icons8.com/ios-filled/50/settings.png",
      headline: "Pioneering Expertise",
      pera: "With over six years of expertise in the custom merchandise and apparel industry, we have consistently set the benchmark for excellence",
    },
    {
      image: "https://img.icons8.com/color/48/checked-2--v1.png",
      headline: "Affordable Pricing",
      pera: "Elevate your expectations without exceeding your budget – discover superior custom merchandise that embodies high quality without a hefty price tag.",
    },
    {
      image: "https://img.icons8.com/emoji/48/globe-showing-americas-emoji.png",
      headline: "Worldwide Shipping",
      pera: "Experience seamless global accessibility with our reliable and efficient worldwide shipping, ensuring your order reaches your doorstep, regardless of your location.",
    },
    {
      image:
        "https://img.icons8.com/ios-filled/50/000000/lightning-bolt--v1.png",
      headline: "Creative Design Support",
      pera: "We breathe life into your brand's narrative through creative designs that not only capture attention but also resonate with diverse audiences.",
    },
  ];
  return (
    <div className="my-8 max-w-5xl mx-auto">
      <h1 className="uppercase text-3xl text-center font-medium">
        <span className="bg-[#D8F8F0] border border-r-8 border-r-amber-600 border-l-8 border-l-blue-500  px-6">
          Product Linup
        </span>
      </h1>

      <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 my-8 mx-2  gap-4">
        {productLinup.map((data: any, idx: any) => (
          <div
            key={idx}
            className="py-8 relative shadow-md flex justify-center items-center shadow-slate-600 "
          >
            <Image
              className="w-12 "
              src={data.image}
              width={800}
              height={800}
              alt=""
            />
            <h6 className="absolute top-0 text-sm text-center">
              <hr className=" bg-[#d8f8f0f1] h-1  " />
              {data.name}
            </h6>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        {details.map((data: any, idx: any) => (
          <div key={idx} className="flex gap-4 mx-2">
            <div>
              <Image
                width={800}
                height={800}
                className="w-96"
                src={data.image}
                alt="image"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold">{data.headline}</h2>
              <p>{data.pera}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLine;
