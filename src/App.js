import React, { useState, useEffect } from "react";
import CodePic from "./images/CodePic.png";
import AlertButton from "./Components/AlertButton";

import ToDoButton from "./Components/ToDoButton";
import ToDoModal from "./Components/ToDoModal";

import CompletedButton from "./Components/CompletedButton";
import CompletedModal from "./Components/CompletedModal";

import Links from "./Components/Links";
import Socials from "./Components/Socials";

const App = () => {
  const [showToDoModal, setShowToDoModal] = useState(false); //showToDoModal = variable & it is false. setShowToDoModal will be used to change the state
  const [showCompletedModal, setShowCompletedModal] = useState(false);
  const [toDoList, setToDoList] = useState([
    "I want to learn A",
    "I want to learn B",
    "I want to learn C",
    "I want to learn D",
    "I want to learn E",
    "I want to learn F",
  ]);
  const [completedList, setCompletedList] = useState([]);
  
  return (
    <div>
      <h1>My Learnings!</h1>
      <img
        src={CodePic}
        alt="person typing on laptop" width="250px" height="220px"
      ></img>
      <h5>by Sophia Johnson</h5>
      <AlertButton />
      <p>Add functionality to the ToDoButton below</p>
      <ToDoButton handleClick={setShowToDoModal} />{" "}
      {/*handleClick is the new variable. it is a prop. We'll be able to access its value. WHich in this case is a js function */}
      {showToDoModal ? (
        <ToDoModal
          handleClick={setShowToDoModal}
          toDoList={toDoList}
          setToDoList={setToDoList}
          completedList={completedList}
          setCompletedList={setCompletedList}
        />
      ) : null}{" "}
      {/*first half checks showToDoModal... when true, show modal.*/}
      <p>Add functionality to the CompletedButton below</p>
      <CompletedButton handleClick={setShowCompletedModal} />
      {showCompletedModal ? (
        <CompletedModal handleClick={setShowCompletedModal} completedList={completedList} />
      ) : null}
      <h5>Links</h5>
      <Links />
      <h5>Socials</h5>
      <Socials />
    </div>
  );
};

export default App;

// const [show, setShow] = React.useState(false) /*see here - setting show to false*/

// button onClick={ () => setShow(true) }>Click me</button> {/*see here*/}
// {show ? <ActionsContent /> : null} {/*if this variable is true, show it, else don't */}
