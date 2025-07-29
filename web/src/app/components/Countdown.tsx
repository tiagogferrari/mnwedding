"use client";

import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string; // ISO 8601
}

export default function Countdown({ targetDate }: CountdownProps) {
  const calculate = () => {
    const diff = new Date(targetDate).getTime() - new Date().getTime();
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center space-x-4 text-xl font-mono">
      <span>{time.days}d</span>
      <span>{time.hours}h</span>
      <span>{time.minutes}m</span>
      <span>{time.seconds}s</span>
    </div>
  );
}
