"use client";

import { useEffect, useState } from "react";

export default function Component() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-26T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const splitDigits = (number: number): [string, string] => {
    const padded = number.toString().padStart(2, "0");
    return [padded.charAt(0), padded.charAt(1)];
  };

  const TimeBlock = ({ digit }: { digit: string }) => (
    <div className="flex h-20 w-16 items-center justify-center rounded-xl bg-gradient-to-b from-white/90 to-white/60 shadow-lg backdrop-blur-sm">
      <span className="text-3xl font-bold text-[#1e3a8a]">{digit}</span>
    </div>
  );

  const renderTimeSection = (value: number, label: string) => {
    const [digit1, digit2] = splitDigits(value);
    return (
      <div className="flex flex-col items-center">
        <div className="flex gap-2">
          <TimeBlock digit={digit1} />
          <TimeBlock digit={digit2} />
        </div>
        <div className="mt-2 text-sm text-[#1e3a8a]/80">{label}</div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center gap-4 py-6 px-4">
      <div className="flex items-center gap-6">
        {renderTimeSection(timeLeft.days, "Days")}
        <span className="text-4xl font-bold text-[#1e3a8a]">:</span>
        {renderTimeSection(timeLeft.hours, "Hours")}
        <span className="text-4xl font-bold text-[#1e3a8a]">:</span>
        {renderTimeSection(timeLeft.minutes, "Minutes")}
        <span className="text-4xl font-bold text-[#1e3a8a]">:</span>
        {renderTimeSection(timeLeft.seconds, "Seconds")}
      </div>
    </div>
  );
}
