import React from "react";

export default function Features() {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-orange-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Delivery",
      desc: "Lightning-fast delivery to your doorstep. Track your order in real-time."
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-orange-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 12l2 2 4-4" />
          <path d="M12 20a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      ),
      title: "Fresh Food Guaranteed",
      desc: "All meals prepared fresh and delivered hot. Quality you can taste."
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-orange-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <path d="M9 5a2 2 0 002 2h2a2 2 0 002-2" />
        </svg>
      ),
      title: "Easy Order & Tracking",
      desc: "Simple ordering process with live tracking from kitchen to your door."
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-orange-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
          <path d="M16 11V7a4 4 0 00-8 0v4" />
        </svg>
      ),
      title: "Secured Payments",
      desc: "Multiple payment options with bank-level security. Your data is safe."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">Why Choose FoodFlow?</h2>
        <p className="text-gray-600 mb-12">
          We make food delivery simple, fast, and delicious.
        </p>

        <div className="grid md:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center px-4">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
