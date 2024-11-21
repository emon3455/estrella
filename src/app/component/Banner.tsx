/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import banner from "@/assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <Image
        className=" w-full "
        src={banner}
        height={391}
        width={1400}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
