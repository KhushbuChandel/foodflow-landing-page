export default function PopularFoods() {
  const foods = [
    {
      name: "Margherita Pizza",
      rating: "4.8",
      img: "/delicious-margherita-pizza.jpg",
    },
    {
      name: "Classic Burger",
      rating: "4.9",
      img: "/gourmet-cheeseburger.jpg",
    },
    {
      name: "Chicken Biryani",
      rating: "4.7",
      img: "/chicken-biryani.png",
    },
    {
      name: "Caesar Salad",
      rating: "4.6",
      img: "/fresh-caesar-salad.png",
    },
    {
      name: "Sushi Platter",
      rating: "4.9",
      img: "/fresh-sushi-platter.jpg",
    },
    {
      name: "Pad Thai",
      rating: "4.8",
      img: "/pad-thai-noodles.png",
    },
  ];

  return (
    <section id="popular" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Most Popular Foods</h2>
        <p className="text-gray-500 mt-2">
          Customer favorites from top-rated restaurants
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {foods.map((food, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <img
              src={food.img}
              alt={food.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{food.name}</h3>
            <p className="text-orange-500 mt-1">⭐ {food.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
