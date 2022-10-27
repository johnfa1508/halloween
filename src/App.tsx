import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("10/28/2022 22:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <div className="App">
        <h1 className="title"> 🎃 B- Halloween party countdown 🎃 </h1>
        <h2 className="title"> 👻 28th of October 👻 </h2>

        {partyTime ? (
          <>
            <h2 className="text">🍻 B- is open! 🍻</h2>
          </>
        ) : (
          <>
            <div className="timer-wrapper">
              <h2 className="counter">
                {days} days : {hours} hours : {minutes} minutes : {seconds}{" "}
                seconds
              </h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
