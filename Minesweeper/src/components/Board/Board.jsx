import Cell from "../Cell/Cell.jsx";

const Board = ({ board }) => {
    return(
        <div className="board-container">
            <div key={rowIndex} className="row">
                {board.map((row, rowIndex) => {
                    {row.map((cell, colIndex) => {
                        <Cell key={colIndex} value={cell} x={colIndex} y={rowIndex} />
                    })}
                })}
            </div>
        </div>
    );
}