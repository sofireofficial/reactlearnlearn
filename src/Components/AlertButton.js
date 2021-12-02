import React from "react";

function dare() {
  alert("Really? You still chose to click the button!");
}

const AlertButton = (props) => {
  console.log(props)
  return (
    <div>
      <button style={{color:props.color}} className="mainButtons" onClick={dare}>
        {props.displayText}
      </button>
      {/* test here, by inserting: <p>{props.symbol}</p>, and assigning symbol={⛔} in App.js*/}
    </div>
  );
};

export default AlertButton;
