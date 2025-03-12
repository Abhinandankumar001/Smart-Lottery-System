import React, { useState, useEffect } from "react";

const LotteryCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: "09",
    minutes: "35",
    seconds: "07",
    MS: "28",
  });

  useEffect(() => {
    const endTime = new Date().getTime() + 3600000; // 1 hour from now

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00", MS: "00" });
        return;
      }

      setTimeLeft({
        hours: String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((distance / 1000) % 60)).padStart(2, "0"),
        MS: String(Math.floor((distance % 1000) / 10)).padStart(2, "0"),
      });
    };

    const interval = setInterval(updateCountdown, 10);
    return () => clearInterval(interval);
  }, []);

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
              {["hours", "minutes", "seconds", "MS"].map((unit, index) => (
                <div key={index} className="bg-black p-4 rounded-lg shadow-md w-20">
                  <span className="text-red-500 text-3xl font-bold">{timeLeft[unit]}</span>
                  <p className="text-gray-400">{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
                </div>
              ))}
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
