import { Link } from "react-router-dom"

function Start() {
    return (
        <div className="flex col">
            <h1 className="heading spacer white-bg">NONOGRAM PUZZLE</h1>
            <hr className="spacer"/>
            <Link className="btn flex fit-content gap-0 shadow" to="/home">PLAY</Link>
        </div>
    )
}

export default Start
