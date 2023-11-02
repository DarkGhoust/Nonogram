const checkXY = ({
    userAnswer,
    gameAnswer,
    rowID, 
    cellID
}) =>{
    let isChanged = false
    userAnswer[rowID][cellID] = 1
    
    const COPYuserAnswer = [...userAnswer]

    if ( isRowFilled({userAnswer, gameAnswer, rowID }) ){
        isChanged = true
        for (let i = 0; i < userAnswer[0].length; i++) {
            COPYuserAnswer[rowID][i] = gameAnswer[rowID][i]
        }
    }

    if ( isColFilled({ userAnswer, gameAnswer, cellID}) ){
        isChanged = true
        for (let i = 0; i < userAnswer.length; i++) {
            COPYuserAnswer[i][cellID] = gameAnswer[i][cellID]
        }
    }

    if (isChanged){
        return false
    }

    return COPYuserAnswer
}

const isRowFilled = ({
    userAnswer,
    gameAnswer,
    rowID
}) =>{
    for (let i = 0; i < userAnswer[0].length; i++) {
        if( gameAnswer[rowID][i] === 1 && userAnswer[rowID][i] !== 1){
            return false
        }
    }

    return true
}
const isColFilled = ({
    userAnswer,
    gameAnswer,
    cellID
}) =>{
    for (let i = 0; i < userAnswer.length; i++) {
        if( gameAnswer[i][cellID] === 1 && userAnswer[i][cellID] !== 1){
            return false
        }
    }

    return true
}

export {
    checkXY
}