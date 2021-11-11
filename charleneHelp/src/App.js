import React from 'react' 
import AlertButton from "./Components/AlertButton";
import ToDoButton from "./Components/ToDoButton";
import CompletedButton from "./Components/CompletedButton";
import ModalContent from './Components/ToDoModal';

// import ActionsContent from "./Components/ActionsModal";

const App = (buttonClicked) => {

  // const ActionsContent = (buttonClicked) => {
    console.log("Hello world")
    console.log(buttonClicked);
  //   return buttonClicked && modalContent;
  // };

  return (
    <div id="mainPage">
      <h1>My Learnings!</h1>
      <img src="styles/CodePic.png" alt="person typing on laptop" width="250px" height="220px"></img>
      <h4>by Sophia Johnson</h4>
      <AlertButton />

    
      <p>Add functionality to the ToDoButton below</p>
      <ToDoButton />

      <p>Add functionality to the CompletedButton below</p>
      <CompletedButton />

      <ModalContent show={buttonClicked}/>
    </div>
  );
};

export default App;

// const [show, setShow] = React.useState(false) /*see here - setting show to false*/

// button onClick={ () => setShow(true) }>Click me</button> {/*see here*/}
// {show ? <ActionsContent /> : null} {/*if this variable is true, show it, else don't */}
