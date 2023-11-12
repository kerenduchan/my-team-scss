import { createDivs } from '../util'
import { DirectorCard } from './DirectorCard'

export function About2() {
    const directors = [
        {
            name: 'Nikita Marks',
            avatar: 'images/avatar-nikita.jpg',
            quote: 'Success is not final; failure is not fatal: it is the courage to continue that counts.',
            socials: [
                { id: 'twitter', link: '' },
                { id: 'linkedin', link: '' },
            ],
        },
        {
            name: 'Cristian Duncan',
            avatar: 'images/avatar-christian.jpg',
            quote: 'Play by the rules, but be ferocious.',
            socials: [
                { id: 'twitter', link: '' },
                { id: 'linkedin', link: '' },
            ],
        },
        {
            name: 'Cruz Hamer',
            avatar: 'images/avatar-cruz.jpg',
            quote: 'Business opportunities are like buses, there’s always another one coming.',
            socials: [
                { id: 'twitter', link: '' },
                { id: 'linkedin', link: '' },
            ],
        },
        {
            name: 'Drake Heaton',
            avatar: 'images/avatar-drake.jpg',
            quote: 'Every problem is a gift—without problems we would not grow.',
            socials: [
                { id: 'twitter', link: '' },
                { id: 'linkedin', link: '' },
            ],
        },
        {
            name: 'Griffin Wise',
            avatar: 'images/avatar-griffin.jpg',
            quote: 'Unique perspectives shape unique products, which is what you need to survive these days.',
            socials: [
                { id: 'twitter', link: '' },
                { id: 'linkedin', link: '' },
            ],
        },
        {
            name: 'Aden Allen',
            avatar: 'images/avatar-aden.jpg',
            quote: 'Empowered teams create truly amazing products. Set the north star and let them follow it.',
            socials: [
                { id: 'twitter', link: '' },
                { id: 'linkedin', link: '' },
            ],
        },
    ]

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
