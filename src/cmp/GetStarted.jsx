import { useNavigate } from 'react-router-dom'

export function GetStarted() {
    const navigate = useNavigate()

    function onContactUsClick() {
        navigate('/contact')
    }

    return (
        <section className="get-started bg-primary-2">
            <h2>Ready to get started?</h2>
            <button className="btn-pill" onClick={onContactUsClick}>
                contact us
            </button>

            {/* bg images */}
            <img className="bg-1" src="images/bg-pattern-home-6-about-5.svg" />
        </section>
    )
}
