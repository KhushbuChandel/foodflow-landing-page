import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    img: "/professional-woman-smiling.png",
    review:
      "Absolutely love FoodFlow! The delivery is always on time and the food arrives hot.",
    role: "Verified Customer"
  },
  {
    name: "Michael Chen",
    img: "/professional-man-smiling.png",
    review:
      "Best food delivery service I have used. Great variety and simple ordering experience.",
    role: "Verified Customer"
  },
  {
    name: "Emily Rodriguez",
    img: "/professional-woman-portrait.png",
    review:
      "The tracking feature is amazing! I always know exactly when my food will arrive.",
    role: "Verified Customer"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Thousands of happy customers enjoy delicious meals delivered fast.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex gap-1 text-orange-500 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 mb-6">"{item.review}"</p>

              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
