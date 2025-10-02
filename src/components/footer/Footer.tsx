import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import pay1 from "@/assets/icons/pay-1.svg";
import pay2 from "@/assets/icons/pay-2.svg";
import pay3 from "@/assets/icons/pay-3.svg";
import pay4 from "@/assets/icons/pay-4.svg";
import pay5 from "@/assets/icons/pay-5.svg";
import Image from "next/image";
const pays = [
  { img: pay1, href: "#" },
  { img: pay2, href: "#" },
  { img: pay3, href: "#" },
  { img: pay4, href: "#" },
  { img: pay5, href: "#" },
];

function Footer() {
  return (
    <footer className="bg-background px-5 sm:px-10 pt-[210px] min-[370px]:pt-[190px] lg:pt-[140px] sm:pb-[88px] pb-[77px]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-sm:gap-6">
          <div className="max-md:col-span-2">
            <h3 className="md:text-[33.45px] text-[28.8px] font-bold font-oswald md:mb-[25px] mb-3.5">
              SHOP.CO
            </h3>
            <p className="text-accent md:max-w-[248px] max-w-[357px] leading-[22px] text-sm">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className="gap-3 flex text-accent mt-6">
              <li className="group">
                <Link
                  href="#"
                  className="p-[7.23px] block rounded-full border border-black/20 bg-white group-hover:bg-black transition-all"
                >
                  <FaTwitter className="w-[13.55px] h-[13.55px] text-black group-hover:text-white transition-all" />
                </Link>
              </li>
              <li className="group">
                <Link
                  href="#"
                  className="p-[7.23px] block rounded-full border border-black/20 bg-white group-hover:bg-black transition-all"
                >
                  <FaFacebookF className="w-[13.55px] h-[13.55px] text-black group-hover:text-white transition-all" />
                </Link>
              </li>
              <li className="group">
                <Link
                  href="#"
                  className="p-[7.23px] block rounded-full border border-black/20 bg-white group-hover:bg-black transition-all"
                >
                  <FaInstagram className="w-[13.55px] h-[13.55px] text-black group-hover:text-white transition-all" />
                </Link>
              </li>
              <li className="group">
                <Link
                  href="#"
                  className="p-[7.23px] block rounded-full border border-black/20 bg-white group-hover:bg-black transition-all"
                >
                  <IoLogoGithub className="w-[13.55px] h-[13.55px] text-black group-hover:text-white transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium max-sm:text-sm max-sm:mb-4 mb-6 tracking-[3px]">
              COMPANY
            </h4>
            <ul className="max-sm:gap-3 gap-4 flex flex-col text-accent max-sm:text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium max-sm:text-sm max-sm:mb-4 mb-6 tracking-[3px]">
              HELP
            </h4>
            <ul className="max-sm:gap-3 gap-4 flex flex-col text-accent max-sm:text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium max-sm:text-sm max-sm:mb-4 mb-6 tracking-[3px]">
              FAQ
            </h4>
            <ul className="max-sm:gap-3 gap-4 flex flex-col text-accent max-sm:text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Account
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Payments
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h4 className="font-medium max-sm:text-sm max-sm:mb-4 mb-6 tracking-[3px]">
              RESOURCES
            </h4>
            <ul className="max-sm:gap-3 gap-4 flex flex-col text-accent max-sm:text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  YouTube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t flex max-md:flex-col max-md:gap-4 w-full justify-between items-center border-black/10 mt-[40px] sm:mt-[50px] sm:pt-6 pt-4 text-center text-gray-400">
          <p className="text-sm">Shop.co © 2023. All rights reserved</p>
          <ul className="gap-3 max-sm:gap-0 flex">
            {pays.map((pay, index) => (
              <li key={index} className="group">
                <Link href="#">
                  <Image
                    src={pay.img}
                    className="group-hover:opacity-60 transition-all"
                    alt="Pay Method Icon"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
