import { AboutSection1 } from '../cmp/AboutSection1'
import { AboutSection2 } from '../cmp/AboutSection2'
import { GetStartedSection } from '../cmp/GetStartedSection'

export function About() {
    return (
        <div id="about">
            <AboutSection1 />
            <AboutSection2 />
            <GetStartedSection />
        </div>
    )
}
