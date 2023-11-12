import { createDivs } from '../util'
import { DirectorCard } from './DirectorCard'

export function About2() {
    const directors = [
        {
            name: 'Nikita Marks',
            avatar: 'images/avatar-nikita.jpg',
            quote: "Nikita's quote",
        },
        {
            name: 'Cristian Duncan',
            avatar: 'images/avatar-christian.jpg',
            quote: "Cristian's quote",
        },
        {
            name: 'Cruz Hamer',
            avatar: 'images/avatar-cruz.jpg',
            quote: "Cruz's quote",
        },
        {
            name: 'Drake Heaton',
            avatar: 'images/avatar-drake.jpg',
            quote: "Drake's quote",
        },
        {
            name: 'Griffin Wise',
            avatar: 'images/avatar-griffin.jpg',
            quote: 'Unique perspectives shape unique products, which is what you need to survive these days.',
        },
        {
            name: 'Aden Allen',
            avatar: 'images/avatar-griffin.jpg',
            quote: 'Empowered teams create truly amazing products. Set the north star and let them follow it.',
        },
    ]

    const socials = ['twitter', 'linkedin']

    return (
        <section className="about-2 bg-secondary-3">
            <h2>Meet the directors</h2>
            <ul className="directors">
                {directors.map((d) => (
                    <li key={d.name}>
                        <DirectorCard director={d} />
                    </li>
                ))}
            </ul>

            {
                /* for bg images, will be filled in css */
                createDivs(2)
            }
        </section>
    )
}
