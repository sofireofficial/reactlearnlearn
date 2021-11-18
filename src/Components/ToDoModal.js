import React from 'react'

const ToDoModal = (props) => {
  return (
  <div className="yellowModal">
  <ul>
    <li>I want to learn A</li>
    <li>I want to learn B</li>
    <li>I want to learn C</li>
  </ul>
  <button onClick={ () => {props.handleClick(false)}}>X</button>
  </div>
)
};

export default ToDoModal