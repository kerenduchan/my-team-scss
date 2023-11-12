import { useNavigate } from 'react-router-dom'
import { createDivs } from '../util'

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

            {
                /* for bg images, will be filled in css */
                createDivs(1)
            }
        </section>
    )
}
