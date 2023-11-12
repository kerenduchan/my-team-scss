import { createDivs } from '../util'
import { Nav } from './Nav'

export function Menu({ isOpen, onClose }) {
    return (
        <menu id="main-menu" className={isOpen ? '' : 'closed'}>
            <div className="overlay" />
            <div className="content">
                <button className="icon-btn close-btn" onClick={onClose} />
                <Nav />

                {
                    /* forbg images, will be filled in css */
                    createDivs(1)
                }
            </div>
        </menu>
    )
}
