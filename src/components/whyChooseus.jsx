import React from "react";
import { Shield, Lock, Zap, Clock, Camera, Users } from "lucide-react";

const features = [
  {
    icon: <Lock className="text-red-500 w-10 h-10" />,
    title: "Secure Smart Contracts",
    description:
      "Fully audited smart contracts ensure maximum security and fairness in every lottery draw.",
  },
  {
    icon: <Shield className="text-red-500 w-10 h-10" />,
    title: "Transparent System",
    description:
      "All transactions and lottery draws are recorded on the blockchain for complete transparency.",
  },
  {
    icon: <Zap className="text-red-500 w-10 h-10" />,
    title: "Instant Payouts",
    description:
      "Winners receive their prizes automatically through smart contracts with no delays.",
  },
  {
    icon: <Clock className="text-red-500 w-10 h-10" />,
    title: "24/7 Draws",
    description:
      "Participate in lottery draws that happen round the clock, powered by automation.",
  },
  {
    icon: <Camera className="text-red-500 w-10 h-10" />,
    title: "Low Transaction Fees",
    description:
      "Minimal gas fees and no hidden charges. Keep more of your winnings.",
  },
  {
    icon: <Users className="text-red-500 w-10 h-10" />,
    title: "Community Driven",
    description:
      "Join a growing community of players and earn additional rewards through referrals.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Why Choose Smart Lottery</h2>
        <p className="text-gray-400 mt-2">
          Experience the most secure and transparent lottery system powered by blockchain
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-red-900 p-3 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Start Playing Now Button */}
      <div className="text-center mt-12">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 cursor-pointer">
          Start Playing Now
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
