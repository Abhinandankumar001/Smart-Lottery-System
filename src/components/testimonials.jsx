import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Recent Winner",
    text: "I was skeptical at first, but the transparency of the blockchain system convinced me. Won 50 ETH on my third try!",
    initials: "JD",
  },
  {
    name: "Jane Smith",
    role: "Weekly Player",
    text: "The instant payout system is amazing! No waiting time, no hassle. Best lottery platform I’ve ever used.",
    initials: "JS",
  },
  {
    name: "Mike Ross",
    role: "Top Referrer",
    text: "The referral program is fantastic! I've earned extra tickets just by sharing with friends. Everyone wins!",
    initials: "MR",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-bold">What Our Winners Say</h2>
      <p className="text-gray-400 mt-2 mb-8">
        Real stories from our lucky winners
      </p>

      <div className="max-w-4xl mx-auto space-y-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg relative text-left cursor-pointer"
          >
            {/* Quotation Marks */}
            <span className="absolute top-4 right-4 text-red-500 text-2xl">
              ❝
            </span>

            {/* Rating */}
            <div className="flex space-x-1 text-yellow-400 mb-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-300 mb-4">{testimonial.text}</p>

            {/* User Info */}
            <div className="flex items-center space-x-4">
              <div className="bg-red-500 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
                {testimonial.initials}
              </div>
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>

            {/* Closing Quotation Marks */}
            <span className="absolute bottom-4 right-4 text-red-500 text-2xl">
              ❞
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
