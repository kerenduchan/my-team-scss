import { getDirectors } from '../services/director.service'
import { createDivs } from '../util/util'
import { DirectorCard } from './DirectorCard'

export function AboutDirectors() {
    const directors = getDirectors()

    return (
        <section className="about-directors bg-secondary-3">
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
