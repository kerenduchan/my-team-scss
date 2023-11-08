export function Stripes({ classes }) {
    const stripeIds = [...Array(6).keys()]

    return (
        <div className={`${classes} stripes`}>
            {stripeIds.map((id) => (
                <div key={id} className="stripe bg-secondary-1" />
            ))}
        </div>
    )
}
