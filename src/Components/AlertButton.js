import React from "react";

function dare() {
  alert("OMG! You clicked me! Nothing to see here");
}

const AlertButton = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.number}</p>
      <button style={{color:props.color}} className="mainButtons" onClick={dare}>
        {/* {props.label} */}Hello!
      </button>
    </div>
  );
};

export default AlertButton;
