import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    img: "/professional-woman-smiling.png",
    quote:
      "Absolutely love FoodFlow! The delivery is always on time and the food arrives hot. My go-to app for lunch orders!",
  },
  {
    name: "Michael Chen",
    img: "/professional-man-smiling.png",
    quote:
      "Best food delivery service I have used. Great variety of restaurants and the app is super easy to navigate. Highly recommend!",
  },
  {
    name: "Emily Rodriguez",
    img: "/professional-woman-portrait.png",
    quote:
      "The tracking feature is amazing! I always know exactly when my food will arrive. Plus, the customer service is excellent.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Real feedback from people who love FoodFlow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition"
            >
              <p className="text-gray-700 italic mb-6">&ldquo;{item.quote}&rdquo;</p>

              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover shadow-md"
                />
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-500 text-sm">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
