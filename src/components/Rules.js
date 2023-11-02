import "../css/rules.css"

function Rules() {
    return (
        <div className="flex col rules white-bg" style={{alignItems: "flex-start"}}>
            <h3 className="heading spacer">Rules</h3>
            <p className="gap-0 flex">
                <img className="icon" src="/icons/left-click.svg" alt="left"/>
                Use left mouse click to fill a square
            </p>
            <p className="gap-0 flex">
                <img className="icon" src="/icons/right-click.svg" alt="left"/>
                Use right mouse click to mark square with a cross
            </p>
            <hr className="spacer"/>
            <ol className="spacer">
                <li><b class="bold">Grid:</b> The game is played on a rectangular grid. The grid is typically square but can vary in size. Each cell in the grid can either be filled or empty.</li>

                <li><b class="bold">Clues:</b> There are numbers on the top and left side of the grid that represent the lengths of consecutive filled cells in each row and column.</li>

                <li><b class="bold">Row and Column Clues:</b> The numbers on the sides of the grid represent the lengths of consecutive filled cells in that particular row or column. For example, "3 1" would mean there are three consecutive filled cells followed by at least one empty cell, in no particular order.</li>

                <li><b class="bold">Separation of Clues:</b> If there are multiple numbers in a row or column, there must be at least one empty cell between each set of consecutive filled cells as indicated by the numbers.</li>

                <li><b class="bold">Logical Deduction:</b> Use the provided clues to logically deduce which cells should be filled and which should be left empty. Start with rows or columns that have the most defined clues.</li>

                <li><b class="bold">Errors:</b> Filling in a cell that does not correspond with the clues will result in errors. There is a <b>3</b> mistakes allowed, and exceeding this limit leads to a failed puzzle.</li>

                <li><b class="bold">Completion:</b> The puzzle is solved when all cells in the grid are correctly filled, forming a picture based on the given clues.</li>
                
            </ol>

            <p>More rules and techniques you can read <b><a href="https://en.wikipedia.org/wiki/Nonogram" target="_blank">here</a></b></p>

        </div>
    )
}

export default Rules
