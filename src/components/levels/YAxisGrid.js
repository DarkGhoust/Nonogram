import React from "react"
import { detectYgrid } from "./Level.functions"
import levels from "./levels.json"
import "../../css/axisGrid.css"

const YAxisGrid = React.memo(({id}) =>{

    const yGrid = detectYgrid(levels[id].answer)

    const gridhtml = yGrid.map((row, rowID) =>{
        const cols =  row.map((cell, cellID) => <li key={cellID} className="axis_cells">{cell}</li>)
        return <ul key={rowID}>{cols}</ul>
    })

    return (
        <>
            <div className="axis_grid yAxis">
                {gridhtml}
            </div>
        </>
    )
    
})

export default YAxisGrid