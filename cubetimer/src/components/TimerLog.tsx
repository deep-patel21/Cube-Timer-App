'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface TimerLogProps {
  recentTimes: number[]; 
}

const TimerLog: React.FC<TimerLogProps> = ({ recentTimes }) => {
  const [timers, setTimers] = useState<number[]>([]);

  useEffect(() => {
    setTimers(recentTimes);
  }, [recentTimes]);

  const formatTime = (seconds: number) => {
    if (typeof seconds === 'number') {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    } else {
      return seconds; // Return '--:--' unchanged
    }
  };

  const calculateAverage = (times: number[]) => {
    if (times.length === 0) {
      return 0;
    }
    const sum = times.reduce((acc, time) => acc + time, 0);
    return sum / times.length;
  };

  const calculateFastest = (times: number[]) => {
    return times.length > 0 ? Math.min(...times) : 0;
  };

  const calculateSlowest = (times: number[]) => {
    return times.length > 0 ? Math.max(...times) : 0;
  };

  const calculateAverageOfFive = (times: number[]) => {
    if (times.length < 5) {
      return '--:--'; // Not enough solves for Ao5
    }
    const recentTimes = times.slice(0, 5);
    return formatTime(calculateAverage(recentTimes));
  };

  const calculateAverageOfTwelve = (times: number[]) => {
    if (times.length < 12) {
      return '--:--'; // Not enough solves for Ao12
    }
    const recentTimes = times.slice(0, 12);
    return formatTime(calculateAverage(recentTimes));
  };

  return (
    <div className="flex flex-col items-center h-screen bg-slate-700 text-white text-[35px]">
      <div className='mt-5'>
        <Image 
          src="/Media/logo.jpg"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div className='text-[25px] p-6'>
        <p>Count: {timers.length}</p>
        <p>Average: {calculateAverage(timers).toFixed(2)}</p>
        <p>Ao5: {calculateAverageOfFive(timers)}</p>
        <p>Ao12: {calculateAverageOfTwelve(timers)}</p>
        <br></br>
        <p>Fastest: {calculateFastest(timers).toFixed(2)}</p>
        <p>Slowest: {calculateSlowest(timers).toFixed(2)}</p>
      </div>
      <h2 className=''>Recent Times:</h2>
      <ul className='text-[25px]'>
        {timers.map((timer: number, index: React.Key | null | undefined) => (
          <li key={index}>{timer.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default TimerLog;