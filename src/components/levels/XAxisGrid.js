import React from "react"
import { detectXgrid } from "./Level.functions"
import levels from "./levels.json"
import "../../css/axisGrid.css"

const XAxisGrid = React.memo(({id}) =>{

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
    
})

export default XAxisGrid