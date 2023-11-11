import { createDivs } from '../util'

export function HomepageSection4() {
    return (
        <div className="homepage-section-4 bg-primary-2">
            <heading>Ready to get started?</heading>
            <button>contact us</button>

            {
                /* for bg images, will be filled in css */
                createDivs(1)
            }
        </div>
    )
}
