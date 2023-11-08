import { Stripes } from './Stripes'

export function Graphic1() {
    return (
        <div className="graphic1">
            <div className="graphic1-item circle bg-secondary-2" />
            <Stripes classes="graphic1-item" />
            <div className="graphic1-item donut border-secondary-4" />
            <div className="graphic1-item donut border-primary-2" />
            <div className="graphic1-item bg-secondary-1" />
        </div>
    )
}
