import { useState } from 'react'
import { createDivs } from '../util'

export function About2() {
    const directors = [
        { name: 'Nikita Marks', avatar: 'images/avatar-nikita.jpg' },
        { name: 'Cristian Duncan', avatar: 'images/avatar-christian.jpg' },
        { name: 'Cruz Hamer', avatar: 'images/avatar-cruz.jpg' },
        { name: 'Drake Heaton', avatar: 'images/avatar-drake.jpg' },
        { name: 'Griffin Wise', avatar: 'images/avatar-griffin.jpg' },
        { name: 'Aden Allen', avatar: 'images/avatar-griffin.jpg' },
    ]

    const socials = ['twitter', 'linkedin']

    return (
        <section className="about-2 bg-secondary-3">
            <h2>Meet the directors</h2>
            <ul className="directors">
                {directors.map((d) => (
                    <li key={d.name}>
                        <Director director={d} />
                    </li>
                ))}
            </ul>

            {
                /* for bg images, will be filled in css */
                createDivs(2)
            }
        </section>
    )
}

function Director({ director }) {
    const { name, avatar } = director

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`director ${isOpen ? 'open' : ''}`}>
            <h3>{name}</h3>
            <img className="avatar" src={avatar} />
            <button
                className="circle-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src="images/icon-cross.svg" alt="more" />
            </button>
        </div>
    )
}
