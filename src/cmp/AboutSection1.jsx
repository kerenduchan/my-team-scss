import { createDivs } from '../util'

export function AboutSection1() {
    return (
        <section className="about-section-1">
            <h1>About</h1>
            <article>
                We help companies build dynamic teams made up of top global
                talent. Using our network of passionate professionals we drive
                innovation and deliver incredible outcomes. Talented, diverse
                teams shape the best products and experiences. We’ll bring those
                teams to you.
            </article>

            {
                /* for bg images, will be filled in css */
                createDivs(2)
            }
        </section>
    )
}
