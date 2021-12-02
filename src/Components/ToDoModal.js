import React from "react";

const ToDoModal = (props) => {
  const handleClick = (index) => {
    props.setCompletedList([...props.completedList, props.toDoList[index]]);
    props.setToDoList(props.toDoList.filter(listItem => { return listItem !== props.toDoList[index]}));
    console.log(props.toDoList.filter(listItem => { return listItem !== props.toDoList[index]}));
  };
  console.log(props); ///////////// ANDY!

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
      <ul>
        {props.toDoList.map((task, index) => (
          <li key={"discuss-list-item" + index}> 
            {task}
            <button
              onClick={() => {
                handleClick(index);
              }}
            >
              {index}
            </button>
          </li>
        ))}
      </ul>{" "}
      {/*wrapped in curly ensuring it is js. Returns a list item for every item in my array }*/}
    </div>
  );
};

export default ToDoModal;
