import React from 'react' 
import AlertButton from "./Components/AlertButton";
import ToDoButton from "./Components/ToDoButton";
import CompletedButton from "./Components/CompletedButton";

// import ActionsContent from "./Components/ActionsModal";

const App = () => {
  return (
    <div>
      <h1>My Learnings!</h1>
      <h5>by Sophia Johnson</h5>
      <AlertButton />

    
      <p>Add functionality to the ToDoButton below</p>
      <ToDoButton />

      <p>Add functionality to the CompletedButton below</p>
      <CompletedButton />
    </div>
  );
};

export default App;

// const [show, setShow] = React.useState(false) /*see here - setting show to false*/

// button onClick={ () => setShow(true) }>Click me</button> {/*see here*/}
// {show ? <ActionsContent /> : null} {/*if this variable is true, show it, else don't */}
