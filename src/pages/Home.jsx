import { Home1 } from '../cmp/Home1'
import { Home2 } from '../cmp/Home2'
import { Home3 } from '../cmp/Home3'
import { GetStarted } from '../cmp/GetStarted'

export function Home() {
    return (
        <div id="home">
            <Home1 />
            <Home2 />
            <Home3 />
            <GetStarted />
        </div>
    )
}
