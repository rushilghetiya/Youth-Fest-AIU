import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // Target date as an ISO string
  size?: { width: string; height: string }; // Custom size in px (e.g., { width: "60px", height: "80px" })
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  size = { width: "64px", height: "80px" }, // Default size
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const splitDigits = (number: number): [string, string] => {
    const padded = number.toString().padStart(2, "0");
    return [padded.charAt(0), padded.charAt(1)];
  };

  const renderDigit = (digit: string) => (
    <div
      style={{
        width: size.width,
        height: size.height,
        fontSize: `calc(${size.width} / 1.5)`, // Scale font size relative to width
      }}
      className="flex items-center justify-center rounded-lg bg-gradient-to-t from-blue-200 to-white"
    >
      <span className="font-bold text-blue-800">{digit}</span>
    </div>
  );

  const renderTimeSection = (value: number) => {
    const [digit1, digit2] = splitDigits(value);
    return (
      <div className="flex gap-2">
        {renderDigit(digit1)}
        {renderDigit(digit2)}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center gap-4">
      {renderTimeSection(timeLeft.days)}
      <span
        style={{ fontSize: `calc(${size.width} / 1.5)` }}
        className="font-bold text-black"
      >
        :
      </span>
      {renderTimeSection(timeLeft.hours)}
      <span
        style={{ fontSize: `calc(${size.width} / 1.5)` }}
        className="font-bold text-black"
      >
        :
      </span>
      {renderTimeSection(timeLeft.minutes)}
      <span
        style={{ fontSize: `calc(${size.width} / 1.5)` }}
        className="font-bold text-black"
      >
        :
      </span>
      {renderTimeSection(timeLeft.seconds)}
    </div>
  );
};

export default CountdownTimer;
