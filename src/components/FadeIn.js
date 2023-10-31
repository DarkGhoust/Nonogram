import { useState } from "react"

const FadeIn = () =>{
    const [isCliked, setIsClicked] = useState(false)

    const handleClick = () =>{
        setIsClicked(oldState => !oldState)
    }

    return (
        <>
            <div className="axis_cells" onClick={handleClick}> {isCliked && <p className="scale"></p>} </div>
        </>
    )
    
}

export default FadeIn