const ToDoButton = (props) => {
    return (
        <div>
            <button className="mainButtons" onClick={ () => {props.handleClick(true)}}>Completed actions</button>
        </div>
    )
}

export default ToDoButton