export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Delivery",
      desc: "Lightning-fast delivery to your doorstep. Track your order in real-time."
    },
    {
      icon: "✔️",
      title: "Fresh Food Guaranteed",
      desc: "All meals prepared fresh and delivered hot. Quality you can taste."
    },
    {
      icon: "📋",
      title: "Easy Order & Tracking",
      desc: "Simple ordering process with live tracking from kitchen to your door."
    },
    {
      icon: "🔒",
      title: "Secured Payments",
      desc: "Multiple payment options with bank-level security. Your data is safe."
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FoodFlow?</h2>
        <p className="text-lg text-gray-500 mb-12">
          We make food delivery simple, fast, and delicious
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          {features.map((item, i) => (
            <div key={i} className="flex flex-col px-4">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
