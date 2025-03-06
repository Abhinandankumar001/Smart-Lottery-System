import React from "react";
import { ShieldCheck, DollarSign, Users } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck size={36} className="text-red-500" />,
    title: "Guaranteed Fairness",
    points: [
      "Random number generation via blockchain",
      "Tamper-proof system",
      "Verifiable on blockchain",
    ],
  },
  {
    icon: <DollarSign size={36} className="text-red-500" />,
    title: "Instant Payouts",
    points: [
      "Automatic smart contract transfers",
      "No manual processing",
      "24/7 withdrawal availability",
    ],
  },
  {
    icon: <Users size={36} className="text-red-500" />,
    title: "Community Rewards",
    points: ["Referral bonuses", "Loyalty points", "Special event prizes"],
  },
];

const Benefits = () => {
  return (
    <div className="py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-bold">Benefits of Smart Lottery</h2>
      <p className="text-gray-400 mt-2 mb-8">
        Experience the advantages of blockchain-powered lottery system
      </p>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <ul className="text-gray-400 text-left space-y-2">
              {benefit.points.map((point, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-red-500 mr-2">✔</span> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-900 p-6 rounded-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-2">Ready to Start Winning?</h3>
        <p className="text-gray-400 mb-4">
          Join thousands of players already winning big with Smart Lottery. Start your journey today!
        </p>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-600 cursor-pointer">
          Play Now
        </button>

        {/* Security & Support Info */}
        <div className="flex justify-between text-gray-400 mt-6 text-lg font-bold">
          <span className="text-red-500">100% <span className="text-gray-400">Secure</span></span>
          <span className="text-red-500">24/7 <span className="text-gray-400">Support</span></span>
          <span className="text-red-500">0% <span className="text-gray-400">Fees</span></span>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
