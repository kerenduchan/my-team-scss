export function HomepageSection2() {
    return (
        <div className="homepage-section-2 bg-secondary-4">
            <div className="homepage-section-2-content">
                <div className="title">
                    Build & manage distributed teams like no one else.
                </div>
                <img className="stripe" src="images/stripe-primary-2.svg" />
                <img className="pattern-3" src="images/bg-pattern-home-3.svg" />

                <ul>
                    <ListItem
                        img="images/icon-person.svg"
                        title="Experienced Individuals"
                        text="Our network is made up of highly experienced professionals who are passionate about what they do."
                    />
                    <ListItem
                        img="images/icon-cog.svg"
                        title="Easy to Implement"
                        text="Our processes have been refined over years of implementation meaning our teams always deliver."
                    />
                    <ListItem
                        img="images/icon-chart.svg"
                        title="Enhanced Productivity"
                        text="Our customized platform with in-built analytics helps you manage your distributed teams."
                    />
                </ul>
            </div>
        </div>
    )
}

function ListItem({ img, title, text }) {
    return (
        <li>
            <img className="icon" src={img} />
            <h3 className="title primary-2">{title}</h3>
            <div className="text body-2">{text}</div>
        </li>
    )
}
