"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import ProductItem from "@/components/product-item";
import { myProducts } from "@/assets/dummy";
import filterIcon from "@/assets/icons/filter-icon.svg";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";

type Products = (
  | {
      id: number;
      name: string;
      price: number;
      originalPrice: null;
      image: string;
      rating: number;
      reviews: number;
      category: string;
      colors: string[];
      sizes: string[];
      style: string;
    }
  | {
      id: number;
      name: string;
      price: number;
      originalPrice: number;
      image: string;
      rating: number;
      reviews: number;
      category: string;
      colors: string[];
      sizes: string[];
      style: string;
    }
)[];

export default function ShopPage() {
  // State Management
  const [isOpen, setIsopen] = useState({
    price: false,
    colors: false,
    size: false,
    style: false,
  });
  const [priceRange, setPriceRange] = useState([20, 400]);
  const [selectedCategory, setSelectedCategory] = useState("T-shirts");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState("Casual");
  const [filteredProducts, setFilteredProducts] = useState<Products>([]);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;

  // Products Data
  const products = myProducts;

  // Filter Options
  const colors = [
    { name: "Green", class: "bg-green-500" },
    { name: "Red", class: "bg-red-500" },
    { name: "Yellow", class: "bg-yellow-500" },
    { name: "Orange", class: "bg-orange-500" },
    { name: "Sky Blue", class: "bg-sky-500" },
    { name: "Blue", class: "bg-blue-600" },
    { name: "Purple", class: "bg-purple-600" },
    { name: "Pink", class: "bg-pink-500" },
    { name: "White", class: "bg-white border border-gray-300" },
    { name: "Black", class: "bg-black" },
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const dressStyles = ["Casual", "Formal", "Party", "Gym"];

  // Initialize filtered products on component mount
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // FILTER LOGIC
  const applyFilters = () => {
    const filtered = [...products].filter((product) => {
      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Category filter
      if (product.category !== selectedCategory) {
        return false;
      }

      // Color filter (if any colors selected)
      if (selectedColors.length > 0) {
        const hasSelectedColor = selectedColors.some((color) =>
          product.colors.includes(color)
        );
        if (!hasSelectedColor) {
          return false;
        }
      }

      // Size filter (if any sizes selected)
      if (selectedSizes.length > 0) {
        const hasSelectedSize = selectedSizes.some((size) =>
          product.sizes.includes(size)
        );
        if (!hasSelectedSize) {
          return false;
        }
      }

      // Style filter
      if (product.style !== selectedStyle) {
        return false;
      }

      return true;
    });

    setFilteredProducts(filtered);
    setFiltersApplied(true);
    setCurrentPage(1); // Reset to first page when filters are applied
  };

  // Helper Functions
  const getCategoryCount = (category: string) => {
    return products.filter((product) => product.category === category).length;
  };

  const toggleColor = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearAllFilters = () => {
    setFilteredProducts(products);
    setFiltersApplied(false);
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange([20, 400]);
    setSelectedCategory("T-shirts");
    setSelectedStyle("Casual");
    setCurrentPage(1);
  };

  // SORTING
  const sortedProducts = React.useMemo(() => {
    if (sortBy === "popular") {
      return [...filteredProducts].sort((a, b) => b.rating - a.rating);
    }
    return [...filteredProducts].sort((a, b) => a.id - b.id);
  }, [filteredProducts, sortBy]);

  // PAGINATION LOGIC
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const generatePaginationNumbers = () => {
    const pages = [];
    const showPages = 5; // Number of page numbers to show

    if (totalPages <= showPages) {
      // If total pages is less than or equal to showPages, show all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Complex pagination logic
      if (currentPage <= 3) {
        // Show first few pages
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show last few pages
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show middle pages
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // DOUBLE RANGE SLIDER HANDLERS
  const handleMinThumbDrag = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const startX = e.clientX;
    const startValue = priceRange[0];
    const rect = e.currentTarget.parentElement!.getBoundingClientRect();

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      const deltaValue = (deltaX / rect.width) * 380;
      const newValue = Math.max(
        20,
        Math.min(priceRange[1] - 1, Math.round(startValue + deltaValue))
      );
      setPriceRange([newValue, priceRange[1]]);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMaxThumbDrag = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const startX = e.clientX;
    const startValue = priceRange[1];
    const rect = e.currentTarget.parentElement!.getBoundingClientRect();

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      const deltaValue = (deltaX / rect.width) * 380;
      const newValue = Math.max(
        priceRange[0] + 1,
        Math.min(400, Math.round(startValue + deltaValue))
      );
      setPriceRange([priceRange[0], newValue]);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="px-5 sm:px-10 bg-white"
    >
      <div className="container ">
        <div className="flex items-center text-sm text-accent mb-6">
          <span>Home</span>
          <span className="mx-2">
            <ChevronRight className="h-4 text-accent" />
          </span>
          <span className="text-black font-semibold">Shop</span>
        </div>
        <div className="flex md:gap-5">
          <aside className="w-[295] max-md:hidden py-5 px-6 border rounded-[20px] border-black/10 h-fit">
            {/* Filters Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Filters</h2>
              <Image src={filterIcon} alt="Filter Icon" />
            </div>

            <div className="h-px w-full bg-black/10 my-6" />

            {/* CATEGORIES */}
            <div className=" flex flex-col gap-5">
              {categories.map((category) => (
                <div
                  key={category}
                  className="flex items-center justify-between"
                >
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      selectedCategory === category
                        ? "text-black font-medium"
                        : "text-accent hover:text-black"
                    } transition-colors`}
                  >
                    {category}
                  </button>
                  <span className="text-accent">
                    {getCategoryCount(category)}
                  </span>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-black/10 my-6" />

            {/* PRICE RANGE SLIDER */}
            <div className="">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xl">Price</h3>
                <ChevronDown
                  onClick={() =>
                    setIsopen((prev) => ({ ...prev, price: !prev.price }))
                  }
                  className={`w-5 h-5 text-black cursor-pointer transition ${
                    isOpen.price ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`space-y-2 mt-5  ${
                  isOpen.price ? "block" : "hidden"
                }`}
              >
                <div className="relative h-6 flex items-center">
                  {/* Background track */}
                  <div className="absolute w-full h-[6px] bg-[#F0F0F0] rounded-[20px]"></div>

                  {/* Active range track */}
                  <div
                    className="absolute h-[6px] bg-black rounded-lg"
                    style={{
                      left: `${((priceRange[0] - 20) / 380) * 100}%`,
                      width: `${
                        ((priceRange[1] - priceRange[0]) / 380) * 100
                      }%`,
                    }}
                  ></div>

                  {/* Min thumb */}
                  <div
                    className="absolute w-5 h-5 bg-black rounded-full cursor-pointer z-10 transform -translate-x-1/2"
                    style={{ left: `${((priceRange[0] - 20) / 380) * 100}%` }}
                    onMouseDown={handleMinThumbDrag}
                  ></div>

                  {/* Max thumb */}
                  <div
                    className="absolute w-5 h-5 bg-black rounded-full cursor-pointer z-10 transform -translate-x-1/2"
                    style={{ left: `${((priceRange[1] - 20) / 380) * 100}%` }}
                    onMouseDown={handleMaxThumbDrag}
                  ></div>
                </div>

                <div className="flex justify-between text-sm font-medium text-black">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-black/10 my-6" />

            {/* COLORS */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xl">Colors</h3>
                <ChevronDown
                  onClick={() =>
                    setIsopen((prev) => ({ ...prev, colors: !prev.colors }))
                  }
                  className={`w-5 h-5 text-black cursor-pointer transition ${
                    isOpen.colors ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`grid grid-cols-5 gap-3 mt-5 ${
                  isOpen.colors ? "block" : "hidden"
                }`}
              >
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => toggleColor(color.name)}
                    className={`size-[37px] rounded-full ${
                      color.class
                    } hover:scale-110 transition-transform relative ${
                      selectedColors.includes(color.name)
                        ? "ring-2 ring-offset-2 ring-black"
                        : ""
                    }`}
                    title={color.name}
                  >
                    {selectedColors.includes(color.name) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            color.name === "White" ? "bg-black" : "bg-white"
                          }`}
                        ></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {selectedColors.length > 0 && (
                <div className="mt-2 text-xs text-gray-600">
                  Selected: {selectedColors.join(", ")}
                </div>
              )}
            </div>
            <div className="h-px w-full bg-black/10 my-6" />

            {/* SIZES */}
            <div className="">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xl">Size</h3>
                <ChevronDown
                  onClick={() =>
                    setIsopen((prev) => ({ ...prev, size: !prev.size }))
                  }
                  className={`w-5 h-5 text-black cursor-pointer transition ${
                    isOpen.size ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex flex-wrap gap-2 mt-5 ${
                  isOpen.size ? "block" : "hidden"
                }`}
              >
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`py-2.5 px-5 text-sm rounded-full transition-colors ${
                      selectedSizes.includes(size)
                        ? " bg-black text-white"
                        : "bg-[#F0F0F0] text-accent border hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSizes.length > 0 && (
                <div className="mt-2 text-xs text-gray-600">
                  Selected: {selectedSizes.join(", ")}
                </div>
              )}
            </div>
            <div className="h-px w-full bg-black/10 my-6" />
            {/* DRESS STYLE */}
            <div className="">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xl">Dress Style</h3>
                <ChevronDown
                  onClick={() =>
                    setIsopen((prev) => ({ ...prev, style: !prev.style }))
                  }
                  className={`w-5 h-5 text-black cursor-pointer transition ${
                    isOpen.style ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`space-y-5 mt-5 ${
                  isOpen.style ? "block" : "hidden"
                }`}
              >
                {dressStyles.map((style) => (
                  <div
                    key={style}
                    className="flex items-center justify-between text-sm"
                  >
                    <button
                      onClick={() => setSelectedStyle(style)}
                      className={`${
                        selectedStyle === style
                          ? "text-black font-semibold"
                          : "text-accent hover:text-black"
                      } transition-colors`}
                    >
                      {style}
                    </button>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={applyFilters}
              className="w-full bg-black text-sm text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors mt-6 cursor-pointer"
            >
              Apply Filter
            </button>

            {filtersApplied && (
              <button
                onClick={clearAllFilters}
                className="w-full mt-2 border text-sm py-4 border-gray-300 text-gray-700  rounded-full font-medium hover:border-black cursor-pointer transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </aside>
          <div className="space-y-4 flex-1">
            <div className="flex items-center justify-between">
              <h1 className="text-[32px] font-bold">Shop</h1>
              <div className="flex items-center gap-4 text-sm max-lg:hidden">
                <span className="text-accent">
                  Showing {startIndex + 1}-
                  {Math.min(endIndex, filteredProducts.length)} of{" "}
                  {filteredProducts.length} Products
                  {filtersApplied && (
                    <span className="ml-2 text-blue-600 font-medium">
                      (Filtered from {products.length})
                    </span>
                  )}
                </span>
                <div className="flex items-center gap-2">
                  <span>Sort by:</span>
                  <button className="flex items-center gap-1 font-medium">
                    {/* Most Popular */}
                    <select onChange={(e) => setSortBy(e.target.value)}>
                      <option value="default">Default</option>
                      <option value="popular">Most Popular</option>
                    </select>
                  </button>
                </div>
              </div>
              <Drawer>
                <DrawerTrigger asChild>
                  <Image
                    src={filterIcon}
                    alt="Filter Icon"
                    className="md:hidden cursor-pointer"
                  />
                </DrawerTrigger>
                <DrawerContent className="h-[98vh]">
                  <div className="hidden">
                    <DrawerTitle>Drawer Panel Is Hidden</DrawerTitle>
                  </div>
                  <div className="w-full overflow-y-scroll">
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <div className="flex items-center justify-between w-full">
                          <h2 className="text-xl font-bold">Filters</h2>
                          <button className="ml-auto text-2xl text-black cursor-pointer">
                            ✕
                          </button>
                        </div>
                      </DrawerClose>
                    </DrawerFooter>

                    <aside className="w-full md:hidden px-5 h-fit">
                      <div className="h-px w-full bg-black/10 mb-6" />

                      {/* CATEGORIES */}
                      <div className=" flex flex-col gap-5">
                        {categories.map((category) => (
                          <div
                            key={category}
                            className="flex items-center justify-between"
                          >
                            <button
                              onClick={() => setSelectedCategory(category)}
                              className={`${
                                selectedCategory === category
                                  ? "text-black font-medium"
                                  : "text-accent hover:text-black"
                              } transition-colors`}
                            >
                              {category}
                            </button>
                            <span className="text-accent">
                              {getCategoryCount(category)}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="h-px w-full bg-black/10 my-6" />

                      {/* PRICE RANGE SLIDER */}
                      <div className="">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xl">Price</h3>
                          <ChevronDown
                            onClick={() =>
                              setIsopen((prev) => ({
                                ...prev,
                                price: !prev.price,
                              }))
                            }
                            className={`w-5 h-5 text-black cursor-pointer transition ${
                              isOpen.price ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        <div
                          className={`space-y-2 mt-5  ${
                            isOpen.price ? "block" : "hidden"
                          }`}
                        >
                          <div className="relative h-6 flex items-center">
                            {/* Background track */}
                            <div className="absolute w-full h-[6px] bg-[#F0F0F0] rounded-[20px]"></div>

                            {/* Active range track */}
                            <div
                              className="absolute h-[6px] bg-black rounded-lg"
                              style={{
                                left: `${((priceRange[0] - 20) / 380) * 100}%`,
                                width: `${
                                  ((priceRange[1] - priceRange[0]) / 380) * 100
                                }%`,
                              }}
                            ></div>

                            {/* Min thumb */}
                            <div
                              className="absolute w-5 h-5 bg-black rounded-full cursor-pointer z-10 transform -translate-x-1/2"
                              style={{
                                left: `${((priceRange[0] - 20) / 380) * 100}%`,
                              }}
                              onMouseDown={handleMinThumbDrag}
                            ></div>

                            {/* Max thumb */}
                            <div
                              className="absolute w-5 h-5 bg-black rounded-full cursor-pointer z-10 transform -translate-x-1/2"
                              style={{
                                left: `${((priceRange[1] - 20) / 380) * 100}%`,
                              }}
                              onMouseDown={handleMaxThumbDrag}
                            ></div>
                          </div>

                          <div className="flex justify-between text-sm font-medium text-black">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                          </div>
                        </div>
                      </div>

                      <div className="h-px w-full bg-black/10 my-6" />

                      {/* COLORS */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xl">Colors</h3>
                          <ChevronDown
                            onClick={() =>
                              setIsopen((prev) => ({
                                ...prev,
                                colors: !prev.colors,
                              }))
                            }
                            className={`w-5 h-5 text-black cursor-pointer transition ${
                              isOpen.colors ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        <div
                          className={`grid grid-cols-5 gap-3 mt-5 ${
                            isOpen.colors ? "block" : "hidden"
                          }`}
                        >
                          {colors.map((color) => (
                            <button
                              key={color.name}
                              onClick={() => toggleColor(color.name)}
                              className={`size-[37px] rounded-full ${
                                color.class
                              } hover:scale-110 transition-transform relative ${
                                selectedColors.includes(color.name)
                                  ? "ring-2 ring-offset-2 ring-black"
                                  : ""
                              }`}
                              title={color.name}
                            >
                              {selectedColors.includes(color.name) && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div
                                    className={`w-2 h-2 rounded-full ${
                                      color.name === "White"
                                        ? "bg-black"
                                        : "bg-white"
                                    }`}
                                  ></div>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                        {selectedColors.length > 0 && (
                          <div className="mt-2 text-xs text-gray-600">
                            Selected: {selectedColors.join(", ")}
                          </div>
                        )}
                      </div>
                      <div className="h-px w-full bg-black/10 my-6" />

                      {/* SIZES */}
                      <div className="">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xl">Size</h3>
                          <ChevronDown
                            onClick={() =>
                              setIsopen((prev) => ({
                                ...prev,
                                size: !prev.size,
                              }))
                            }
                            className={`w-5 h-5 text-black cursor-pointer transition ${
                              isOpen.size ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        <div
                          className={`flex flex-wrap gap-2 mt-5 ${
                            isOpen.size ? "block" : "hidden"
                          }`}
                        >
                          {sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => toggleSize(size)}
                              className={`py-2.5 px-5 text-sm rounded-full transition-colors ${
                                selectedSizes.includes(size)
                                  ? " bg-black text-white"
                                  : "bg-[#F0F0F0] text-accent border hover:border-black"
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                        {selectedSizes.length > 0 && (
                          <div className="mt-2 text-xs text-gray-600">
                            Selected: {selectedSizes.join(", ")}
                          </div>
                        )}
                      </div>
                      <div className="h-px w-full bg-black/10 my-6" />
                      {/* DRESS STYLE */}
                      <div className="">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xl">Dress Style</h3>
                          <ChevronDown
                            onClick={() =>
                              setIsopen((prev) => ({
                                ...prev,
                                style: !prev.style,
                              }))
                            }
                            className={`w-5 h-5 text-black cursor-pointer transition ${
                              isOpen.style ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        <div
                          className={`space-y-5 mt-5 ${
                            isOpen.style ? "block" : "hidden"
                          }`}
                        >
                          {dressStyles.map((style) => (
                            <div
                              key={style}
                              className="flex items-center justify-between text-sm"
                            >
                              <button
                                onClick={() => setSelectedStyle(style)}
                                className={`${
                                  selectedStyle === style
                                    ? "text-black font-semibold"
                                    : "text-accent hover:text-black"
                                } transition-colors`}
                              >
                                {style}
                              </button>
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            </div>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={applyFilters}
                        className="w-full bg-black text-sm text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors mt-6 cursor-pointer"
                      >
                        Apply Filter
                      </button>

                      {filtersApplied && (
                        <button
                          onClick={clearAllFilters}
                          className="w-full mt-2 border text-sm py-4 border-gray-300 text-gray-700  rounded-full font-medium hover:border-black cursor-pointer transition-colors"
                        >
                          Clear All Filters
                        </button>
                      )}
                    </aside>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
            {/* PRODUCTS GRID */}
            <div>
              <div className="flex items-center justify-end gap-4 text-sm mb-5 lg:hidden">
                <span className="text-accent">
                  Showing {startIndex + 1}-
                  {Math.min(endIndex, filteredProducts.length)} of{" "}
                  {filteredProducts.length} Products
                  {filtersApplied && (
                    <span className="ml-2 text-blue-600 font-medium">
                      (Filtered from {products.length})
                    </span>
                  )}
                </span>
                <div className="flex items-center gap-2">
                  <span>Sort by:</span>
                  <button className="flex items-center gap-1 font-medium">
                    {/* Most Popular */}
                    <select onChange={(e) => setSortBy(e.target.value)}>
                      <option value="default">Default</option>
                      <option value="popular">Most Popular</option>
                    </select>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols- xl:grid-cols-3 gap-6 mb-8">
                {currentProducts.length > 0 ? (
                  currentProducts.map((product, index) => (
                    <ProductItem key={index} product={product} />
                  ))
                ) : (
                  // EMPTY STATE
                  <div className="col-span-3 text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-medium text-gray-600 mb-2">
                      No products found
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Try adjusting your filters or{" "}
                      <button
                        onClick={clearAllFilters}
                        className="text-blue-600 hover:underline"
                      >
                        clear all filters
                      </button>
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded transition-colors ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  ← Previous
                </button>

                <div className="flex items-center gap-2">
                  {generatePaginationNumbers().map((page, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        typeof page === "number" && setCurrentPage(page)
                      }
                      disabled={page === "..."}
                      className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                        page === currentPage
                          ? "bg-black text-white"
                          : page === "..."
                          ? "text-gray-400 cursor-default"
                          : "text-gray-500 hover:text-black hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded transition-colors ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
