import Image from "next/image";
import Link from "next/link";

const ViewMoreCard = ({ image, data }: any) => {
  return (
    <>
      <Link href={`/shop`}>
        <div className="relative w-full">
          <Image
            className="w-full "
            src={image || "https://ibb.co/QDxqRcP"}
            height={800}
            width={800}
            alt="image"
          />

          <p className=" text-center absolute  bottom-0 p-4  top-0 mt-0 mb-0 left-0 right-0 ml-auto mr-auto bg-black  opacity-40  text-white ">
            {" "}
            <span className="absolute top-0 bottom-0 mt-auto mb-auto left-0 right-0 ml-auto mr-auto flex items-center justify-center text-4xl px-4 lg:text-5xl">
              View More
            </span>{" "}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ViewMoreCard;
