export function Stripes({ count }) {
    const stripeIds = [...Array(count).keys()]

    return (
        <div className="stripes">
            {stripeIds.map((id) => (
                <div key={id} className="stripe bg-secondary-1" />
            ))}
        </div>
    )
}
