import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer">
      <h2>Timer: {seconds}</h2>
      <button onClick={toggle} className="btn btn-primary">
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={reset} className="btn btn-secondary ml-2" style={{marginLeft:'10px'}}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
