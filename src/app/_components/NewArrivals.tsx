import SwiperProducts from "@/components/swiper/SwiperProducts";
function NewArrivals() {
  return (
    <section className="px-5 sm:px-10">
      <div className="container">
        <h2 className="uppercase text-3xl sm:text-5xl mb-[55px] text-center font-bold font-oswald">
          NEW ARRIVALS
        </h2>
        <SwiperProducts />
        <div className="text-center mt-[36px]">
          <button className="cursor-pointer border font-medium max-sm:text-sm max-sm:w-full text-black border-black/10 rounded-full px-[54px] py-4 hover:text-white hover:bg-black transition-all">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
