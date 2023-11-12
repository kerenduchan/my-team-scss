import { getDirectors } from '../services/director.service'
import { createDivs } from '../util'
import { DirectorCard } from './DirectorCard'

export function About2() {
    const directors = getDirectors()

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
