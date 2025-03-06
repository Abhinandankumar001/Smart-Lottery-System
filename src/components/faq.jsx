import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        question: "How does the blockchain lottery work?",
        answer:
            "The blockchain lottery ensures transparency and fairness using smart contracts. The draws are tamper-proof and verifiable on-chain.",
    },
    {
        question: "How do I purchase tickets?",
        answer:
            "You can purchase tickets using cryptocurrency directly from our platform. Simply connect your wallet and buy tickets securely.",
    },
    {
        question: "When do draws take place?",
        answer:
            "Draws occur daily at 8 PM UTC. Winners are automatically selected and payouts are processed instantly.",
    },
    {
        question: "How do I claim my winnings?",
        answer:
            "Winnings are automatically transferred to your linked wallet. No manual claim is required.",
    },
    {
        question: "Is the system secure?",
        answer:
            "Yes! Our lottery is powered by blockchain technology, making it secure, transparent, and tamper-proof.",
    },
];

const FAQ = () => {
        const [openIndex, setOpenIndex] = useState(null);

        const toggleFAQ = (index) => {
                setOpenIndex(openIndex === index ? null : index);
        };

        return (
                <div className="py-16 bg-black text-white text-center">
                        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
                        <p className="text-gray-400 mt-2 mb-8">
                                Everything you need to know about Smart Lottery
                        </p>

                        <div className="max-w-3xl mx-auto space-y-4">
                                {faqs.map((faq, index) => (
                                        <div
                                                key={index}
                                                className="bg-gray-900 rounded-lg overflow-hidden"
                                        >
                                                <button
                                                        className="flex justify-between items-center w-full p-4 text-left text-lg font-medium hover:bg-gray-800 transition cursor-pointer"
                                                        onClick={() => toggleFAQ(index)}
                                                >
                                                        {faq.question}
                                                        <FaChevronDown
                                                                className={`transition-transform ${
                                                                        openIndex === index ? "rotate-180" : "rotate-0"
                                                                }`}
                                                        />
                                                </button>
                                                {openIndex === index && (
                                                        <div className="p-4 text-gray-300">{faq.answer}</div>
                                                )}
                                        </div>
                                ))}
                        </div>

                        <div className="mt-8">
                                <p className="text-gray-400">Still have questions?</p>
                                <button className="mt-2 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition cursor-pointer">
                                        Contact Support
                                </button>
                        </div>
                </div>
        );
};

export default FAQ;
