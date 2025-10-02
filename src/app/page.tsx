// import Newsletter from "@/components/newsletter/Newsletter";
import Hero from "./_components/Hero";
import NewArrivals from "./_components/NewArrivals";
import TopSelling from "./_components/TopSelling";
import StyleBrowser from "./_components/StyleBrowser";
import Brands from "./_components/Brands";
import CustomerTestimonials from "./_components/CustomerTestimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <div className="mt-[72px]">
        <div className="mb-[64px]">
          <NewArrivals />
        </div>
        <div className="mb-[80px]">
          <TopSelling />
        </div>
        <div>
          <StyleBrowser />
        </div>
        <div>
          <CustomerTestimonials />
        </div>
      </div>
    </main>
  );
}
