import { useEffect, useRef, useState } from "react";
import { getTimer, pause, reset, start } from "../helper/timer";

// Question 2: Use the timer helper in the TimerComponent
export default function TimerComponent() {
  const [time, setTime] = useState(0);
  const animationFrameRef = useRef<any>(null);

  const updateTimer = () => {
    setTime(getTimer());
    animationFrameRef.current = requestAnimationFrame(updateTimer);
  };

  const startTimer = () => {
    start();
    updateTimer(); // Start the timer update loop
  };

  const pauseTimer = () => {
    pause();
    cancelAnimationFrame(animationFrameRef.current);
  };

  const resetTimer = () => {
    reset();
    setTime(0);
    cancelAnimationFrame(animationFrameRef.current);
  };

  const timeFormatted = (seconds: number) => {
    if (seconds <= 0) {
      return "00:00:00";
    }
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  return (
    <section className="timer-container">
      <div className="result-timer">
        <h3 className="">Raw timer: {time}</h3>
        <h3 className="">
          Time formatted{" "}
          <span
            style={{
              fontSize: 12,
              color: "gray",
              fontStyle: "italic",
            }}
          >
            (HH:MM:SS)
          </span>
          : {timeFormatted(time)}
        </h3>
      </div>
      <div
        className="grid-items"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          width: "100%",
        }}
      >
        <button className="btn" onClick={startTimer}>
          Start
        </button>
        <button className="btn" onClick={pauseTimer}>
          Pause
        </button>
        <button className="btn" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </section>
  );
}
