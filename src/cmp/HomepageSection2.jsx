export function HomepageSection2() {
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
        <div className="homepage-section-2 bg-secondary-4">
            <img className="pattern-3" src="images/bg-pattern-home-3.svg" />
            <img className="stripe" src="images/stripe-primary-2.svg" />
            <div className="title">
                Build & manage distributed teams like no one else.
            </div>

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
        </div>
    )
}

function ListItem({ img, title, text }) {
    return (
        <>
            <img className="icon" src={img} />
            <heading className="title primary-2">{title}</heading>
            <div className="text body-2">{text}</div>
        </>
    )
}
