import { useNavigate } from 'react-router'
import { Nav } from './Nav'

export function Footer() {
    const navigate = useNavigate()

    const address = `987  Hillcrest Lane
Irvine, CA
California 92714
Call Us : 949-833-7432`

    const socials = ['facebook', 'pinterest', 'twitter']

    function onLinkClick(link) {
        navigate(link)
    }

    return (
        <footer className="bg-secondary-5">
            <img className="logo" src="images/logo.svg" alt="myteam" />
            <Nav onLinkClick={onLinkClick} />
            <address>{address}</address>
            <ul>
                {socials.map((s) => (
                    <li key={s}>
                        <a key={s} className={s} />
                    </li>
                ))}
            </ul>

            <article className="copyright">
                Copyright 2020. All Rights Reserved
            </article>
        </footer>
    )
}
