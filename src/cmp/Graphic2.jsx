import { Squares } from './Squares'

export function Graphic2() {
    return (
        <div className="graphic2">
            <div className="graphic2-square bg-secondary-1" />
            <div className="graphic2-donut donut border-secondary-4" />
            <Squares rowCount={6} colCount={8} color={'bg-primary-2'} />
        </div>
    )
}
