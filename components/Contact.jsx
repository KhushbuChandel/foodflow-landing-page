import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions, feedback, or need help with your order? We&rsquo;re here to help you!
        </p>

        {/* Main Container Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-10 rounded-2xl shadow-xl">

          {/* LEFT SIDE — CONTACT INFO */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 text-gray-700">

              <p className="flex items-start gap-3">
                <span className="text-red-500 text-xl">📍</span>
                <span>
                  <strong>Address:</strong> FoodFlow Headquarters, Mumbai, India
                </span>
              </p>

              <p className="flex items-start gap-3">
                <span className="text-green-500 text-xl">📞</span>
                <span>
                  <strong>Phone:</strong> +91 98765 43210
                </span>
              </p>

              <p className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">✉️</span>
                <span>
                  <strong>Email:</strong> support@foodflow.app
                </span>
              </p>

              <p className="pt-4">
                Our team is available <strong>24/7</strong> to assist you!
              </p>

            </div>
          </div>

          {/* RIGHT SIDE — CONTACT FORM */}
          <div>
            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-orange-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
