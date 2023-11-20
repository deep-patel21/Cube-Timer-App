
import React from 'react';
import Timer from './Timer';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <div className="text-4xl font-bold mb-4 p-7">Rubik's Cube Timer</div>
      <div className="text-lg mb-8">
        Press the spacebar to start/stop the timer. Hold for 1.5 seconds to start. Single tap to stop.
      </div>
      <Timer />
    </div>
  );
};

export default Hero;
