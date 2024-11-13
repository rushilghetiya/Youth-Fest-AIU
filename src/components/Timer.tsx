import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center space-x-2 text-xl font-semibold text-white">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-800">
        <span>{String(timeLeft.days).padStart(2, "0")}</span>
      </div>
      <span className="text-xl">:</span>
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-800">
        <span>{String(timeLeft.hours).padStart(2, "0")}</span>
      </div>
      <span className="text-xl">:</span>
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-800">
        <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
      </div>
      <span className="text-xl">:</span>
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-800">
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
