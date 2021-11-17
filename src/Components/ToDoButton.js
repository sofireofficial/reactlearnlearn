import React from "react"

const ToDoButton = (props) => {
  return <div>
    <button className="mainButtons" onClick={ () => {props.handleClick(true)}}>Things to discuss with Mentors!!!</button>
  </div>
};

export default ToDoButton;

// const makeBlackAndRed = {
  // backgroundColor: 'red',
  // color: 'black',
  // cursor: 'pointer',
  // padding: '2em',
  // border: 0,
  // borderRadius: '20px',
  // display: 'block',
  // margin: 'auto',
  // fontWeight: 'bold',
// };
// <button style={makeBlackAndRed} ...>
