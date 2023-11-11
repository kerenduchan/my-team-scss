import { createDivs } from '../util'

export function HomepageSection4() {
    return (
        <div className="homepage-section-4 bg-primary-2">
            <h2>Ready to get started?</h2>
            <button>contact us</button>

            {
                /* for bg images, will be filled in css */
                createDivs(1)
            }
        </div>
    )
}
