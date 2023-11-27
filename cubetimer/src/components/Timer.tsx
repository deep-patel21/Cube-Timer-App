'use client';

import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';

interface TimerProps {
  onTimerRecord: (time: number) => void;
}

const Timer: React.FC<TimerProps> = ({ onTimerRecord }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  const handleSpaceDown = () => {
    if (!isActive) {
      setIsStopped(false);
    }
  };

  const handleSpaceUp = () => {
    if (!isActive) {
      setIsActive(true);
      setIsStopped(false);
      setTime(0); // Reset the timer to 0 when spacebar is pressed down for the next solve
    } else {
      setIsActive(false);
      setIsStopped(true);

      if (time >= 0) {
        const timeOutput = time / 1000;
        console.log(`Time recorded: ${timeOutput.toFixed(2)} seconds`);
        onTimerRecord(timeOutput);
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      if (interval) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive]);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const millisecondsPart = (milliseconds % 1000).toString().padStart(3, '0');

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${millisecondsPart}`;
  };

  const timerStyle = {
    color: isStopped ? 'green' : (isActive ? 'white' : 'red'),
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className='text-[150px] p-2'
        style={timerStyle}
        onKeyDown={handleSpaceDown}
        onKeyUp={handleSpaceUp}
        tabIndex={0} // Necessary for the div to receive keyboard events
      >
        {formatTime(time)}
      </div>
    </div>
  );
};

export default Timer;