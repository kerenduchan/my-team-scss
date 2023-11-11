import { Nav } from './Nav'

export function Header() {
    return (
        <header className="bg-primary-3">
            <img className="logo" src="images/logo.svg" alt="myteam" />
            <Nav />
            <button className="contact-us">contact us</button>
            <img src="images/icon-hamburger.svg" className="hamburger" />
        </header>
    )
}
