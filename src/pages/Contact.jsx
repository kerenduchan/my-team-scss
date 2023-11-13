import { useEffect } from 'react'
import { Contact1 } from '../cmp/Contact1'
import { Contact2 } from '../cmp/Contact2'

export function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="contact">
            <Contact1 />
            <Contact2 />
        </div>
    )
}
