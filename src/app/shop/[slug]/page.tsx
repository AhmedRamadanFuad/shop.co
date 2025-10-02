"use client";
import React, { useState } from "react";
import {
  Star,
  Plus,
  Minus,
  ChevronRight,
  Filter,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { getProduct } from "@/assets/dummy";
import ProductItem from "@/components/product-item";
import { useDispatch } from "react-redux";

import { addCartItem } from "@/redux/features/cart/cartSlice";
import Image from "next/image";

const ProductPage = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const slug = Number(params.slug as string);
  const product = getProduct(slug);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Rating & Reviews");

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
  const productColors = colors.filter((color) =>
    product?.colors.includes(color.name)
  );
  const reviews = [
    {
      name: "Samantha D.",
      verified: true,
      rating: 5,
      date: "August 14, 2023",
      text: "I absolutely love this shirt! The design is unique and the fabric feels so comfortable. It's definitely become one of my favorites for casual days. The messaging speaking about one life.",
    },
    {
      name: "Alex M.",
      verified: true,
      rating: 4,
      date: "August 16, 2023",
      text: "Excellent quality and super comfortable! This t-shirt has joined the rest of my favorite wardrobe. The fit is just right, not too tight or too loose about, and the fabric breathes well. A flexible go-to item you'll.",
    },
    {
      name: "Ethan R.",
      verified: true,
      rating: 4,
      date: "August 18, 2023",
      text: "This t-shirt fits great, no issues with construction or overall design. The materials are quite cotton content might be nice, but for $25 it's perfect value with the incredible tops in every sense of the word.",
    },
    {
      name: "Olivia P.",
      verified: true,
      rating: 4,
      date: "August 15, 2023",
      text: "Love the minimalistic, natural simplicity, and functionality. That t-shirt was really appreciated those principles that does leave, going to keep buying from this designer. expect that kind eventually lose",
    },
    {
      name: "Liam K.",
      verified: true,
      rating: 5,
      date: "August 31, 2023",
      text: "This t-shirt is a fusion of comfort and coolness. The fabric is soft, and the lightweight material allows for breathable comfort. It's my new go-to shirt, and I'm thrilled with this purchase!",
    },
    {
      name: "Ava H.",
      verified: true,
      rating: 5,
      date: "August 27, 2023",
      text: "This fits just perfectly! I LOVE! The updating pieces of design philosophy, the soft materials, and thoughtful layout of the design make this truly a standout piece in my wardrobe.",
    },
  ];
  const relatedProducts = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
      rating: 4.5,
      reviews: 123,
      category: "T-shirts",
      colors: ["Green", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      style: "Casual",
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop",
      rating: 4.2,
      reviews: 89,
      category: "T-shirts",
      colors: ["Red", "White"],
      sizes: ["Medium", "Large", "X-Large"],
      style: "Casual",
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      originalPrice: 160,
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
      category: "T-shirts",
      colors: ["Black", "White"],
      sizes: ["Small", "Medium", "Large", "X-Large"],
      style: "Casual",
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 240,
      originalPrice: 260,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop",
      rating: 4.3,
      reviews: 203,
      category: "Jeans",
      colors: ["Blue"],
      sizes: ["Small", "Medium", "Large"],
      style: "Casual",
    },
  ];

  const renderStars = (rating: number | undefined, size = "sm") => {
    const starSize = size === "sm" ? "w-4 h-4" : "w-3 h-3";
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${starSize} ${
          i < Math.floor(rating || 0)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const myData = {
    product: product,
    selectedColor: product?.colors[selectedColor],
    selectedSize: product?.sizes[selectedSize],
    quantity: quantity,
  };

  const handleAddToCart = () => {
    dispatch(addCartItem(myData));

    // Reset quantity after adding to cart
    setQuantity(1);
  };

  return (
    <div className="px-5 sm:px-10">
      {/* Breadcrumb */}
      <div className="container">
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span>Home</span>
          <span className="mx-2">
            <ChevronRight className="h-4 text-accent" />
          </span>
          <span>Shop</span>
          <span className="mx-2">
            <ChevronRight className="h-4 text-accent" />
          </span>
          <span>{product?.name}</span>
        </div>

        <div className="flex flex-col w-full max-lg:items-center max-lg:justify-center lg:flex-row gap-12 mb-16">
          {/* Product Images */}
          <div className="flex max-lg:flex-col-reverse gap-4 w-full max-lg:items-center">
            <div className="flex flex-col max-sm:h-[106px] max-sm:w-full max-lg:flex-row gap-3 max-lg:justify-center">
              <div className="w-[111px] sm:w-[142px] sm:h-[167px] relative rounded-[20px] overflow-hidden">
                <Image
                  src={product?.image || ""}
                  alt="Product view 1"
                  className=" object-cover"
                  fill
                />
              </div>
              <div className="sm:w-[142px] w-[111px] sm:h-[167px] relative rounded-[20px] overflow-hidden">
                <Image
                  src={product?.image || ""}
                  alt="Product view 1"
                  className=" object-cover"
                  fill
                />
              </div>
              <div className="w-[111px] sm:w-[142px] sm:h-[167px] relative rounded-[20px] overflow-hidden">
                <Image
                  src={product?.image || ""}
                  alt="Product view 1"
                  className=" object-cover"
                  fill
                />
              </div>
            </div>
            <div className="flex-1 max-[390px]:w-full">
              <div className="bg-gray-100 min-w-full min-[390px]:w-[358px] h-[290px] sm:w-[444px] sm:h-[530px] relative rounded-[20px] overflow-hidden">
                <Image
                  src={product?.image || ""}
                  alt="One Life Graphic T-Shirt"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-black mb-4">{product?.name}</h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product?.rating)}
                </div>
                <span className="text-sm text-gray-600">
                  {product?.rating}/5
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold">${product?.price}</span>
                <span className="text-xl text-gray-400 line-through">
                  {product?.originalPrice !== null &&
                    `$${product?.originalPrice}`}
                </span>
                {product?.originalPrice !== null && (
                  <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    -15%
                  </div>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis, suscipit eius, ex explicabo tempore dolores quas
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Colors */}
            <div className="">
              <h3 className="font-medium mb-4 text-gray-600">Select Colors</h3>
              <div className="flex gap-4">
                {productColors.map((color, index) => (
                  <div
                    key={color.name}
                    className={`w-9 h-9 rounded-full ${
                      color.class
                    } ring-2 select-none ${
                      selectedColor === index
                        ? "ring-black ring-offset-2"
                        : "ring-gray-300"
                    }`}
                    onClick={() => setSelectedColor(index)}
                  />
                ))}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Sizes */}
            <div>
              <h3 className="font-medium mb-4 text-gray-600">Choose Size</h3>
              <div className="flex gap-3">
                {product?.sizes.map((size, index) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(index)}
                    className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                      selectedSize === index
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center bg-gray-100 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-gray-200 rounded-l-full transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-4 min-w-[80px] text-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-gray-200 rounded-r-full transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button
                onClick={handleAddToCart}
                className="flex-1 h-full bg-black hover:bg-gray-800 text-white rounded-full py-4 text-base font-medium"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className=" mb-8 ">
          <div className="flex w-full lg:flex-row flex-col max-lg:items-end max-lg:gap-5 justify-between items-center">
            <div className="flex w-full max-lg:justify-between">
              <button className="sm:px-6 py-2 max-sm:text-base sm:py-4 text-lg text-gray-400 font-medium">
                Product Details
              </button>
              <button
                className={`sm:px-6 sm:py-4 py-2 max-sm:text-base text-lg font-medium border-b-2 ${
                  activeTab === "Rating & Reviews"
                    ? "text-black border-black"
                    : "text-gray-400 border-transparent"
                }`}
                onClick={() => setActiveTab("Rating & Reviews")}
              >
                Rating & Reviews
              </button>
              <button className="sm:px-6 sm:py-4 py-2 max-sm:text-base text-lg text-gray-400 font-medium">
                FAQs
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Latest
                <ChevronDown className="w-4 h-4" />
              </span>
              <Button variant="outline" size="sm" className="rounded-full px-6">
                Write a Review
              </Button>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {reviews.map((review, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-2">
                {renderStars(review.rating)}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg">{review.name}</span>
                {review.verified && (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
              <p className="text-sm text-gray-500">Posted on {review.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <Button variant="outline" className="rounded-full px-8 py-3">
            Load More Reviews
          </Button>
        </div>

        {/* Related Products */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-12">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
