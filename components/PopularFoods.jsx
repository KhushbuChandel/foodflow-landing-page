import Image from "next/image";

export default function PopularFoods() {
  const foods = [
    {
      name: "Margherita Pizza",
      img: "/delicious-margherita-pizza.jpg",
      rating: 4.8,
      reviews: 120,
      price: "$12.99",
    },
    {
      name: "Classic Burger",
      img: "/gourmet-cheeseburger.jpg",
      rating: 4.9,
      reviews: 120,
      price: "$9.99",
    },
    {
      name: "Chicken Biryani",
      img: "/chicken-biryani.png",
      rating: 4.7,
      reviews: 120,
      price: "$11.99",
    },
    {
      name: "Sushi Platter",
      img: "/fresh-sushi-platter.jpg",
      rating: 4.9,
      reviews: 120,
      price: "$18.99",
    },
    {
      name: "Pad Thai Noodles",
      img: "/pad-thai-noodles.png",
      rating: 4.6,
      reviews: 120,
      price: "$10.99",
    },
    {
      name: "Caesar Salad",
      img: "/fresh-caesar-salad.png",
      rating: 4.5,
      reviews: 120,
      price: "$8.99",
    },
  ];

  return (
    <section id="popular" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-5xl font-bold text-center mb-4">
          Most Popular Foods
        </h2>

        <p className="text-center text-gray-600 text-xl mb-12">
          Customer favorites from top-rated restaurants
        </p>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {foods.map((food, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-5"
            >
              {/* IMAGE */}
              <div className="w-full h-64 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={food.img}
                  alt={food.name}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* NAME */}
              <h3 className="text-2xl font-bold mb-1">{food.name}</h3>

              {/* RATING */}
              <p className="flex items-center gap-2 text-orange-500 font-semibold mb-2">
                ⭐ {food.rating}
                <span className="text-gray-500 text-sm">
                  ({food.reviews}+ reviews)
                </span>
              </p>

              {/* PRICE */}
              <p className="text-2xl font-bold mb-4">{food.price}</p>

              {/* BUTTON */}
              <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
