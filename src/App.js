import React, { useState} from "react"; // and useEffect
import CodePic from "./images/CodePic.png";

import ToDoButton from "./Components/ToDoButton";
import ToDoModal from "./Components/ToDoModal";

import CompletedButton from "./Components/CompletedButton";
import CompletedModal from "./Components/CompletedModal";

import Links from "./Components/Links";
import Socials from "./Components/Socials";

import MoodButton from "./Components/MoodButton";
import AlertButton from "./Components/AlertButton";

const App = () => {
  const [showToDoModal, setShowToDoModal] = useState(false); //showToDoModal = variable & it is false. setShowToDoModal will be used to change the state
  const [showCompletedModal, setShowCompletedModal] = useState(false);
  const [toDoList, setToDoList] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
  ]);
  const [completedList, setCompletedList] = useState([]);
  const [showMood, setShowMood] = useState("...");
  
  return (
    <div>
      <h1>My Learnings!</h1>
      <img
        src={CodePic}
        alt="person typing on laptop" width="350px" height="320px"
      ></img>
      <h2>by Sophia Johnson</h2>


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


      <CompletedButton handleClick={setShowCompletedModal} />
      {showCompletedModal ? (
        <CompletedModal handleClick={setShowCompletedModal} completedList={completedList} />
      ) : null}
      <Links />
      <br />
      <Socials />
      <br />
      <MoodButton setShowMood={setShowMood}/>
      <h3>{showMood}</h3>

      <div className={'flexingDivs'}> 
      <AlertButton displayText={'1.⛔ Do not click!'} symbol={''} color={'#B00000'}/>
      <AlertButton displayText={'2.⛔ Do NOT Click!'} symbol={''} color={'#900000'}/>
      <AlertButton displayText={'3.⛔ DO NOT ClICK!!!'} symbol={''} color={'#700000'}/>
      </div>

    </div>
  );
};

export default App;

// const [show, setShow] = React.useState(false) /*see here - setting show to false*/

// button onClick={ () => setShow(true) }>Click me</button> {/*see here*/}
// {show ? <ActionsContent /> : null} {/*if this variable is true, show it, else don't */}
