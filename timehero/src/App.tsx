import React, { useState, useEffect } from 'react';
import { JSX } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * Main application component that manages the timer functionality and routing.
 * 
 * @component
 * @returns {JSX.Element} The main application layout with timer and navigation.
 */
function App(): JSX.Element {
  /**
   * State variables for managing the timer
   */
  const [time, setTime] = useState<number>(0); // Current timer value in seconds
  const [isRunning, setIsRunning] = useState<boolean>(false); // Timer running state

  /**
   * Effect hook for managing the timer interval
   * - Creates an interval when timer is running
   * - Updates time state every second
   * - Cleans up interval on unmount or when timer stops
   */
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime: number) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  /**
   * Handles starting the timer
   * - Sets isRunning to true
   * - Timer will start incrementing
   */
  const handleStart = (): void => setIsRunning(true);

  /**
   * Handles pausing the timer
   * - Sets isRunning to false
   * - Timer will stop incrementing
   */
  const handlePause = (): void => setIsRunning(false);

  /**
   * Handles resetting the timer
   * - Stops the timer
   * - Resets time to 0
   */
  const handleReset = (): void => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="timer-container">
              <h1 className="timer-title">Timer</h1>
              <p className="timer-value">{time} seconds</p>
              <div className="timer-controls">
                <button onClick={handleStart}>Start</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleReset}>Reset</button>
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
