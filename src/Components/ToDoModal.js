import React from 'react'

const ToDoModal = (props) => {
  return (
  <div className="yellowModal">
    <button className="xButton" onClick={ () => {props.handleClick(false)} }>X</button>
<ul>
    <li>I want to learn A</li>
    <li>I want to learn B</li>
    <li>I want to learn C</li>
    <li>I want to learn D</li>
    <li>I want to learn E</li>
    <li>I want to learn F</li>
  </ul>
  </div>
)
};

export default ToDoModal