import { HomeSection1 } from '../cmp/HomeSection1'
import { HomeSection2 } from '../cmp/HomeSection2'
import { HomeSection3 } from '../cmp/HomeSection3'
import { GetStartedSection } from '../cmp/GetStartedSection'

export function Home() {
    return (
        <div className="home">
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <GetStartedSection />
        </div>
    )
}
