import { HomeSection1 } from '../cmp/HomeSection1'
import { HomeSection2 } from '../cmp/HomeSection2'
import { HomeSection3 } from '../cmp/HomeSection3'
import { HomeSection4 } from '../cmp/HomeSection4'

export function Home() {
    return (
        <div className="home">
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
        </div>
    )
}
