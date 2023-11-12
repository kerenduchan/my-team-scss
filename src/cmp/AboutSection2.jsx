import { createDivs } from '../util'

export function AboutSection2() {
    const directors = [
        { name: 'Nikita Marks', avatar: 'images/avatar-nikita.jpg' },
        { name: 'Cristian Duncan', avatar: 'images/avatar-christian.jpg' },
        { name: 'Cruz Hamer', avatar: 'images/avatar-cruz.jpg' },
        { name: 'Drake Heaton', avatar: 'images/avatar-drake.jpg' },
        { name: 'Griffin Wise', avatar: 'images/avatar-griffin.jpg' },
    ]

    const socials = ['twitter', 'linkedin']

    return (
        <section className="about-section-2 bg-secondary-3">
            <h2>Meet the directors</h2>
            <ul className="directors">
                {directors.map((d) => (
                    <li key={d.name} className="bg-secondary-4">
                        <Director name={d.name} avatar={d.avatar} />
                    </li>
                ))}
            </ul>

            <div className="quote-box bg-secondary-5">
                <h3 className="secondary-1">Aden Allen</h3>
                <blockquote>
                    Empowered teams create truly amazing products. Set the north
                    star and let them follow it.
                </blockquote>

                <ul className="social">
                    {socials.map((s) => (
                        <li key={s}>
                            <a key={s} className={s} />
                        </li>
                    ))}
                </ul>

                <button className="circle-button bg-secondary-1">
                    <img
                        src="images/icon-cross.svg"
                        alt="close"
                        className="secondary-4"
                    />
                </button>
            </div>

            {
                /* for bg images, will be filled in css */
                createDivs(2)
            }
        </section>
    )
}

function Director({ name, avatar }) {
    return (
        <>
            <h3 className="secondary-1">{name}</h3>
            <img className="avatar" src={avatar} />
            <button className="circle-button">
                <img
                    src="images/icon-cross.svg"
                    alt="more"
                    className="secondary-4"
                />
            </button>
        </>
    )
}
