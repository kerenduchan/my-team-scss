import { createDivs } from '../util'

export function About3() {
    const clients = [
        'the-verge',
        'jakarta-post',
        'the-guardian',
        'tech-radar',
        'gadgets-now',
    ]

    return (
        <section className="about-3 bg-secondary-4">
            <h2>Some of our clients</h2>
            {
                /* for bg images, will be filled in css */
                createDivs(1)
            }

            <ul className="clients">
                {clients.map((c) => (
                    <li key={c}>
                        <img src={`images/logo-${c}.png`} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
