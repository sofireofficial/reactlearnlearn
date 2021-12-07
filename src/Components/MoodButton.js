import React from "react"
 
const MoodButton = (props) => {
    return (
        <div>
            <button type="button" className="mainButtons" onClick={() => props.setShowMood("🙂")}>Happy?</button>
            <button type="button" className="mainButtons" onClick={() => props.setShowMood("🙁")}>Sad?</button>
        </div>
    )
}
 
export default MoodButton
