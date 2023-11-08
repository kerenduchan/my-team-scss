import { Graphic1 } from './Graphic1'
import { Graphic2 } from './Graphic2'

export function FindTalent() {
    return (
        <div className="find-talent">
            <div className="title">
                Find the
                <br /> best <mark>talent</mark>
            </div>
            <p>
                Finding the right people and building high performing teams can
                be hard. Most companies aren't tapping into the abundance of
                global talent. We're about to change that.
            </p>
            <Graphic1 />
            <Graphic2 />
        </div>
    )
}
