import { HomePreface } from '../cmp/HomePreface'
import { HomeStrengths } from '../cmp/HomeStrengths'
import { HomeStories } from '../cmp/HomeStories'
import { GetStarted } from '../cmp/GetStarted'
import { useEffect } from 'react'

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="home">
            <HomePreface />
            <HomeStrengths />
            <HomeStories />
            <GetStarted />
        </div>
    )
}
