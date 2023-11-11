import { useNavigate } from 'react-router-dom'
import { createDivs } from '../util'

export function HomeSection4() {
    const navigate = useNavigate()

    function onContactUsClick() {
        navigate('/contact')
    }

    return (
        <div className="home-section-4 bg-primary-2">
            <h2>Ready to get started?</h2>
            <button onClick={onContactUsClick}>contact us</button>

            {
                /* for bg images, will be filled in css */
                createDivs(1)
            }
        </div>
    )
}
