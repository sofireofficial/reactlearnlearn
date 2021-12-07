import React from "react"

const MoodButton = () => {
    function emotions() {
        alert("please work!")
    // const [showMood, setMood] = useState("...");
    }
    return (
        <div>
            <button type="button" className="mainButtons" onClick={() => setMood("🙂")}>Happy?</button>
            <button type="button" className="mainButtons" onClick={() => setMood("🙁")}>Sad?</button>
        </div>
    )
}

export default MoodButton
