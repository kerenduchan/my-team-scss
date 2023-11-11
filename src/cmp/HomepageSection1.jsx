import { createDivs } from '../util'

export function HomepageSection1() {
    return (
        <div className="homepage-section-1 bg-primary-3">
            <div className="title">
                Find the
                <br /> best <mark>talent</mark>
            </div>
            <p>
                Finding the right people and building high performing teams can
                be hard. Most companies aren't tapping into the abundance of
                global talent. We're about to change that.
            </p>

            {
                /* for bg images, will be filled in css */
                createDivs(3)
            }
        </div>
    )
}
