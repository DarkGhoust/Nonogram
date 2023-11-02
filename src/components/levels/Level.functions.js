const sumOfEachGroups = (arr) => {
    const string = arr.join('') // Convert the array to a binary string
    const regex = /1+/g // Matches one or more consecutive 1s
    const  sums = []

    let match
  
    while ((match = regex.exec(string)) !== null) {
        sums.push(match[0].length)
    }
  
    return sums
}

const calcBlackCellSum = (matrix) =>{
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 1){
                sum += 1
            }
        }
    }
    
    return sum
}

const detectMaxAxis = (matrix) =>{

    let max = matrix[0].length
    for (let i = 1; i < matrix.length - 1; i++) {
        if(matrix[i].length > max){
            max = matrix[i].length
        }
    }
    
    return max
}

function rotateMatrix(matrix) {
    const rotatedMatrix = []

    for (let j = 0; j < detectMaxAxis(matrix); j++) {
        rotatedMatrix[j] = []
        for (let i = matrix.length - 1; i >= 0; i--) {
            if(matrix[i][j] !== undefined){
                rotatedMatrix[j].push(matrix[i][j])
            }
        }
    }

    return rotatedMatrix;
}


const detectXgrid = (matrix) =>{
    const rotatedMatrix = rotateMatrix(matrix)
    const xArray = []
    
    rotatedMatrix.forEach( (item, id) =>{
        xArray.push(sumOfEachGroups( rotatedMatrix[id] ))
    })
    
    return xArray
}

const detectYgrid = (matrix) =>{
    const yArray = []

    matrix.forEach( (item, id) =>{
        yArray.push(sumOfEachGroups( matrix[id] ))
    })

    return yArray
}

const reverseCellValue = state =>{
    if(state === 1){
        return 0
    }
    return 1
}

export {
    detectYgrid,
    detectXgrid,
    calcBlackCellSum,
    reverseCellValue
}