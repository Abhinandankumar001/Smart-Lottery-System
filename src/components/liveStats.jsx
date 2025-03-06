import React from "react";

const statistics = [
  { label: "Total Players", value: "145,897" },
  { label: "Total Prize Pool", value: "2,000,000 ETH" },
  { label: "Draws Completed", value: "4,521" },
  { label: "Winners Paid", value: "2,489" },
];

const winners = [
  { id: "1", address: "0x7d3...8f2e", time: "2 hours ago", amount: "125 ETH" },
  { id: "2", address: "0x3a1...9c4d", time: "5 hours ago", amount: "75 ETH" },
  { id: "3", address: "0x8b2...5f1a", time: "8 hours ago", amount: "50 ETH" },
];

const roundStats = {
  ticketsSold: "8,945",
  timeRemaining: "12:00:00",
  prizePool: "250 ETH",
};

const LiveStats = () => {
  return (
    <div className="py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-bold">Live Lottery Statistics</h2>
      <p className="text-gray-400 mt-2 mb-8">
        Real-time blockchain-verified statistics and performance metrics
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-gray-900 py-6 px-4 rounded-lg cursor-pointer">
            <h3 className="text-3xl font-bold text-red-500">{stat.value}</h3>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Latest Winners & Current Round Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Latest Winners */}
        <div className="bg-gray-900 p-6 rounded-lg cursor-pointer">
          <h3 className="text-xl font-bold mb-4">Latest Winners</h3>
          {winners.map((winner) => (
            <div key={winner.id} className="flex items-center justify-between bg-gray-800 p-3 mb-2 rounded-lg cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-red-600 text-white font-bold rounded-full">
                  {winner.id}
                </div>
                <div>
                  <p className="text-white">{winner.address}</p>
                  <p className="text-gray-400 text-sm">{winner.time}</p>
                </div>
              </div>
              <p className="text-red-500 font-bold">{winner.amount} Won</p>
            </div>
          ))}
        </div>

        {/* Current Round Statistics */}
        <div className="bg-gray-900 p-6 rounded-lg cursor-pointer">
          <h3 className="text-xl font-bold mb-4">Current Round Statistics</h3>
          <div className="text-left">
            <p className="text-gray-400">Tickets Sold</p>
            <div className="w-full bg-gray-700 h-2 rounded-full mb-2">
              <div className="h-2 bg-red-500 rounded-full w-[80%]"></div>
            </div>
            <p className="text-white mb-4">{roundStats.ticketsSold}</p>

            <p className="text-gray-400">Time Remaining</p>
            <p className="text-white text-xl mb-4">{roundStats.timeRemaining}</p>

            <p className="text-gray-400">Prize Pool</p>
            <div className="w-full bg-gray-700 h-2 rounded-full mb-2">
              <div className="h-2 bg-red-500 rounded-full w-[60%]"></div>
            </div>
            <p className="text-white">{roundStats.prizePool}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;
