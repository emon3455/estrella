import Image from "next/image";
import Link from "next/link";

const TopCategoryCard = ({ data }: any) => {
  return (
    <>
      <Link href={`/shop/${data?.route}`}>
        <div className="relative w-full">
          <Image
            className="w-full "
            src={data?.image || "https://ibb.co/QDxqRcP"}
            height={800}
            width={800}
            alt="image"
          />

          <p className="  font-bold  text-xl md:text-xl lg:text-2xl text-center absolute bottom-0 left-0 right-0 ml-auto mr-auto ">
            {" "}
            <span className=" text-white px-4  bg-black bg-opacity-35 rounded-t-2xl    ">
              {data?.name}
            </span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default TopCategoryCard;
