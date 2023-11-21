import React from "react"
import { Link } from "react-router-dom"
import Rules from "../Rules"
import { calcBlackCellSum, reverseCellValue } from "./Level.functions"
import { checkXY } from "./autofill.functions"
import { useParams, Outlet, useNavigate } from "react-router-dom"
import levels from "./levels.json"
import XAxisGrid from "./XAxisGrid"
import YAxisGrid from "./YAxisGrid"
import Health from "./Health"

function Level() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [health, setHealth] = React.useState(3)
    const [blackCellsSum, setBlackCellsSum] = React.useState(3)
    const [answers, setAnswers] = React.useState(
        Array( levels[id].answer.length ).fill(0).map(() => new Array( levels[id].answer[0].length ).fill(null))
    )

    React.useEffect(()=>{
        setBlackCellsSum(calcBlackCellSum(levels[id].answer))
    }, [id])

    React.useEffect(()=>{
        const userBlackCellsSum = calcBlackCellSum(answers)

        if(userBlackCellsSum === blackCellsSum){
            document.querySelector(".game").style.pointerEvents = "none"
            document.querySelector(".game").classList.add("finished")
        }
    }, [answers])

    React.useEffect(()=>{
        if(health < 3){
            document.querySelector(".game").style.pointerEvents = "none"
            document.querySelector(".game").style.backgroundColor = "#ff6a6a"
            setTimeout(()=>{
                document.querySelector(".game").style.pointerEvents = ""
                document.querySelector(".game").style.backgroundColor = "white"
            }, 1000)
        }

        if(health < 1){
            navigate("fail")
        }
    }, [health])

    const isCorrect = (state, rowID, cellID) =>{

        if (levels[id].answer[rowID][cellID] === state ){
            return true
        }

        setAnswers(oldAnswers => {
            oldAnswers[rowID][cellID] = reverseCellValue(state)
            return [...oldAnswers]
        })
        setHealth(oldHealth => oldHealth - 1)
        return false
    }

    const handleBlackCell = (rowID, cellID) =>{
        if(!isCorrect(1, rowID, cellID)){
            return false
        }

        const filled = checkXY({
            userAnswer: answers,
            gameAnswer: levels[id].answer,
            rowID, 
            cellID
        })

        if (filled){
            setAnswers(filled)
            return
        }

        setAnswers(oldAnswers => {
            oldAnswers[rowID][cellID] = 1
            return [...oldAnswers]
        })
    }

    const handleCrossCell = (rowID, cellID) =>{
        if(!isCorrect(0, rowID, cellID)){
            return false
        }

        setAnswers(oldAnswers => {
            oldAnswers[rowID][cellID] = 0
            return [...oldAnswers]
        })
    }

    const handleMove = (e, rowID, cellID) =>{
        if(answers[rowID][cellID] !== null || e.buttons === 0){
            return
        }

        if (e.buttons === 2){
            handleCrossCell(rowID, cellID)
            return
        }
        handleBlackCell(rowID, cellID)
    }
    
    const gameGrid = levels[id].answer.map((row, rowID) =>{
        const cells = row.map((cell, cellID) => {
            let cellContent = ""
            switch (answers[rowID][cellID]){
                case 0: 
                    cellContent =  <img src="./icons/cross.svg" alt="cross" className="scale" />
                    break
                case 1: 
                    cellContent = <p className="black_cell scale"></p>
                    break
            }

            return (
                <td key={cellID}
                onContextMenu={(e)=>{ 
                    if(answers[rowID][cellID] !== null){
                        return
                    }
                    handleCrossCell(rowID, cellID) 
                }} 
                onMouseMove={(e)=>{ handleMove(e, rowID, cellID) }}
                onClick={(e)=>{
                    if(answers[rowID][cellID] !== null){
                        return
                    }
                    handleBlackCell(rowID, cellID) }}>
                    { cellContent }
                </td> 
            )
        })
        return (
            <tr key={rowID}>{cells}</tr>
        )
    })

    return (
        <>
            <div className="flex col puzzle" onContextMenu={(e)=>{ e.preventDefault() }} >
                <Link className="btn rounded flex fit-content gap-0 spacer" to="/home">
                    <img src="./icons/back.svg" alt="back" />
                    Select level 
                </Link>
                <div className="puzzle-col flex col">
                    <div className="game_container fit-content flex spacer">
                        <XAxisGrid id={id} />
                        <div className="game_bottom_container flex">
                            <YAxisGrid id={id} />
                            <table className="game" cellSpacing={0}>
                                <tbody>
                                    {gameGrid}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Health health={health} />
                </div>
                <Outlet />
            </div>
            <Rules />
        </>
    )
}

export default Level
