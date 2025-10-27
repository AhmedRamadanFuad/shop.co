"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero from "@/assets/images/hero.png";
import star from "@/assets/images/black-star.png";
import hero2 from "@/assets/images/hero2.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#F2F0F1] px-5 sm:px-10 relative z-0 overflow-hidden pt-10 sm:pt-[100px] "
    >
      <div className="container h-full z-10 flex flex-col">
        {/* Left Content */}
        <div className="flex-1 max-[1333px]:flex max-[1333px]:flex-col max-[1333px]:items-center md:space-y-[48px] space-y-5 min-[1334px]:pb-[116px]">
          <div className="max-[1333px]:flex max-[1333px]:flex-col max-[1333px]:items-center">
            <h1 className="text-[36px] max-sm:text-start max-[1333px]:text-center sm:text-[64px] font-oswald font-bold text-black sm:leading-[64px] tracking-[3px] leading-[36px] md:mb-8 mb-5">
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              YOUR STYLE
            </h1>
            <p className="text-accent leading-[21px] max-sm:text-sm max-sm:text-start max-[1333px]:text-center mb-8 max-w-[260px] sm:max-w-[545px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button className="bg-black cursor-pointer text-white px-12 py-6 max-lg:w-full rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
              Shop Now
            </Button>
          </div>
          {/* Stats Section */}
          <div className="flex max-md:flex-wrap max-md:items-center max-md:justify-center max-md:text-center gap-y-4 md:gap-[64px]">
            <div className="max-md:basis-1/2">
              <div className="md:text-[40px] text-[24px] font-bold text-black">
                200+
              </div>
              <div className="text-accent max-sm:text-xs">
                International Brands
              </div>
            </div>
            <div className="max-md:basis-1/2">
              <div className="md:text-[40px] font-bold text-black text-[24px]">
                2,000+
              </div>
              <div className="text-accent max-sm:text-xs">
                High-Quality Products
              </div>
            </div>
            <div className="max-md:basis-1/2">
              <div className="md:text-[40px] font-bold text-black text-[24px]">
                30,000+
              </div>
              <div className="text-accent max-sm:text-xs">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Right Content - Models */}
        <div className="absolute top-0 z-[-1] max-[1333px]:hidden right-0 h-full w-[1440px]">
          <div className="h-full relative">
            <Image
              src={star}
              className="absolute top-[267px] right-[634px] size-[56px]"
              alt="Hero Image"
            />
            <Image src={hero} className="h-full" alt="Hero Image" />
            <Image
              src={star}
              className="absolute top-[86px] right-[81px] size-[104px]"
              alt="Hero Image"
            />
          </div>
        </div>
        <div className="min-[1334px]:hidden relative">
          <Image
            src={star}
            className="absolute top-[12.12%] right-[3%] size-[76px] sm:size-[104px]"
            alt="Hero Image"
          />
          <Image src={hero2} className="h-full" alt="Hero Image" />
          <Image
            src={star}
            className="absolute top-[38.3%] right-[82%] size-[44px] sm:size-[56px]"
            alt="Hero Image"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
