import { useNavigate } from 'react-router-dom'
import { Nav } from './Nav'

export function Header() {
    const navigate = useNavigate()

    function onContactUsClick() {
        navigate('/contact')
    }

    return (
        <header className="bg-primary-3">
            <img className="logo" src="images/logo.svg" alt="myteam" />
            <Nav />
            <button className="contact-us" onClick={onContactUsClick}>
                contact us
            </button>
            <img src="images/icon-hamburger.svg" className="hamburger" />
        </header>
    )
}
