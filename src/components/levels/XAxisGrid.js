import "../../css/axisGrid.css"
import { useParams } from "react-router-dom"
import { detectXgrid } from "./Level.functions"
import levels from "./levels.json"

const XAxisGrid = () =>{
    const {id} = useParams()

    const xGrid = detectXgrid(levels[id].answer)

    const gridhtml = xGrid.map((row, rowID) =>{
        const cols =  row.map((cell, cellID) => <li key={cellID} className="axis_cells">{cell}</li>)
        return <ul key={rowID}>{cols}</ul>
    })

    return (
        <>
            <div className="axis_grid xAxis">
                {gridhtml}
            </div>
        </>
    )
    
}

export default XAxisGrid