import banner from "@/assets/coporateBanner.png";
import Image from "next/image";

const Banner = () => {
    return (
        <main>
            <div className="relative w-full h-[280px] ">
                <div className="absolute inset-0 -z-10 h-[280px]">
                    <Image
                        src={banner}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt="Corporate banner"


                    />
                </div>
            </div>

        </main>
    );
};

export default Banner;
