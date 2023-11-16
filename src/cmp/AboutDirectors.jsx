import { getDirectors } from '../services/director.service'
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

            {/* bg images */}
            <img
                className="bg-1"
                src="images/bg-pattern-about-2-contact-1.svg"
            />
            <img className="bg-2" src="images/bg-pattern-home-4-about-3.svg" />
        </section>
    )
}
