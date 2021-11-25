import React from 'react'

const CompletedModal = (props) => {
  return (
  <div className="yellowModal">
    <button className="xButton" onClick={ () => {props.handleClick(false)} }>X</button>
<ul>
    <li>I learnt A</li>
    <li>I learnt B</li>
    <li>I learnt C</li>
    <li>I learnt D</li>
    <li>I learnt E</li>
    <li>I learnt F</li>
  </ul>
  </div>
)
};

export default CompletedModal