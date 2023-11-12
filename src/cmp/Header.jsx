import { useNavigate } from 'react-router-dom'
import { Nav } from './Nav'

export function Header({ onOpenMenu }) {
    const navigate = useNavigate()

    function onContactUsClick() {
        navigate('/contact')
    }

    function onLinkClick(link) {
        navigate(link)
    }

    return (
        <header className="bg-primary-3">
            <img className="logo" src="images/logo.svg" alt="myteam" />
            <Nav onLinkClick={onLinkClick} />
            <button className="btn-pill contact-us" onClick={onContactUsClick}>
                contact us
            </button>
            <button className="icon hamburger" onClick={onOpenMenu} />
        </header>
    )
}
