"use client";
import Image from "next/image";
import casualImage from "@/assets/images/casual.png";
import formalImage from "@/assets/images/formal.png";
import partyImage from "@/assets/images/party.png";
import gymImage from "@/assets/images/gym.png";
import { motion } from "framer-motion";

const StyleBrowser = () => {
  const styles = [
    {
      id: 1,
      name: "Casual",
      image: casualImage,
      className: "col-span-1 row-span-1",
    },
    {
      id: 2,
      name: "Formal",
      image: formalImage,
      className: "col-span-1 row-span-1",
    },
    {
      id: 3,
      name: "Party",
      image: partyImage,
      className: "col-span-1 row-span-1",
    },
    {
      id: 4,
      name: "Gym",
      image: gymImage,
      className: "col-span-1 row-span-1",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="px-5 sm:px-10"
    >
      <div className="container">
        <div className="md:px-[64px] px-6 md:pt-[70px] pt-10 md:pb-[76px] pb-[27px] bg-secondary md:rounded-[40px] rounded-[20px]">
          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold font-oswald text-black text-center mb-7 md:mb-[64px]">
            BROWSE BY DRESS STYLE
          </h2>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,407px)_minmax(0,684px)] gap-5 mb-5">
            {styles.slice(0, 2).map((style) => (
              <div
                key={style.id}
                className="relative h-[289px] overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                {/* Image Container */}
                <div className="overflow-hidden">
                  <Image
                    src={style.image}
                    alt={`${style.name} style`}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Style Label */}
                <span className="text-black absolute top-4 left-4 text-2xl md:text-[38px] font-bold">
                  {style.name}
                </span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,684px)_minmax(0,407px)] gap-5">
            {styles.slice(2).map((style) => (
              <div
                key={style.id}
                className="relative h-[289px] overflow-hidden rounded-[20px] bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                {/* Image Container */}
                <div className="overflow-hidden">
                  <Image
                    src={style.image}
                    alt={`${style.name} style`}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Style Label */}
                <span className="text-black absolute top-4 left-4 text-2xl md:text-[38px] font-bold">
                  {style.name}
                </span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StyleBrowser;
