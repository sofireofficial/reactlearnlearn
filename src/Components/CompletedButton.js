const makeRedandBlack = {
backgroundColor: 'black',
color: 'red',
cursor: 'pointer',
padding: '2em',
border: 0,
borderRadius: '20px',
display: 'block',
margin: 'auto',
fontWeight: 'bold',
};

const ToDoButton = () => {
    return (
        <div>
            <button style={makeRedandBlack}>Completed actions</button>
        </div>
    )
}

export default ToDoButton