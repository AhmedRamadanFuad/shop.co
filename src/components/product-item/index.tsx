"use client";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Product =
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
    };

function ProductItem({ product }: { product: Product }) {
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
  const productColors = colors.filter((color) => {
    return product.colors.includes(color.name);
  });

  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };
  return (
    <Link
      href={`/shop/${product.id}`}
      key={product.id}
      className="group cursor-pointer block w-[295px]"
    >
      <div className="relative w-[295px] h-80 mb-3 overflow-hidden rounded-lg">
        <Image
          src={product.image ?? "/placeholder.png"}
          alt={product.name}
          fill
          className=" object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-4 h-4" />
        </button>

        {/* Product details badge */}
        <div className="absolute bottom-3 left-3 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {product.category} • {product.style}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-sm text-start">{product.name}</h3>

        <div className="flex items-center gap-1">
          {renderStars(product.rating)}
          <span className="text-sm text-gray-500 ml-1">
            {product.rating}/5 ({product.reviews})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
          {product.originalPrice && (
            <span className="text-red-500 text-sm">
              -
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              %
            </span>
          )}
        </div>

        {/* Available colors preview */}
        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-500">Colors:</span>
          {productColors.map((color) => (
            <div
              key={color.name}
              className={`w-3 h-3 rounded-full ${color.class} border border-gray-300`}
              title={color.name}
            />
          ))}
          {product.colors.length > 3 && (
            <span className="text-xs text-gray-400">
              +{product.colors.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
