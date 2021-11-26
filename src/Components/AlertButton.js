import React from "react";

function dare() {
  alert("OMG! You clicked me! Nothing to see here");
}

const AlertButton = (props) => {
  console.log(props)
  return (
    <div>
      <button className="mainButtons" onClick={dare}>
        {props.label}
      </button>
    </div>
  );
};

export default AlertButton;
