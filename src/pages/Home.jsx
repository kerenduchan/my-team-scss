import { HomepageSection1 } from '../cmp/HomepageSection1'
import { HomepageSection2 } from '../cmp/HomepageSection2'
import { HomepageSection3 } from '../cmp/HomepageSection3'
import { HomepageSection4 } from '../cmp/HomepageSection4'

export function Home() {
    return (
        <div className="home">
            <HomepageSection1 />
            <HomepageSection2 />
            <HomepageSection3 />
            <HomepageSection4 />
        </div>
    )
}
