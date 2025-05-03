import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="timer-container">
        <h1 className="timer-title">Timer</h1>
        <p className="timer-value">{time} seconds</p>
      </div>
    </>
  );
}

export default App;
