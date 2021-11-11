import React, { useEffect, useState } from "react"
import ActionsContent from "../App";

const makeBlackAndRed = {
  backgroundColor: 'red',
  color: 'black',
  cursor: 'pointer',
  padding: '2em',
  border: 0,
  borderRadius: '20px',
  display: 'block',
  margin: 'auto',
  fontWeight: 'bold',
};

const ToDoButton = () => {
  const [buttonClicked, setButtonClicked] = useState(false)
  useEffect( () => {
    ActionsContent(buttonClicked)
  })
  return <div>
    <button style={makeBlackAndRed} onClick={ () => setButtonClicked(true)}>Things to discuss with Mentors!!!</button>
  </div>
};

export default ToDoButton;
// initial state = false... modal clicked = true.

// [name of state, function]