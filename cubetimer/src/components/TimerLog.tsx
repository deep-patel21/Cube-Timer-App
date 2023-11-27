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

  return (
    <div className="flex flex-col items-center h-screen bg-gray-800 text-white text-[35px]">
      <div className='mt-5'>
        <Image 
            src="/Media/logo.jpg"
            alt="Logo"
            width={100}
            height={100}
          />
      </div>
      <h2>Recent Times:</h2>
      <ul>
        {timers.map((timer: number, index: React.Key | null | undefined) => (
          <li key={index}>{timer.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default TimerLog;