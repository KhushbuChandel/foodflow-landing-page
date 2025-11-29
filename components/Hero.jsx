export default function Hero() {
  return (
    <section id="home" className="px-10 pt-32 pb-20 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Delicious Food <br /> Delivered To <br /> Your Doorstep
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Order from your favorite restaurants with fast delivery.
          Hot, fresh meals delivered right to you.
        </p>

        <div className="flex gap-5">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-lg font-semibold">
            Order Now
          </button>
          <button className="bg-black text-white px-7 py-3 rounded-lg font-semibold">
            Download App
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img 
  src="/mobile-app-mockup-showing-food-delivery-interface.jpg"
  alt="Food App"
  className="rounded-xl shadow-lg w-[450px]"
/>

      </div>
    </section>
  );
}
