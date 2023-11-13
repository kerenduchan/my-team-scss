export { createDivs }

function createDivs(count, prefix = 'bg') {
    return [...Array(count).keys()].map((n) => (
        <div key={n} className={`${prefix}-${n + 1}`}></div>
    ))
}
