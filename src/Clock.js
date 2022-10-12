import React, { useEffect, useState } from "react";
import "./Clock.css";

function Clock(props) {
  const [date, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    setInterval(() => {
      tick();
    }, 1000);//componentDidMount
    
    return () => {
      clearInterval();//componentWillUnmount
      
    };
  });

  return (
    <div className="clock">
      <h4>
        Time: {date.toLocaleTimeString()}
        <span onClick={props.toggleClockMethod}>X</span>
      </h4>
    </div>
  );
}

export default Clock;
