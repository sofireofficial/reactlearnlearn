import React from "react";

const CompletedModal = (props) => {
  return (
    <div className="yellowModal">
      <button
        className="xButton"
        onClick={() => {
          props.handleClick(false);
        }}
      >
        X
      </button>
      <ul>{props.completedList.map( (task, index) => <li>{task}</li>)}</ul>                                    {/*wrapped in curly ensuring it is js. Returns a list item for every item in my array }*/}
    </div>
  );
};

export default CompletedModal;
