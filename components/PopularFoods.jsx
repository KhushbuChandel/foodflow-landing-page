import React from "react";

const foods = [
  {
    name: "Chicken Biryani",
    img: "/chicken-biryani.png",
    desc: "Hot, flavorful, and cooked to perfection."
  },
  {
    name: "Margherita Pizza",
    img: "/delicious-margherita-pizza.jpg",
    desc: "Fresh mozzarella and basil for a classic taste."
  },
  {
    name: "Caesar Salad",
    img: "/fresh-caesar-salad.png",
    desc: "Crisp, refreshing, and made with premium ingredients."
  },
  {
    name: "Sushi Platter",
    img: "/fresh-sushi-platter.jpg",
    desc: "A fresh assortment of perfectly rolled sushi."
  }
];

export default function PopularFoods() {
  return (
    <section id="popular" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Most Popular Foods
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Try the dishes that our customers love the most.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {foods.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
