import { createDivs } from '../util'

export function HomePreface() {
    return (
        <section className="home-preface bg-primary-3">
            <h1>
                Find the
                <br /> best <mark>talent</mark>
            </h1>
            <article>
                Finding the right people and building high performing teams can
                be hard. Most companies aren't tapping into the abundance of
                global talent. We're about to change that.
            </article>

            {
                /* for bg images, will be filled in css */
                createDivs(3)
            }
        </section>
    )
}
