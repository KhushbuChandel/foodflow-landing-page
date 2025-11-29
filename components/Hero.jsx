import React from "react";

export default function Hero() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Delicious Food Delivered Fast &amp; Fresh
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Your favorite meals delivered hot and fresh right to your doorstep. Fast delivery, great taste, and top-notch service &mdash; every time!
          </p>

          <a
            href="#popular"
            className="px-8 py-4 bg-orange-600 text-white rounded-xl text-lg font-semibold hover:bg-orange-700 transition"
          >
            Order Now
          </a>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="/mobile-app-mockup-showing-food-delivery-interface.jpg"
            alt="Food Delivery App"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
