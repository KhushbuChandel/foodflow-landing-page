export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <h1 className="text-xl font-bold">FoodFlow</h1>
          </div>

          <p className="text-white/70">
            Delivering happiness one meal at a time. Order from the best
            restaurants in your city.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/70">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#popular">Popular</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-white/70">
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-white/70">
            <li>Email: support@foodflow.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Food Street, City, State 12345</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/60 text-sm">
        © 2025 FoodFlow. All rights reserved.
      </div>
    </footer>
  );
}
