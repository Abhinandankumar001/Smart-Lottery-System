import React from "react";

const steps = [
  {
    number: "1",
    title: "Connect Wallet",
    description:
      "Connect your cryptocurrency wallet to participate in the lottery. We support multiple popular wallets.",
  },
  {
    number: "2",
    title: "Choose Numbers",
    description:
      "Select your lucky numbers or use our quick pick feature to automatically generate them.",
  },
  {
    number: "3",
    title: "Purchase Tickets",
    description:
      "Buy tickets using cryptocurrency. Smart contracts ensure secure and transparent transactions.",
  },
  {
    number: "4",
    title: "Wait for Draw",
    description:
      "Draws happen automatically at scheduled times. Watch live as winning numbers are selected.",
  },
  {
    number: "5",
    title: "Collect Winnings",
    description:
      "Winners receive automatic payouts directly to their connected wallet through smart contracts.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-bold">How Smart Lottery Works</h2>
      <p className="text-gray-400 mt-2 mb-12">
        Simple, transparent, and secure lottery system powered by blockchain technology
      </p>

      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-6 mb-8">
            {/* Line */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center text-lg font-bold bg-red-600 text-white rounded-full">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="w-1 h-16 bg-red-600"></div>
              )}
            </div>

            {/* Step Content */}
            <div className="text-left">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Try Your Luck Now Button */}
      <div className="mt-8">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 cursor-pointer">
          Try Your Luck Now
        </button>
        <p className="text-gray-400 mt-2 text-sm">
          No registration required. Start playing with cryptocurrency instantly.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
