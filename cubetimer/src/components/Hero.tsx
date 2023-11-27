'use client';
import React from 'react';
import Timer from './Timer';
import ChartComponent from './ChartComponent';
import TimerLog from './TimerLog';

const Hero = () => {
  return (
    <div className='flex flex-row w-screen h-screen'>
        <div className='w-1/5'>
          <TimerLog />
        </div>
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-800 text-white">
          <div className="text-4xl font-bold mb-4 p-7">Rubik's Cube Timer</div>
            <div className="text-lg mb-8">
              Press the spacebar to start/stop the timer. Hold for 1.5 seconds to start. Single tap to stop.
            </div>
          <ChartComponent />
          <Timer />
        </div>
    </div>
  );
};

export default Hero;
