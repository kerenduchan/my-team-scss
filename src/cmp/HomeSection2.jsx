import { createDivs } from '../util'

export function HomeSection2() {
    const items = [
        {
            id: 1,
            img: 'images/icon-person.svg',
            title: 'Experienced Individuals',
            text: 'Our network is made up of highly experienced professionals who are passionate about what they do.',
        },
        {
            id: 2,
            img: 'images/icon-cog.svg',
            title: 'Easy to Implement',
            text: 'Our processes have been refined over years of implementation meaning our teams always deliver.',
        },
        {
            id: 3,
            img: 'images/icon-chart.svg',
            title: 'Enhanced Productivity',
            text: 'Our customized platform with in-built analytics helps you manage your distributed teams.',
        },
    ]

    return (
        <div className="home-section-2 bg-secondary-4">
            <h2>Build & manage distributed teams like no one else.</h2>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <ListItem
                            img={item.img}
                            title={item.title}
                            text={item.text}
                        />
                    </li>
                ))}
            </ul>

            {
                /* for bg images, will be filled in css */
                createDivs(2)
            }
        </div>
    )
}

function ListItem({ img, title, text }) {
    return (
        <>
            <img className="icon" src={img} />
            <h3 className="primary-2">{title}</h3>
            <article className="body-2">{text}</article>
        </>
    )
}
