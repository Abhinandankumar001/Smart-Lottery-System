import React, { useState } from "react";
import { FaEnvelope, FaClock, FaBolt, FaFacebook, FaTwitter, FaDiscord, FaTelegram } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!"); // Replace with actual submission logic
  };

  return (
    <div className="py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-bold">Get in Touch</h2>
      <p className="text-gray-400 mt-2 mb-8">We’re here to help with any questions about Smart Lottery</p>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="md:col-span-2 bg-gray-900 p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none"
              required
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none"
              required
            >
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Partnership">Partnership</option>
            </select>
            <textarea
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-500 py-3 rounded-md text-white font-semibold hover:bg-red-600 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Support & Community Section */}
        <div className="space-y-6">
          {/* Quick Support */}
          <div className="bg-gray-900 p-6 rounded-lg text-left">
            <h3 className="text-xl font-bold">Quick Support</h3>
            <div className="mt-4 space-y-2">
              <p className="flex items-center text-gray-300">
                <FaEnvelope className="mr-2 text-red-500" /> support@smartlottery.com
              </p>
              <p className="flex items-center text-gray-300">
                <FaClock className="mr-2 text-red-500" /> 24/7 Available
              </p>
              <p className="flex items-center text-gray-300">
                <FaBolt className="mr-2 text-red-500" /> Response Time: Under 1 Hour
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-900 p-6 rounded-lg text-left">
            <h3 className="text-xl font-bold">Join Our Community</h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center p-3 bg-gray-800 text-white rounded-md hover:bg-blue-500 hover:text-black cursor-pointer">
                <FaFacebook className="mr-2" /> Facebook
              </button>
              <button className="flex items-center justify-center p-3 bg-gray-800 text-white rounded-md hover:bg-blue-500 hover:text-black cursor-pointer">
                <FaTwitter className="mr-2" /> Twitter
              </button>
              <button className="flex items-center justify-center p-3 bg-gray-800 text-white rounded-md hover:bg-blue-500 hover:text-black cursor-pointer">
                <FaDiscord className="mr-2" /> Discord
              </button>
              <button className="flex items-center justify-center p-3 bg-gray-800 text-white rounded-md hover:bg-blue-500 hover:text-black cursor-pointer">
                <FaTelegram className="mr-2" /> Telegram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
