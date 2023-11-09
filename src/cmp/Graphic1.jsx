import { Stripes } from './Stripes'

export function Graphic1() {
    return (
        <div className="graphic1">
            <div className="graphic1-full-circle circle bg-secondary-2" />
            <Stripes count={6} />
            <div className="graphic1-donut-back donut border-secondary-4" />
            <div className="graphic1-donut-front donut border-primary-2" />
            <div className="graphic1-square bg-secondary-1" />
        </div>
    )
}
