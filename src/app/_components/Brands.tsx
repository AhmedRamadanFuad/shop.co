import gucciLogo from "@/assets/images/gucci.png";
import calvinKleinLogo from "@/assets/images/calvin-klein.png";
import pradaLogo from "@/assets/images/prada.png";
import versaceLogo from "@/assets/images/versace.png";
import zaraLogo from "@/assets/images/zara.png";
import Image from "next/image";

function Brands() {
  return (
    <div className="bg-primary py-10 sm:py-[47px] px-4  -translate-y-[1px]">
      <div className="container flex flex-wrap justify-center lg:justify-between gap-[34px] items-center">
        <Image
          src={versaceLogo}
          alt={`Versace logo`}
          className=" object-contain max-md:w-[116.74px]"
        />
        <Image
          src={zaraLogo}
          alt={`Zara logo`}
          className=" object-contain max-md:w-[63.81px]"
        />
        <Image
          src={gucciLogo}
          alt={`Gucci logo`}
          className=" object-contain max-md:w-[109.39px]"
        />
        <Image
          src={pradaLogo}
          alt={`Prada logo`}
          className=" object-contain max-md:w-[127px]"
        />
        <Image
          src={calvinKleinLogo}
          alt={`Calvin Klein logo`}
          className=" object-contain max-md:w-[134.84px]"
        />
      </div>
    </div>
  );
}

export default Brands;
