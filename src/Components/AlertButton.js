import React from "react"

function dare() {
    alert('OMG! You clicked me! Nothing to see here');
}

const AlertButton = () => {
    return (
        <div>
        <button onClick={dare}>Click me if you dare!</button>
        </div>)
}

export default AlertButton