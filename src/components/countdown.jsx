import React from "react";

const LotteryCountdown = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold">
            Revolutionary <span className="text-red-500">Blockchain</span> Lottery System
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Join the future of lottery gaming with our transparent, secure, and decentralized platform powered by smart contracts.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className="bg-red-600 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-red-700">
              Play Now
            </button>
            <button className="border border-red-500 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-red-700 hover:text-white">
              View Live Draws
            </button>
          </div>
        </div>

        {/* Right Section - Countdown Timer */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
            <h3 className="text-2xl font-semibold">Next Draw In:</h3>
            <div className="flex justify-center gap-4 mt-4">
              <div className="text-center">
                <span className="text-red-500 text-3xl font-bold">09</span>
                <p className="text-gray-400">Hours</p>
              </div>
              <div className="text-center">
                <span className="text-red-500 text-3xl font-bold">13</span>
                <p className="text-gray-400">Minutes</p>
              </div>
              <div className="text-center">
                <span className="text-red-500 text-3xl font-bold">22</span>
                <p className="text-gray-400">Seconds</p>
              </div>
              <div className="text-center">
                <span className="text-red-500 text-3xl font-bold">63</span>
                <p className="text-gray-400">MS</p>
              </div>
            </div>
          </div>

          {/* Floating Red Circles for Design */}
          <div className="absolute top-0 left-0 bg-red-600 w-16 h-16 rounded-full opacity-40"></div>
          <div className="absolute bottom-0 right-0 bg-red-600 w-16 h-16 rounded-full opacity-40"></div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-12 flex flex-col md:flex-row gap-6">
        <div className="bg-gray-800 p-6 rounded-lg text-center w-52">
          <h3 className="text-2xl font-bold">100%</h3>
          <p className="text-gray-400">Transparent</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center w-52">
          <h3 className="text-2xl font-bold">$2M+</h3>
          <p className="text-gray-400">Prize Pool</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center w-52">
          <h3 className="text-2xl font-bold">24/7</h3>
          <p className="text-gray-400">Live Draws</p>
        </div>
      </div>
    </div>
  );
};

export default LotteryCountdown;
