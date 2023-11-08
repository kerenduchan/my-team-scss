import { Stripes } from './Stripes'

export function Design1() {
    return (
        <div className="design1">
            <div className="design1-item circle bg-secondary-2" />
            <Stripes classes="design1-item" />
            <div className="design1-item donut border-secondary-4" />
            <div className="design1-item donut border-primary-2" />
            <div className="design1-item bg-secondary-1" />
        </div>
    )
}
