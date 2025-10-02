import mailGray from "@/assets/icons/mail-gray.svg";
import Image from "next/image";

function Newsletter() {
  return (
    <section className="px-5 sm:px-10">
      <div className="container ">
        <div className="bg-black text-white sm:py-[36px] py-[32px] sm:px-[64px] px-[37px] rounded-[20px] flex max-lg:flex-col justify-between lg:items-center max-lg:gap-8">
          <h2 className="text-xl text-[32px] sm:text-[40px] font-oswald font-bold mb-2 max-w-[472px] leading-[45px]">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>

          <div className="flex flex-col gap-3.5 w-full lg:w-[349px]">
            <div className="relative">
              <Image
                src={mailGray}
                alt="Mail Icon"
                className="absolute top-2.5 left-4"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-[50px] pr-4 py-3 rounded-full text-black text-sm bg-white"
              />
            </div>
            <button className="w-full cursor-pointer bg-white  text-black py-3 rounded-full font-medium hover:bg-gray-300 transition-colors text-sm">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
