"use client";
import React, { useEffect, useState } from "react";
import {
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  Tag,
  Loader2,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
} from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import { motion } from "framer-motion";

type Item = {
  id: number;
  image: string;
  itemKey: number;
  name: string;
  originalPrice: number | null;
  price: number;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
};

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart);
  // console.log(cart.items);

  const dispatch = useDispatch();

  const discountAmount = cart.items.reduce((sum: number, item: Item) => {
    if (item.originalPrice) {
      return sum + (item.originalPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);

  const deliveryFee = 15;
  const total = deliveryFee + cart.totalPrice;

  function handleRemoveItem(
    id: number,
    selectedColor: string,
    selectedSize: string
  ) {
    dispatch(
      removeCartItem({
        id,
        selectedColor,
        selectedSize,
      })
    );
  }

  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-black/80 z-50">
        <Loader2 className="w-12 h-12 animate-spin text-black dark:text-white" />
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="px-5 sm:px-10"
    >
      <div className="container">
        {/* Breadcrumb */}
        <div className="h-px w-full bg-black/10 mb-6" />
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span>Home</span>
          <span className="mx-2">
            <ChevronRight className="h-4 text-accent" />
          </span>
          <span className="text-black font-medium">Cart</span>
        </div>

        {/* Page Title */}
        <h1 className="sm:text-4xl text-3xl font-bold font-oswald mb-5 sm:mb-8">
          YOUR CART
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <p
            className={`lg:col-span-2 h-fit space-y-6 ${
              cart.totalItems > 0 ? "hidden" : ""
            }  `}
          >
            Your cart is empty
          </p>
          <div
            className={`lg:col-span-2 h-fit space-y-6 border border-gray-200 ${
              cart.totalItems > 0 ? "" : "hidden"
            }  rounded-lg`}
          >
            {cart.items.map((item: Item) => (
              <div
                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                className="flex gap-3.5 sm:gap-4 p-3.5 sm:p-4"
              >
                {/* Product Image */}
                <div className="relative size-[99px] sm:size-[124px] rounded-[8.66px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="object-cover"
                    fill
                    sizes="124px"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1 sm:mb-2">
                    <h3 className="font-bold text-base sm:text-lg">
                      {item.name}
                    </h3>
                    <button
                      onClick={() =>
                        handleRemoveItem(
                          item.id,
                          item.selectedColor,
                          item.selectedSize
                        )
                      }
                      className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="sm:text-sm text-xs text-black mb-.5">
                    <p>
                      Color:{" "}
                      <span className="text-accent">{item.selectedColor}</span>
                    </p>
                    <p>
                      Size:{" "}
                      <span className="text-accent">{item.selectedSize}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">${item.price}</span>

                    {/* Quantity Controls */}
                    <div className="flex items-center bg-gray-100 rounded-full">
                      <button
                        onClick={() =>
                          dispatch(
                            decreaseQuantity({
                              id: item.id,
                              selectedColor: item.selectedColor,
                              selectedSize: item.selectedSize,
                            })
                          )
                        }
                        className="p-1 sm:p-2 hover:bg-gray-200 rounded-l-full transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 min-w-[60px] text-center max-sm:text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(
                            increaseQuantity({
                              id: item.id,
                              selectedColor: item.selectedColor,
                              selectedSize: item.selectedSize,
                            })
                          )
                        }
                        className="p-1 sm:p-2 hover:bg-gray-200 rounded-r-full transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${cart.totalPrice}</span>
                </div>

                <div className="flex justify-between text-red-600">
                  <span>Discount</span>
                  <span>
                    -$
                    {discountAmount}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">${deliveryFee}</span>
                </div>

                <hr className="border-gray-200" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4">
                    <Tag className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Add promo code"
                      className="bg-transparent flex-1 py-3 outline-none text-sm"
                    />
                  </div>
                  <Button className="bg-black h-full hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium">
                    Apply
                  </Button>
                </div>
              </div>

              {/* Checkout Button */}
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-full font-medium flex items-center justify-center gap-2">
                Go to Checkout
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CartPage;
