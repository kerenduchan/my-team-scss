export function Squares({ rowCount, colCount, color }) {
    const rowIds = [...Array(rowCount).keys()]

    return (
        <div className="squares">
            {rowIds.map((id) => (
                <SquaresRow key={id} count={colCount} color={color} />
            ))}
        </div>
    )
}

function SquaresRow({ count, color }) {
    const squareIds = [...Array(count).keys()]
    return (
        <div className="squares-row">
            {squareIds.map((id) => (
                <div key={id} className={`square ${color}`} />
            ))}
        </div>
    )
}
