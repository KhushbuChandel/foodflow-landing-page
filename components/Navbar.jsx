"use client";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold">
        <div className="bg-orange-500 text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl font-semibold">
          F
        </div>
        FoodFlow
      </div>

      {/* Menu */}
      <div className="hidden md:flex gap-8 text-lg">
        <a href="#home" className="hover:text-orange-500">Home</a>
        <a href="#features" className="hover:text-orange-500">Features</a>
        <a href="#popular" className="hover:text-orange-500">Popular</a>
        <a href="#contact" className="hover:text-orange-500">Contact</a>
      </div>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
        Order Now
      </button>
    </nav>
  );
}
