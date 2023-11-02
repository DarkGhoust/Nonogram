import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="flex col">
            <h2 className="heading spacer white-bg">Select level</h2>
            <hr className="spacer"/>
            <ul>
                <Link style={{justifyContent: "center"}} className="btn flex spacer gap-0 shadow" to="/level/0">Easy</Link>
                <Link style={{justifyContent: "center"}} className="btn flex spacer gap-0 shadow" to="/level/1">Medium</Link>
                <Link style={{justifyContent: "center"}} className="btn flex spacer gap-0 shadow" to="/level/2">Hard</Link>
            </ul>
        </div>
    )
}

export default Home
