"use client";
import { myProducts } from "@/assets/dummy";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductItem from "../product-item";

function SwiperProducts() {
  return (
    <div>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          320: { slidesPerView: 1 },
          390: { slidesPerView: 1.2 },
          490: { slidesPerView: 1.5 },
          590: { slidesPerView: 1.8 },
          768: { slidesPerView: 2 },
          968: { slidesPerView: 3 },
          1368: { slidesPerView: 4 },
        }}
        spaceBetween={20}
      >
        {myProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperProducts;
