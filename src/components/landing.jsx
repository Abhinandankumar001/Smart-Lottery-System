import React from "react";

const LotteryLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold">SmartLotto</h1>
         
          <div className="flex items-center space-x-4">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#aboutus" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#faq" className="hover:text-gray-400">FAQ</a></li>
          </ul>
            <button className="bg-red-600 px-4 py-2 text-white font-semibold rounded-lg hover:bg-red-700 cursor-pointer">
          Play Now
            </button>
          </div>
        </nav>

        {/* Main Content */}
      <div className="text-center mt-20">
        <h2 className="text-4xl md:text-6xl font-bold">
          Decentralized Lottery System
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Experience the future of lottery with blockchain technology.
          Transparent, secure, and fair gaming for everyone.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-red-600 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-red-700 cursor-pointer">
            Start Playing
          </button>
          <button className="bg-gray-800 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-gray-700 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LotteryLanding;
