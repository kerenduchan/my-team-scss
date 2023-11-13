import { useEffect } from 'react'
import { About1 } from '../cmp/About1'
import { About2 } from '../cmp/About2'
import { About3 } from '../cmp/About3'
import { GetStarted } from '../cmp/GetStarted'

export function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="about">
            <About1 />
            <About2 />
            <About3 />
            <GetStarted />
        </div>
    )
}
