export { createDivs }

function createDivs(count, prefix = 'bg') {
    return [...Array(count).keys()].map((n) => (
        <div className={`${prefix}-${n + 1}`}></div>
    ))
}
