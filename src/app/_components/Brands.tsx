// "use client";

// import gucciLogo from "@/assets/images/gucci.png";
// import calvinKleinLogo from "@/assets/images/calvin-klein.png";
// import pradaLogo from "@/assets/images/prada.png";
// import versaceLogo from "@/assets/images/versace.png";
// import zaraLogo from "@/assets/images/zara.png";
// import Image from "next/image";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

// function Brands() {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

//   useEffect(() => {
//     if (inView) controls.start("visible");
//   }, [controls, inView]);
//   return (
//     <div className="bg-primary py-10 sm:py-[47px] px-4 -translate-y-[1px]">
//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={controls}
//         variants={{
//           hidden: { opacity: 0, x: -100 },
//           visible: {
//             opacity: 1,
//             x: 0,
//             transition: { duration: 0.8, ease: "easeOut" },
//           },
//         }}
//         className="container flex flex-wrap justify-center lg:justify-between gap-[34px] items-center"
//       >
//         <Image
//           src={versaceLogo}
//           alt={`Versace logo`}
//           className=" object-contain max-md:w-[116.74px]"
//         />
//         <Image
//           src={zaraLogo}
//           alt={`Zara logo`}
//           className=" object-contain max-md:w-[63.81px]"
//         />
//         <Image
//           src={gucciLogo}
//           alt={`Gucci logo`}
//           className=" object-contain max-md:w-[109.39px]"
//         />
//         <Image
//           src={pradaLogo}
//           alt={`Prada logo`}
//           className=" object-contain max-md:w-[127px]"
//         />
//         <Image
//           src={calvinKleinLogo}
//           alt={`Calvin Klein logo`}
//           className=" object-contain max-md:w-[134.84px]"
//         />
//       </motion.div>
//     </div>
//   );
// }

// export default Brands;

"use client";

import gucciLogo from "@/assets/images/gucci.png";
import calvinKleinLogo from "@/assets/images/calvin-klein.png";
import pradaLogo from "@/assets/images/prada.png";
import versaceLogo from "@/assets/images/versace.png";
import zaraLogo from "@/assets/images/zara.png";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function Brands() {
  const logos = [versaceLogo, zaraLogo, gucciLogo, pradaLogo, calvinKleinLogo];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-primary py-10 sm:py-[47px] px-4 overflow-hidden"
    >
      <div className=" flex w-max">
        <motion.div
          className="flex flex-none gap-[80px] items-center"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 333,
            ease: "linear",
          }}
        >
          {Array.from({ length: 99 }).map((_, i) => (
            <React.Fragment key={i}>
              {logos.map((logo, index) => (
                <Image
                  key={`second-${index}`}
                  src={logo}
                  alt={`Brand logo ${index}`}
                  className="object-contain w-[120px] sm:w-[140px]"
                />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Brands;
