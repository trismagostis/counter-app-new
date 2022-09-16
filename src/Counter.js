import React from "react";
import "./Counter.css";

import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Clock from "./Clock";
import { useState } from "react";

function Counter(props) {
  const [counterValue, setCounterValue] = useState(props.initValue);
  const [showClock, setShowClock] = useState(true);

  const changeValue = (action) => {
    let currentCounterValue = counterValue;

    if (action === "add") {
      currentCounterValue += 1;
    } else if (action === "reinit") {
      currentCounterValue = props.initValue;
    } else {
      currentCounterValue = 0;
    }
    setCounterValue(currentCounterValue);
  };

  const toggleClock = () => {
    setShowClock(!showClock);
  };

  let clockElement = "";

  if (showClock) {
    clockElement = <Clock toggleClockMethod={toggleClock} />;
  } else {
    clockElement = (
      <span onClick={toggleClock} className="show-clock">
        show clock
      </span>
    );
  }

  return (
    <div className="counter">
      Counter:
      <Display displayValue={counterValue} />
      <ButtonsPanel buttonMethod={changeValue} />
      {clockElement}
    </div>
  );
}

export default Counter;

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;
