import { useNavigate } from 'react-router'
import { Nav } from './Nav'

export function Menu({ isOpen, onClose }) {
    const navigate = useNavigate()

    function onLinkClick(link) {
        onClose()
        navigate(link)
    }

    function onContactUsClick() {
        onLinkClick('/contact')
    }

    return (
        <>
            <div className={`overlay ${isOpen ? '' : 'closed'}`} />
            <div className={`content ${isOpen ? '' : 'closed'}`}>
                <button className="btn-icon close-btn" onClick={onClose}>
                    <img src="images/icon-close.svg" alt="close" />
                </button>
                <Nav onLinkClick={onLinkClick} />
                <button
                    className="btn-pill contact-us"
                    onClick={onContactUsClick}
                >
                    contact us
                </button>

                {/* bg image */}
                <img
                    className="bg-1"
                    src="images/bg-pattern-about-1-mobile-nav-1.svg"
                />
            </div>
        </>
    )
}
