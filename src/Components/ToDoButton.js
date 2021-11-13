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

const ToDoButton = (props) => {
  return <div>
    <button style={makeBlackAndRed} onClick={ () => {props.handleClick(true)}}>Things to discuss with Mentors!!!</button>
  </div>
};

export default ToDoButton;
