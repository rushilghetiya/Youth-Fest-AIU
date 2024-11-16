// "use client";

// import { useEffect, useState } from "react";

// export default function Component() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const targetDate = new Date("2024-12-26T00:00:00");

//     const calculateTimeLeft = () => {
//       const now = new Date();
//       const difference = targetDate.getTime() - now.getTime();

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / (1000 * 60)) % 60),
//           seconds: Math.floor((difference / 1000) % 60),
//         });
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const splitDigits = (number: number): [string, string] => {
//     const padded = number.toString().padStart(2, "0");
//     return [padded.charAt(0), padded.charAt(1)];
//   };

//   const TimeBlock = ({ digit }: { digit: string }) => (
//     <div className="flex h-20 w-16 items-center justify-center rounded-xl bg-gradient-to-b from-white/90 to-white/60 shadow-lg backdrop-blur-sm">
//       <span className="text-3xl font-bold text-[#1e3a8a]">{digit}</span>
//     </div>
//   );

//   const renderTimeSection = (value: number, label: string) => {
//     const [digit1, digit2] = splitDigits(value);
//     return (
//       <div className="flex flex-col items-center">
//         <div className="flex gap-2">
//           <TimeBlock digit={digit1} />
//           <TimeBlock digit={digit2} />
//         </div>
//         <div className="mt-2 text-sm text-[#1e3a8a]/80">{label}</div>
//       </div>
//     );
//   };

//   return (
//     <div className="flex items-center justify-center gap-4">
//       <div className="flex items-center gap-6">
//         {renderTimeSection(timeLeft.days, "Days")}
//         <span className="text-4xl font-bold text-[#1e3a8a]">:</span>
//         {renderTimeSection(timeLeft.hours, "Hours")}
//         <span className="text-4xl font-bold text-[#1e3a8a]">:</span>
//         {renderTimeSection(timeLeft.minutes, "Minutes")}
//         <span className="text-4xl font-bold text-[#1e3a8a]">:</span>
//         {renderTimeSection(timeLeft.seconds, "Seconds")}
//       </div>
//     </div>
//   );
// }

/////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // Target date as an ISO string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
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
    <div className="flex h-20 w-16 items-center justify-center rounded-lg bg-gradient-to-t from-blue-200 to-white">
      <span className="text-3xl font-bold text-blue-800 sm:text-4xl md:text-5xl">
        {digit}
      </span>
    </div>
  );

  const renderTimeSection = (value: number) => {
    const [digit1, digit2] = splitDigits(value);
    return (
      <div className="flex gap-2 sm:gap-1 md:gap-2">
        {renderDigit(digit1)}
        {renderDigit(digit2)}
      </div>
    );
  };

  return (
    <div className="flex scale-100 flex-col items-center justify-center gap-4 sm:flex-row md:scale-90 lg:scale-100">
      {renderTimeSection(timeLeft.days)}
      <span className="text-4xl font-bold text-black">:</span>
      {renderTimeSection(timeLeft.hours)}
      <span className="text-4xl font-bold text-black">:</span>
      {renderTimeSection(timeLeft.minutes)}
      <span className="text-4xl font-bold text-black">:</span>
      {renderTimeSection(timeLeft.seconds)}
    </div>
  );
};

export default CountdownTimer;
