import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Verified Customer",
      text: "Absolutely love FoodFlow! The delivery is always on time and the food arrives hot. My go-to app for lunch orders!",
      image: "/professional-woman-smiling.png",
    },
    {
      name: "Michael Chen",
      role: "Verified Customer",
      text: "Best food delivery service I've used. Great variety of restaurants and the app is super easy to navigate. Highly recommend!",
      image: "/professional-man-smiling.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Verified Customer",
      text: "The tracking feature is amazing! I always know exactly when my food will arrive. Plus, the customer service is excellent.",
      image: "/professional-woman-portrait.png",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">What Our Customers Say</h2>
        <p className="text-gray-600 mt-2">
          Join thousands of happy customers enjoying delicious food delivered fast
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-8 border border-gray-100"
          >
            {/* ⭐⭐⭐⭐⭐ Stars */}
            <div className="flex text-orange-500 text-xl mb-4">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 leading-relaxed">{item.text}</p>

            {/* Profile Section */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover shadow"
              />
              <div>
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
