import { createDivs } from '../util'

export function AboutSection2() {
    const directors = [
        { name: 'Nikita Marks', avatar: 'images/avatar-nikita.jpg' },
        { name: 'Cristian Duncan', avatar: 'images/avatar-christian.jpg' },
        { name: 'Cruz Hamer', avatar: 'images/avatar-cruz.jpg' },
        { name: 'Drake Heaton', avatar: 'images/avatar-drake.jpg' },
        { name: 'Griffin Wise', avatar: 'images/avatar-griffin.jpg' },
    ]

    return (
        <section className="about-section-2 bg-secondary-3">
            <h2>Meet the directors</h2>
            <ul>
                {directors.map((d) => (
                    <li>
                        <Director name={d.name} avatar={d.avatar} />
                    </li>
                ))}
            </ul>

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
            <h3>{name}</h3>
            <img className="avatar" src={avatar} />
        </>
    )
}
