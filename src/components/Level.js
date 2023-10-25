import levels from "./levels.json"

function Level({id}) {

    function sumOfEachGroups(arr) {
        const string = arr.join('') // Convert the array to a binary string
        const regex = /1+/g // Matches one or more consecutive 1s
        const  sums = []

        let match
      
        while ((match = regex.exec(string)) !== null) {
            sums.push(match[0].length)
        }
      
        return sums
    }

    function rotateMatrix(matrix) {
        const rotatedMatrix = []
    
        for (let j = 0; j < matrix[0].length; j++) {
            rotatedMatrix[j] = []
            for (let i = matrix.length - 1; i >= 0; i--) {
                rotatedMatrix[j].push(matrix[i][j])
            }
        }
    
        return rotatedMatrix;
    }

    const detectXgrid = (matrix) =>{
        const rotatedMatrix = rotateMatrix(matrix)
        const xArray = []

        matrix.forEach( (item, id) =>{
            xArray.push(sumOfEachGroups( matrix[id] ))
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

    const gameGrid = levels[id].answer.map((row, rowID) =>{
        const cells = row.map((cell, cellID) => <td></td> )
        return (
            <tr>{cells}</tr>
        )
    })

    return (
        <div className="game">
            {gameGrid}
        </div>
    )
}

export default Level
