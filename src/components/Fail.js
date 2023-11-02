import { Link } from "react-router-dom"

function Fail() {
    return (
        <div className="popup flex">
            <div className="popup_container flex col">
                <h2 className="heading spacer">Fail</h2>
                <Link className="btn rounded flex fit-content gap-0" to="/home">
                    <img src="/icons/back.svg" alt="back" />
                    Back to Menu
                </Link>
            </div>
        </div>
    )
}

export default Fail
