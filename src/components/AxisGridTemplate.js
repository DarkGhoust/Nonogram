import "./axisGridTemplate.css"
import FadeIn from "./FadeIn"

const AxisGridTemplate = () =>{
    const grid = [
        [1],
        [4,5,6,7],
        [3,4]
    ]

    const gridhtml = grid.map((row, rowID) =>{
        const cols =  row.map(cell => <li className="axis_cells">{cell}</li>)
        return <ul>{cols}</ul>
    })

    return (
        <>
            <div className="axis_grid xAxis">
                {gridhtml}
            </div>
            <div className="axis_grid yAxis">
                {gridhtml}
            </div>
            <FadeIn />
        </>
    )
    
}

export default AxisGridTemplate