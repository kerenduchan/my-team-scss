import { useEffect } from 'react'
import { AboutPreface } from '../cmp/AboutPreface'
import { AboutDirectors } from '../cmp/AboutDirectors'
import { AboutClients } from '../cmp/AboutClients'
import { GetStarted } from '../cmp/GetStarted'

export function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="about">
            <AboutPreface />
            <AboutDirectors />
            <AboutClients />
            <GetStarted />
        </div>
    )
}
