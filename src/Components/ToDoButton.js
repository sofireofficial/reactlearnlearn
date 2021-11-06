import React from "react"

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
  return <div>
    <button style={makeBlackAndRed}>Things to discuss with Mentors!!!</button>
  </div>
};

export default ToDoButton;
