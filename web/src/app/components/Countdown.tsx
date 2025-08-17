"use client";

import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string;
}

const timeUnits = {
  days: 'Dias',
  hours: 'Horas',
  minutes: 'Minutos',
  seconds: 'Segundos',
};

export default function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 my-6">
      {(Object.keys(timeLeft) as Array<keyof typeof timeLeft>).map((unit) => (
        <div key={unit} className="flex flex-col items-center justify-center bg-white/50 p-4 rounded-lg min-w-[80px]">
          <span className="text-4xl md:text-5xl font-bold font-bree-serif text-gray-700">
            {timeLeft[unit]}
          </span>
          <span className="text-sm font-montserrat text-gray-600">{timeUnits[unit]}</span>
        </div>
      ))}
    </div>
  );
}