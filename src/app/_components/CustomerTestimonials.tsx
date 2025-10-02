"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const CustomerTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "I'm blown away by the quality and style of the clothes I received from ShopCo. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      verified: true,
    },
    {
      id: 2,
      name: "Alex K.",
      rating: 5,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered ShopCo. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      verified: true,
    },
    {
      id: 3,
      name: "James L.",
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon ShopCo. The selection of clothes is not only diverse but also on point with the latest trends.",
      verified: true,
    },
    {
      id: 4,
      name: "Maria S.",
      rating: 5,
      text: "The customer service at ShopCo is exceptional. They helped me find the perfect outfit for my special occasion, and I couldn't be happier with my purchase.",
      verified: true,
    },
    {
      id: 5,
      name: "David R.",
      rating: 5,
      text: "Quality, style, and affordability - ShopCo delivers on all fronts. I've become a loyal customer and always recommend them to friends and family.",
      verified: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = testimonials.length - 1;
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = testimonials.length - 1;
      return prev === 0 ? maxSlide : prev - 1;
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="px-5 sm:px-10 mt-[40px] translate-y-[40px]">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-oswald md:text-4xl font-bold text-black">
            OUR HAPPY CUSTOMERS
          </h2>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className="relative overflow-hidden">
          {/* Mobile: Show 1 testimonial */}
          <div className="md:hidden">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              {/* Stars Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(
                  testimonials[currentSlide % testimonials.length].rating
                )}
              </div>

              {/* Customer Name with Verification */}
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-semibold text-gray-900">
                  {testimonials[currentSlide % testimonials.length].name}
                </h3>
                {testimonials[currentSlide % testimonials.length].verified && (
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {testimonials[currentSlide % testimonials.length].text}
              </p>
            </div>
          </div>

          {/* Tablet: Show 2 testimonials */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {[0, 1].map((offset) => {
              const testimonial =
                testimonials[(currentSlide + offset) % testimonials.length];
              return (
                <div
                  key={`tablet-${testimonial.id}-${offset}`}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Stars Rating */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Customer Name with Verification */}
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    {testimonial.verified && (
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {testimonial.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Desktop: Show 3 testimonials */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const testimonial =
                testimonials[(currentSlide + offset) % testimonials.length];
              return (
                <div
                  key={`desktop-${testimonial.id}-${offset}`}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Stars Rating */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Customer Name with Verification */}
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    {testimonial.verified && (
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {testimonial.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
