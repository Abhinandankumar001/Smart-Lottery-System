import React from "react";
import { FaFacebook, FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* SmartLotto Branding */}
        <div>
          <h2 className="text-2xl font-bold">SmartLotto</h2>
          <p className="text-gray-400 text-sm mt-2">
            Revolutionizing lottery systems with blockchain technology. Fair, transparent, and secure.
          </p>
          <div className="flex space-x-3 mt-4 text-gray-400">
            <FaFacebook className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaTelegram className="cursor-pointer hover:text-white" />
            <FaDiscord className="cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Games
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Responsible Gaming
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="text-gray-400 text-sm mt-2">Stay updated with the latest lottery news and results.</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-800 text-white rounded-l-md focus:outline-none"
            />
            <button className="bg-red-500 px-4 py-2 rounded-r-md text-white font-semibold hover:bg-red-600 transition cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
