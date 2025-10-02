"use client";
import Link from "next/link";
import cartBlack from "@/assets/icons/cart-black.svg";
import userBlack from "@/assets/icons/user-black.svg";
import searchGray from "@/assets/icons/search-gray.svg";
import Image from "next/image";
import { DrawerDemo } from "./Drawer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

const links = [
  { name: "Shop", href: "/shop" },
  { name: "On Sale", href: "#" },
  { name: "New Arrivals", href: "#new-arrivals" },
  { name: "Brands", href: "#brands" },
];

function Header() {
  const [mounted, setMounted] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header>
      <div className="px-5 sm:px-10 bg-black">
        <div className="w-full container text-white text-xs sm:text-sm text-center py-2 flex justify-center items-center relative">
          <p className="">
            Sign up and get 20% off to your first order.{" "}
            <Link href="#" className="underline font-medium max-[370px]:block">
              Sign Up Now
            </Link>
          </p>
          <button className="absolute right-0 max-sm:hidden">✕</button>
        </div>
      </div>
      <div className="px-5 sm:px-10 bg-white">
        {/* Main Nav */}
        <nav className="flex items-center gap-5 justify-between py-4 container">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              {/* <Image src={barsBlack} alt="Bars Icon" className="lg:hidden" /> */}
              <DrawerDemo links={links} />
            </div>
            <Link
              href="/"
              className="text-[25.2px] sm:text-[32px] font-bold font-oswald"
            >
              SHOP.CO
            </Link>
          </div>
          {/* Nav Links */}
          <div className="hidden lg:flex space-x-6 text-gray-700">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg hidden lg:block">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Image src={searchGray} alt="Search Icon" className="" />
              <input
                type="text"
                placeholder="Search for products..."
                className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 hidden lg:block"
              />
            </div>
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link className="relative" href="/cart">
              <Image src={cartBlack} alt="Cart Icon" className="" />{" "}
              {mounted && (
                <span className="absolute bg-black size-4 text-[10px] text-white flex items-center justify-center rounded-full -top-3 -right-2">
                  {cart.totalItems > 0 ? cart.totalItems : 0}
                </span>
              )}
            </Link>
            <Link href="#">
              <Image src={userBlack} alt="User Icon" className="" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
