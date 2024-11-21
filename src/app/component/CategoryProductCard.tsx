import Image from "next/image";
import Link from "next/link";

const CategoryProductCard = ({ data }: any) => {
  return (
    <>
      <Link href={`/product/${data?._id}`}>
        <div className="relative w-full">
          <Image
            className="w-full "
            src={data?.images[0] || "https://ibb.co/QDxqRcP"}
            height={800}
            width={800}
            alt="image"
          />

          <p className=" text-[.6rem] md:text-sm text-center absolute bottom-0 left-0 right-0 ml-auto mr-auto  ">
            {" "}
            <span className=" bg-white px-4 rounded-t-xl     ">
              ৳ {data?.price} <del> {data?.previousPrice}</del>
            </span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default CategoryProductCard;
