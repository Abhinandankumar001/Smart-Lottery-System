import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";

const SpinTheWheel = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [canSpin, setCanSpin] = useState(true);
  const [message, setMessage] = useState("");

  const segments = [
    { option: "🎉 Win 0.1 ETH!", color: "#ffcc00" },
    { option: "😢 Better Luck!", color: "#3d9970" },
    { option: "🎁 Free NFT!", color: "#ff851b" },
    { option: "😢 Better Luck!", color: "#ffdc00" },
    { option: "💰 500 USDT!", color: "#2ecc40" },
    { option: "😢 Better Luck!", color: "#85144b" }
  ];

  useEffect(() => {
    const lastSpinTime = localStorage.getItem("lastSpinTime");
    const spinCount = parseInt(localStorage.getItem("spinCount") || "0", 10);

    if (lastSpinTime) {
      const timeElapsed = Date.now() - parseInt(lastSpinTime, 10);
      if (timeElapsed >= 3600000) {
        localStorage.setItem("spinCount", "0");
        setCanSpin(true);
      } else if (spinCount < 3) {
        setCanSpin(true);
      } else {
        setCanSpin(false);
      }
    } else {
      localStorage.setItem("spinCount", "0");
      setCanSpin(true);
    }
  }, []);

  useEffect(() => {
    if (!mustSpin) {
      const spinCount = parseInt(localStorage.getItem("spinCount") || "0", 10);
      localStorage.setItem("spinCount", (spinCount + 1).toString());
    }
  }, [mustSpin]);

  const handleSpin = () => {
    if (!canSpin) return;

    const newPrizeNumber = Math.floor(Math.random() * segments.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleSpinStop = () => {
    setMustSpin(false);
    setMessage(`🎯 You got: ${segments[prizeNumber].option}`);
    setCanSpin(false);
    localStorage.setItem("lastSpinTime", Date.now().toString());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">🎡 Spin the Wheel!</h2>

      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={segments}
        backgroundColors={["#FFC107", "#FF5722", "#4CAF50", "#03A9F4", "#E91E63", "#9C27B0"]}
        textColors={["#FFFFFF"]}
        onStopSpinning={handleSpinStop}
      />

      <button
        onClick={handleSpin}
        disabled={!canSpin}
        className={`mt-6 px-6 py-3 rounded-lg text-lg font-bold ${
          canSpin ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 cursor-not-allowed"
        }`}
      >
        {canSpin ? "Spin Now!" : "Come Back Later"}
      </button>

      {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
    </div>
  );
};

export default SpinTheWheel;
