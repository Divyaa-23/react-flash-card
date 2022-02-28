import React from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import "../App.css";

function Cardviewer(props) {
  const [count, setCounter] = useState(0);

  const [state, setState] = useState(true);

  const nextCard = () => {
    if (count === props.result.length - 1) {
      setCounter(0);
    } else {
      setCounter(count + 1);
      setState(true);
    }
  };

  const prevCard = () => {
    if (count === 0) {
      setCounter(props.result.length-1);
    } else {
      setCounter(count - 1);
      setState(true);
    }
  };

  const handleClick = () => {
    setState(!state);
  };
  let currentCard;
  if (props.result.length >0) {
    currentCard = JSON.stringify(
      state ? props.result[count][0] : props.result[count][1]
    );
  }
  return (
    <div className="Viewer">
      <h1>Card Viewer</h1>
      <div className="ViewerBox" onClick={handleClick}>
        {/*    <h1>{state ? props.result[count][0] : props.result[count][1]}</h1> */}
        <h1>{currentCard?JSON.parse(currentCard):""}</h1>
      </div>
      <div className="NextPrevButtons">
        <button onClick={prevCard}>Prev Card</button>
        <button onClick={nextCard}>Next Card</button>
      </div>
      <div>
        <NavLink to="/">
          <button>Card Editor</button>
        </NavLink>
      </div>
    </div>
  );
}
export default Cardviewer;
