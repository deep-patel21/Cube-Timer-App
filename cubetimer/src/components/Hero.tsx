'use client';
import React, { useState } from 'react';
import Timer from './Timer';
import ChartComponent from './ChartComponent';
import TimerLog from './TimerLog';

const Hero = () => {
  const [recentTimers, setRecentTimers] = useState<number[]>([]);

  const handleTimerRecord = (time: number) => {
    // Update the recent timers list with the new recorded time
    setRecentTimers((prevTimers) => {
      const newTimers = [time, ...prevTimers.slice(0, 9)]; // Keep the latest 10 timers
      return newTimers;
    });
  };

  return (
    <div className='flex flex-row w-screen h-screen'>
      <div className='w-1/5'>
        <TimerLog recentTimes={recentTimers} />
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-800 text-white">
        <div className='flex flex-row'>
          <div>
            <div className="text-[70px] font-bold mb-4 p-7 w-full justify-center text-center">Rubik's Cube Timer</div>
            <div className="text-lg mb-8 text-center text-bold justify-center">
              Developed by Deep Patel and Ricky Rathod
            </div>
          </div>
          <div>
            <video loop muted autoPlay width="400" height="225">
                <source src="/Media/TheCuberAnimation.mp4" type="video/mp4" style={{ backgroundColor: 'transparent' }}/>
                Your browser does not support the video tag.
              </video>
          </div>
        </div>
        <ChartComponent />
        <Timer onTimerRecord={handleTimerRecord} />
      </div>
    </div>
  );
};

export default Hero;