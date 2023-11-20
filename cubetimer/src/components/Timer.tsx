'use client';

import React, { useState, useEffect } from 'react';

const Timer = () => {
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
    } else {
      setIsActive(false);
      setIsStopped(true);
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
    color: isStopped ? 'green' : isActive ? 'black' : 'red',
  };

  const handleReset = () => {
    setTime(0);
    setIsActive(false);
    setIsStopped(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div
        className='text-[150px] p-2'
        style={timerStyle}
        onKeyDown={handleSpaceDown}
        onKeyUp={handleSpaceUp}
        tabIndex={0} // Necessary for the div to receive keyboard events
      >
        {formatTime(time)}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;