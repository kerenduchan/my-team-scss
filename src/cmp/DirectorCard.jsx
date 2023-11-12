import { useState } from 'react'

export function DirectorCard({ director }) {
    const { name, avatar, quote, socials } = director

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`director ${isOpen ? 'open' : ''}`}>
            <h3>{name}</h3>

            <img className="avatar" src={avatar} />

            <blockquote>{quote}</blockquote>

            <ul className="socials">
                {socials.map((s) => (
                    <li key={s.id}>
                        <a key={s.id} className={s.id} href={s.link} />
                    </li>
                ))}
            </ul>

            <button
                className="circle-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img
                    src="images/icon-cross.svg"
                    alt={isOpen ? 'open' : 'close'}
                />
            </button>
        </div>
    )
}
