import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const startTimer = () => {
    setIsActive(!isActive);
  };
  const endTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={endTimer}>Stop</button>
      
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;