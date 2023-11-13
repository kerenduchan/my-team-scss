import { useEffect } from 'react'
import { ContactForm } from '../cmp/ContactForm'
import { createDivs } from '../util/util'

export function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const items = [
        {
            id: 1,
            img: 'images/icon-person.svg',
            title: 'The quality of our talent network',
        },
        {
            id: 2,
            img: 'images/icon-cog.svg',
            title: 'Usage & implementation of our software',
        },
        {
            id: 3,
            img: 'images/icon-chart.svg',
            title: 'How we help drive innovation',
        },
    ]

    return (
        <div id="contact">
            <h1>Contact</h1>

            <h2 className="primary-2">Ask us about</h2>

            <ul className="ask-us-about-list">
                {items.map((item) => (
                    <li key={item.id}>
                        <ListItem item={item} />
                    </li>
                ))}
            </ul>

            <section className="contact-form">
                <ContactForm />
            </section>

            {
                /* for bg images, will be filled in css */
                createDivs(2)
            }
        </div>
    )
}

function ListItem({ item }) {
    const { img, title } = item
    return (
        <>
            <img className="icon" src={img} />
            <h3 className="title">{title}</h3>
        </>
    )
}
